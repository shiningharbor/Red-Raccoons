import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div className="footer-identity">
          <Image src="/red.png" width={61} height={48} alt="" />
          <span>RED<br />RACCOONS<span className="footer-registered">®</span></span>
        </div>
        <p>Síguenos en Instagram.<br />@red_raccoons</p>
        <div className="footer-links">
          <Link href="/fechas">FECHAS ↗</Link>
          <Link href="/contrataciones">CONTRATACIONES ↗</Link>
          <a href="https://www.instagram.com/red_raccoons/" target="_blank" rel="noopener noreferrer">INSTAGRAM ↗</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} RED RACCOONS</span>
        <span>RED RACCOONS <span className="red-text">✳</span></span>
      </div>
    </footer>
  );
}
