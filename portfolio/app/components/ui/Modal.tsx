"use client";

import { useEffect } from "react";
import type { CSSProperties } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  accentColor?: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, accentColor, children }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content"
        style={{ "--modal-accent": accentColor } as CSSProperties}
        onClick={(e) => e.stopPropagation()}
      >
        {title ? (
          <div className="modal-header">
            <h3 className="modal-title">{title}</h3>
            <button className="modal-close-btn" onClick={onClose} aria-label="Fermer">✕</button>
          </div>
        ) : (
          <button className="modal-close-btn modal-close-btn--overlay" onClick={onClose} aria-label="Fermer">✕</button>
        )}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
