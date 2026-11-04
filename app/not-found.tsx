import Link from "next/link";

export default function NotFound() {
  return <section className="not-found shell"><span className="section-kicker">ERROR 404</span><h1>ERROR<br /><span>404.</span></h1><p>Revisa la dirección o vuelve al inicio.</p><Link href="/" className="pill-button pill-red">VOLVER AL INICIO ↗</Link></section>;
}
