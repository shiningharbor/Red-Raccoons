"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/integrantes", label: "Integrantes" },
  { href: "/musica", label: "Música" },
  { href: "/momentos", label: "Momentos" },
  { href: "/fechas", label: "Fechas" },
  { href: "/contrataciones", label: "Contacto" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Link className="brand" href="/" aria-label="Red Raccoons, ir al inicio">
          <Image src="/red.png" width={58} height={46} alt="" priority />
          <span className="brand-name">RED <b>RACCOONS</b></span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.map(({ href, label }) => (
            <Link key={href} className={pathname === href ? "nav-link active" : "nav-link"} href={href} aria-current={pathname === href ? "page" : undefined}>
              {label}
            </Link>
          ))}
        </nav>
        <a className="header-social" href="https://www.instagram.com/red_raccoons/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Red Raccoons, abre una nueva pestaña">
          IG <span aria-hidden="true">↗</span>
        </a>
        <button className={`menu-toggle ${menuOpen ? "is-open" : ""}`} type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
          <span /><span />
        </button>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? "is-visible" : ""}`} aria-label="Navegación móvil" inert={!menuOpen}>
        {links.map(({ href, label }, index) => (
          <Link key={href} href={href} className={pathname === href ? "mobile-nav-link active" : "mobile-nav-link"} onClick={() => setMenuOpen(false)}>
            <small>0{index + 1}</small>{label}<span aria-hidden="true">↗</span>
          </Link>
        ))}
        <a className="mobile-instagram" href="https://www.instagram.com/red_raccoons/" target="_blank" rel="noopener noreferrer">Síguenos en Instagram ↗</a>
      </nav>
    </header>
  );
}
