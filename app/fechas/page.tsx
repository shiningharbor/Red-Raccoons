import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Próximas fechas", description: "Consulta las próximas fechas de Red Raccoons." };

export default function FechasPage() {
  return (
    <section className="dates-page">
      <div className="shell dates-heading"><span className="section-kicker">PRÓXIMAS FECHAS</span><span>RED RACCOONS</span></div>
      <div className="shell poster-wrap">
        <div className="concert-poster">
          <span className="poster-top"><span>RED RACCOONS</span><span>EN VIVO</span></span>
          <h1>PRÓXIMAS<br /><em>FECHAS</em></h1>
          <div className="poster-stamp"><Image src="/Red_Raccoons.png" width={198} height={156} alt="" /></div>
          <div className="poster-center"><span className="poster-burst" aria-hidden="true">✳</span><strong>POR<br />ANUNCIAR</strong><span className="poster-burst" aria-hidden="true">✳</span></div>
          <div className="poster-bottom"><span>RED RACCOONS</span><span>PRÓXIMAMENTE</span></div>
        </div>
        <div className="dates-side-note"><div className="side-number">RED RACCOONS</div><h2>NOS VEMOS<br /><span>PRONTO.</span></h2><p>Cuando tengamos nuevas fechas, las compartiremos en Instagram.</p><a className="pill-button pill-red" href="https://www.instagram.com/red_raccoons/" target="_blank" rel="noopener noreferrer">VER INSTAGRAM <span aria-hidden="true">↗</span></a><Link className="text-arrow" href="/contrataciones">CONTRATACIONES ↗</Link></div>
      </div>
    </section>
  );
}
