import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageContext";

// ✅ on importe les polices via next/font/google
import { Manrope, Cormorant } from "next/font/google";

/**
 * On crée deux "fonts" en JS qu'on va réutiliser.
 * weight: les graisses qu'on veut charger.
 * subsets: "latin" c'est suffisant si tu es en FR/EN.
 */
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body", // on va exposer ça en CSS
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-title", // pareil
});

/**
 * RootLayout
 * ----------
 * Le layout global du site.
 * Il est appliqué à toutes les pages.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // NOTE IMPORTANTE :
    // On ajoute les classes générées par next/font sur <html>
    <html
      lang="fr"
      className={`${manrope.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
