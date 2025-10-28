"use client";

import { useEffect, useState } from "react";

/**
 * Hook personnalisé : useThemeToggle
 * ---------------------------------
 * Gère le mode clair / sombre du site.
 * Il ajoute ou retire la classe "dark" sur la balise <html>.
 */
export function useThemeToggle() {
  // État local : vrai = mode sombre activé
  const [isDark, setIsDark] = useState(false);

  // Dès que le composant est monté, on vérifie le thème actuel
  useEffect(() => {
    const html = document.documentElement;
    setIsDark(html.classList.contains("dark"));
  }, []);

  // Inversion du thème
  function toggleTheme() {
    const html = document.documentElement;
    const next = !isDark;
    setIsDark(next);
    if (next) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }

  // On retourne les données que le composant utilisera
  return { isDark, toggleTheme };
}
