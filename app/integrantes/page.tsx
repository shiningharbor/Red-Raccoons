import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { members } from "../lib/content";

export const metadata: Metadata = { title: "Integrantes", description: "Conoce a Abraham, Emilio, Emiliano e Iván de Red Raccoons." };

export default function IntegrantesPage() {
  return (
    <section className="members-page">
      <div className="shell members-intro">
        <div className="section-kicker">INTEGRANTES</div>
        <div className="members-heading"><h1>LA<br /><span>BANDA.</span></h1><div><span className="handdrawn-cross" aria-hidden="true">✳</span><p>Selecciona un integrante<br />para ver su información.</p></div></div>
        <div className="members-intro-line"><span>ABRAHAM · EMILIO · EMILIANO · IVÁN</span><span>CONÓCENOS ↓</span></div>
      </div>
      <div className="shell members-grid">
        {members.map((member) => (
          <article id={member.id} key={member.id} className="member-card">
            <details className="member-details">
              <summary aria-label={`Ver información de ${member.name}`}>
                <div className="member-portrait">
                  <Image src={member.image} alt={`Fotografía de ${member.name}`} fill sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 25vw" />
                  <span className="member-index">RR—{member.number}</span>
                </div>
                <div className="member-info">
                  <p>{member.role}</p>
                  <h2>{member.name.toUpperCase()} <span className="member-expand-icon" aria-hidden="true">+</span></h2>
                  <span className="member-expand-label">VER INFORMACIÓN</span>
                </div>
              </summary>
              <div className="member-detail-content">
                <p className="member-desc">{member.description}</p>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label={`Instagram de ${member.name}, nueva pestaña`}>INSTAGRAM <span aria-hidden="true">↗</span></a>
              </div>
            </details>
          </article>
        ))}
      </div>
      <div className="members-exit shell"><span>RED RACCOONS.</span><Link className="text-arrow" href="/musica">NUESTRA MÚSICA ↗</Link></div>
    </section>
  );
}
