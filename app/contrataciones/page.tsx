import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Contrataciones", description: "Escríbele a Red Raccoons para shows, fechas y colaboraciones." };

export default function ContratacionesPage() {
  return (
    <section className="booking-page">
      <div className="shell booking-inner">
        <div className="booking-copy"><span className="section-kicker">CONTRATACIONES</span><h1>HOLA,<br /><em>¿HABLAMOS?</em></h1><p>Para fechas, contrataciones o cualquier duda, mándanos mensaje por Instagram.</p><a className="booking-main-link" href="https://www.instagram.com/red_raccoons/" target="_blank" rel="noopener noreferrer"><span><small>ESCRÍBENOS EN INSTAGRAM</small><strong>@red_raccoons</strong></span><b aria-hidden="true">↗</b></a></div>
        <div className="booking-art"><div className="booking-art-ring"><Image src="/red.png" width={438} height={346} alt="Logo de Red Raccoons" priority /></div><span className="booking-art-top">RED RACCOONS</span><span className="booking-art-bottom">INSTAGRAM · @RED_RACCOONS</span></div>
      </div>
      <div className="shell booking-back"><Link href="/">← VOLVER AL INICIO</Link><span>RED RACCOONS</span></div>
    </section>
  );
}
