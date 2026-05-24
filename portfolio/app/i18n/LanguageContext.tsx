"use client";

import React, { createContext, useContext, useState } from "react";
import fr from "./fr.json";
import en from "./en.json";

type Language = "fr" | "en";
type Messages = typeof fr;

interface LanguageContextValue {
  currentLang: Language;
  messages: Messages;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>("fr");
  const messages = currentLang === "fr" ? fr : en;

  return (
    <LanguageContext.Provider value={{ currentLang, messages, setLang: setCurrentLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
