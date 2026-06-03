import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Bientôt disponible",
};

export default function AProposPage() {
  return (
    <main style={{ minHeight: "70vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "6rem 1.5rem", textAlign: "center" }}>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", fontWeight: 700, color: "#6C9A8B", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
        En cours de préparation
      </p>
      <h1 style={{ fontFamily: "var(--font-title)", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1C2B21", marginBottom: "1.25rem", lineHeight: 1.2 }}>
        À propos
      </h1>
      <p style={{ fontFamily: "var(--font-body)", color: "#1C2B21", opacity: 0.55, marginBottom: "2.5rem", maxWidth: "480px", lineHeight: 1.7, fontSize: "0.95rem" }}>
        Mon parcours complet, ma vision et mes méthodes de travail arrivent très prochainement.
      </p>
      <Link href="/" style={{ fontFamily: "var(--font-body)", color: "#1C2B21", fontSize: "0.88rem", opacity: 0.5, textDecoration: "underline" }}>
        ← Retour à l'accueil
      </Link>
    </main>
  );
}
