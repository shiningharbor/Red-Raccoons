import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = { title: "Música", description: "La música de Red Raccoons." };

export default function MusicaPage() {
  return (
    <section className="music-page">
      <div className="shell music-intro"><span className="section-kicker">MÚSICA</span><span>RED RACCOONS</span></div>
      <div className="shell music-stage">
        <div className="music-content"><span className="music-label">RED RACCOONS</span><h1>NUESTRA<br /><em>MÚSICA.</em></h1><p>Por aquí compartiremos nuestra música. Mientras tanto, puedes ver nuestros momentos.</p><Link href="/momentos" className="pill-button pill-dark">VER MOMENTOS <span aria-hidden="true">↗</span></Link></div>
        <div className="vinyl-area" aria-label="Ilustración de un disco de vinilo Red Raccoons"><div className="vinyl-disc"><div className="vinyl-label"><Image src="/Red_Raccoons.png" width={156} height={156} alt="Emblema de Red Raccoons" /></div></div><span className="vinyl-caption">RED RACCOONS / MÚSICA</span><span className="vinyl-spark" aria-hidden="true">✳</span></div>
      </div>
      <div className="shell music-foot"><span>RED RACCOONS</span><a href="https://www.instagram.com/red_raccoons/" target="_blank" rel="noopener noreferrer">INSTAGRAM ↗</a></div>
    </section>
  );
}
