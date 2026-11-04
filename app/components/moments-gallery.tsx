
"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

type InstagramPost = {
  id: string;
  permalink: string;
};

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

function shuffle<T>(array: T[]): T[] {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function rotatePosts(posts: InstagramPost[]) {
  if (posts.length <= 3) return posts;

  const visible = posts.slice(0, 3);
  const visibleIds = new Set(visible.map((post) => post.id));

  // Conservamos dos publicaciones y reemplazamos una.
  const remaining = shuffle(
    posts.filter((post) => !visibleIds.has(post.id))
  );

  const nextVisible = shuffle([
    ...shuffle(visible).slice(0, 2),
    remaining[0],
  ]);

  const nextIds = new Set(nextVisible.map((post) => post.id));

  return [
    ...nextVisible,
    ...shuffle(posts.filter((post) => !nextIds.has(post.id))),
  ];
}

export default function MomentsGallery() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [scriptReady, setScriptReady] = useState(false);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);

  // Obtener automáticamente las publicaciones.
  useEffect(() => {
    const controller = new AbortController();

    async function loadPosts() {
      try {
        const response = await fetch("/api/instagram", {
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("Instagram unavailable");

        const data: { posts?: InstagramPost[] } =
          await response.json();

        if (!controller.signal.aborted) {
          setPosts(shuffle(data.posts ?? []));
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("No se pudo cargar Instagram", error);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadPosts();
    return () => controller.abort();
  }, []);

  // Rotación automática cada 30 segundos.
  useEffect(() => {
    if (posts.length <= 3 || paused || interacting) return;

    const interval = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setPosts((current) => rotatePosts(current));
      }
    }, 30000);

    return () => window.clearInterval(interval);
  }, [posts.length, paused, interacting]);

  // Procesar los embeds después de cada actualización.
  useEffect(() => {
    if (!scriptReady || posts.length === 0) return;

    const timeout = window.setTimeout(() => {
      window.instgrm?.Embeds.process();
    }, 150);

    return () => window.clearTimeout(timeout);
  }, [posts, scriptReady]);

  return (
    <section className="shell instagram-section">
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />

      <div className="instagram-toolbar">
        <span>@RED_RACCOONS</span>

        <div className="instagram-actions">
          <button
            type="button"
            aria-pressed={paused}
            onClick={() => setPaused((value) => !value)}
          >
            {paused ? "▶ REANUDAR" : "Ⅱ PAUSAR"}
          </button>

          <a
            href="https://www.instagram.com/red_raccoons/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VER INSTAGRAM ↗
          </a>
        </div>
      </div>

      {loading && (
        <p className="instagram-message">
          Cargando publicaciones...
        </p>
      )}

      {!loading && posts.length === 0 && (
        <div className="instagram-message">
          <p>Aún no hay publicaciones para mostrar.</p>
          <a
            href="https://www.instagram.com/red_raccoons/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver nuestro Instagram ↗
          </a>
        </div>
      )}

      <div
        className="instagram-grid"
        onMouseEnter={() => setInteracting(true)}
        onMouseLeave={() => setInteracting(false)}
        onFocusCapture={() => setInteracting(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setInteracting(false);
          }
        }}
      >
        {posts.slice(0, 3).map((post) => (
          <article className="instagram-card" key={post.id}>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={post.permalink}
              data-instgrm-version="14"
              style={{
                background: "#fff",
                border: 0,
                margin: "0 auto",
                width: "100%",
              }}
            >
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver publicación en Instagram
              </a>
            </blockquote>
          </article>
        ))}
      </div>
    </section>
  );
}
