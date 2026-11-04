import type { Metadata } from "next";
import MomentsGallery from "../components/moments-gallery";

export const metadata: Metadata = { title: "Momentos", description: "Fotos y videos de Red Raccoons." };

export default function MomentosPage() {
  return (
    <section className="moments-page">
      <div className="moments-hero">
        <div className="shell moments-hero-inner"><div className="section-kicker">RED RACCOONS</div><h1>NUESTROS<br /><span>MOMENTOS</span><span className="moments-asterisk" aria-hidden="true">✳</span></h1><div className="moments-hero-footer"><p>FOTOS Y VIDEOS DE NUESTROS TOQUINES.</p><span>RED RACCOONS</span></div></div>
      </div>
      <MomentsGallery />
    </section>
  );
}
