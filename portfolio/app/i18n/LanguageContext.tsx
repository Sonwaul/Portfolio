"use client";

/**
 * Ce composant fournit la langue actuelle (fr ou en)
 * + les traductions associées (le contenu du bon JSON)
 * à tout le site.
 *
 * On va l'utiliser plus tard dans layout.tsx
 * pour entourer toute l'app.
 */

import React, { createContext, useContext, useState } from "react";
import fr from "./fr.json";
import en from "./en.json";

/**
 * TypeScript (facultatif mais bon pour comprendre) :
 * Language = "fr" ou "en"
 * messages = l'objet de traduction (fr.json ou en.json)
 */
type Language = "fr" | "en";

type Messages = typeof fr; // on dit: les messages ont la même forme que fr.json

// On définit les infos qui seront disponibles partout via le contexte
interface LanguageContextValue {
  currentLang: Language;     // "fr" ou "en"
  messages: Messages;        // l'objet de traduction pour la langue actuelle
  setLang: (lang: Language) => void; // fonction pour changer de langue
}

// On crée le contexte lui-même
const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

/**
 * LanguageProvider
 * ----------------
 * C'est un composant qui va englober tout ton site.
 * Il stocke la langue dans un state React
 * et fournit les traductions aux enfants.
 */
export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // langue par défaut : "fr"
  const [currentLang, setCurrentLang] = useState<Language>("fr");

  // on choisit le bon objet de traduction selon la langue
  const messages = currentLang === "fr" ? fr : en;

  function setLang(lang: Language) {
    setCurrentLang(lang);
  }

  // On construit la "valeur" donnée à tout le site
  const value: LanguageContextValue = {
    currentLang,
    messages,
    setLang,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Petit hook pratique pour accéder aux infos de langue
 * dans n'importe quel composant : useLanguage()
 */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error(
      "useLanguage doit être utilisé à l'intérieur de <LanguageProvider>"
    );
  }
  return ctx;
}
