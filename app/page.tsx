import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-grain" aria-hidden="true" />
        <div className="shell home-hero-inner">
          <div className="hero-upper-meta"><span>BIENVENIDOS A NUESTRA PÁGINA</span><span>SOMOS RED RACCOONS</span></div>
          <div className="hero-wordmark" aria-label="Red Raccoons">
            <span>RED</span>
            <span>RACCOONS<span className="hero-star" aria-hidden="true">✳</span></span>
          </div>
          <div className="hero-mascot" aria-hidden="true"><Image src="/red.png" width={438} height={346} priority alt="" /></div>
          <div className="hero-bottom">
            <div className="hero-description"><span className="eyebrow-dot" /><p>Nos presentamos, somos Red Raccoons.<br />Tu banda favorita o tal vez unos del montón.</p></div>
            <Link className="pill-button pill-dark" href="/integrantes">CONOCE A LA BANDA <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="hero-vertical" aria-hidden="true">RED RACCOONS // RED RACCOONS</div>
      </section>

      <div className="ticker" aria-hidden="true"><div className="ticker-track">RED RACCOONS <span>✳</span> ABRAHAM <span>✳</span> EMILIO <span>✳</span> EMILIANO <span>✳</span> IVÁN <span>✳</span> RED RACCOONS <span>✳</span> ABRAHAM <span>✳</span> EMILIO <span>✳</span> EMILIANO <span>✳</span> IVÁN <span>✳</span></div></div>

      <section className="home-manifesto shell section-pad">
        <div className="section-kicker"><span className="star-mark">✳</span> SOBRE NOSOTROS</div>
        <div className="manifesto-layout">
          <h2 className="display-title">SOMOS<br /><em>UNA</em><br />BANDA.</h2>
          <div className="manifesto-aside">
            <span className="manifesto-rule" />
            <p>Somos una banda apasionada por la música y el arte. Cada uno de nosotros trae algo único a nuestra propuesta sonora, buscando siempre innovar y conectar con nuestro público.</p>
            <Link className="text-arrow" href="/integrantes">INTEGRANTES <span aria-hidden="true">↗</span></Link>
            <Image src="/red.png" alt="" width={125} height={99} className="manifesto-stamp" />
          </div>
        </div>
      </section>

      <section className="home-feature">
        <div className="shell feature-grid">
          <div className="feature-art">
            <div className="feature-art-disc"><Image src="/Red_Raccoons.jpg" alt="Emblema de Red Raccoons" fill sizes="(max-width: 850px) 80vw, 480px" /></div>
            <span className="feature-corner">RED RACCOONS</span>
          </div>
          <div className="feature-copy">
            <div className="section-kicker">NUESTROS MOMENTOS</div>
            <h2 className="feature-title">EN<br /><span>VIVO.</span></h2>
            <p>Fotos y videos de nuestros toquines.</p>
            <Link className="pill-button pill-red" href="/momentos">VER MOMENTOS <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="home-bottom-cta shell section-pad">
        <div><span className="section-kicker">CONTACTO</span><h2>¿NOS<br /><span>ESCRIBES?</span></h2></div>
        <Link className="circle-link" href="/contrataciones" aria-label="Ir a contrataciones"><span>CONTACTO</span><strong aria-hidden="true">↗</strong></Link>
      </section>
    </>
  );
}
