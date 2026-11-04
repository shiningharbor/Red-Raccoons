import type { Metadata } from "next";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://red-raccoons.com"),
  title: {
    default: "Red Raccoons | Sitio oficial",
    template: "%s | Red Raccoons",
  },
  description:
    "Red Raccoons: conoce a la banda, nuestros momentos en vivo, próximas fechas y cómo contactarnos.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Red Raccoons",
    images: [{ url: "/Red_Raccoons.jpg", width: 1096, height: 1096, alt: "Red Raccoons" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <SiteHeader />
        <main id="contenido">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
