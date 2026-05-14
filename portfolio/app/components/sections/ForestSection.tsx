"use client";

import { useState } from "react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { bosquets, Bosquet } from "@/app/data/skillsData";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

type Mode = "technique" | "management" | "all";

function Strate({ bosquet, mode }: { bosquet: Bosquet; mode: Mode }) {
  const { ref, isVisible } = useScrollReveal();

  const dimmed =
    (mode === "technique" && bosquet.id === "canopee") ||
    (mode === "management" && (bosquet.id === "tronc" || bosquet.id === "racines"));

  return (
    <div
      ref={ref}
      className={`strate strate-${bosquet.id} ${isVisible ? "reveal-visible" : "reveal-hidden"} ${dimmed ? "strate-dimmed" : ""}`}
    >
      <div className="strate-identity">
        <span className="strate-icon">{bosquet.icon}</span>
        <h3 className="strate-name">{bosquet.title}</h3>
        <p className="strate-desc">{bosquet.subtitle}</p>
      </div>

      <div className="strate-content">
        {bosquet.groups.map((group, gi) => (
          <div key={gi} className="strate-group">
            <p className="strate-group-title">{group.title}</p>
            <div className="strate-badges">
              {group.skills.map((skill, si) => (
                <span key={si} className="skill-badge">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ForestSection() {
  const { messages } = useLanguage();
  const [mode, setMode] = useState<Mode>("all");

  return (
    <section id="competences" className="forest-section">
      <div className="forest-ambiance" aria-hidden="true" />
      <div className="forest-rays" aria-hidden="true" />
      <div className="forest-trunks" aria-hidden="true">
        {[
          { left: "2%",  h: "82%", w: 14 },
          { left: "6%",  h: "95%", w: 20 },
          { left: "11%", h: "70%", w: 12 },
          { left: "16%", h: "88%", w: 16 },
          { right: "2%",  h: "78%", w: 14 },
          { right: "7%",  h: "93%", w: 20 },
          { right: "12%", h: "68%", w: 12 },
          { right: "17%", h: "85%", w: 16 },
        ].map((t, i) => (
          <div
            key={i}
            className="forest-trunk"
            style={{ [t.left ? "left" : "right"]: t.left ?? t.right, height: t.h, width: t.w }}
          />
        ))}
      </div>
      <div className="forest-to-river-mist-green" aria-hidden="true" />
      <div className="forest-to-river-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 130" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,130 L0,100 L14,100 L30,55 L46,100 L60,100 L74,72 L88,100 L102,100 L118,38 L134,100 L148,100 L162,62 L176,100 L190,100 L205,25 L220,100 L234,100 L248,50 L262,100 L276,100 L292,65 L308,100 L322,100 L336,35 L350,100 L364,100 L378,55 L392,100 L406,100 L422,42 L438,100 L452,100 L468,65 L484,100 L498,100 L512,28 L526,100 L540,100 L554,50 L568,100 L582,100 L598,40 L614,100 L628,100 L644,65 L660,100 L674,100 L688,20 L702,100 L716,100 L732,52 L748,100 L762,100 L776,42 L790,100 L804,100 L820,62 L836,100 L850,100 L864,32 L878,100 L892,100 L908,55 L924,100 L938,100 L952,45 L966,100 L980,100 L994,68 L1008,100 L1022,100 L1038,25 L1054,100 L1068,100 L1082,50 L1096,100 L1110,100 L1124,40 L1138,100 L1152,100 L1168,65 L1184,100 L1198,100 L1212,28 L1226,100 L1240,100 L1256,52 L1272,100 L1286,100 L1300,42 L1314,100 L1328,100 L1342,62 L1356,100 L1370,100 L1386,35 L1402,100 L1416,100 L1430,55 L1440,78 L1440,130 Z" />
        </svg>
      </div>

      <div className="container forest-content">
        <div className="section-header section-header-light">
          <h2 className="section-title">{messages.forest.title}</h2>
          <p className="section-subtitle">{messages.forest.subtitle}</p>
        </div>

        <p className="forest-intro">{messages.forest.intro}</p>

        <div className="forest-toggle-bar">
          <button
            className={`forest-toggle-btn ${mode === "all" ? "forest-toggle-active" : ""}`}
            onClick={() => setMode("all")}
          >
            {messages.forest.toggleAll}
          </button>
          <button
            className={`forest-toggle-btn ${mode === "technique" ? "forest-toggle-active forest-toggle-tech" : ""}`}
            onClick={() => setMode("technique")}
          >
            {messages.forest.toggleTech}
          </button>
          <button
            className={`forest-toggle-btn ${mode === "management" ? "forest-toggle-active forest-toggle-management" : ""}`}
            onClick={() => setMode("management")}
          >
            {messages.forest.toggleManagement}
          </button>
        </div>

        <div className="strates-container">
          {bosquets.map((bosquet) => (
            <Strate key={bosquet.id} bosquet={bosquet} mode={mode} />
          ))}
        </div>
      </div>
    </section>
  );
}
