"use client";

import { useState } from "react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { bosquets, Bosquet } from "@/app/data/skillsData";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

type Mode = "technique" | "management" | "all";

/* ── Sapin SVG latéral ─────────────────────────────────────── */
function PineTree({ cx, baseY, scale = 1, fill = "#030a02", opacity = 1 }: {
  cx: number; baseY: number; scale?: number; fill?: string; opacity?: number;
}) {
  const s = scale;
  return (
    <g transform={`translate(${cx}, ${baseY})`} opacity={opacity} fill={fill}>
      <rect x={-5 * s} y={-50 * s} width={10 * s} height={55 * s} />
      <polygon points={`0,${-95 * s} ${-62 * s},${-48 * s} ${62 * s},${-48 * s}`} />
      <polygon points={`0,${-132 * s} ${-50 * s},${-88 * s} ${50 * s},${-88 * s}`} />
      <polygon points={`0,${-163 * s} ${-38 * s},${-124 * s} ${38 * s},${-124 * s}`} />
      <polygon points={`0,${-188 * s} ${-26 * s},${-154 * s} ${26 * s},${-154 * s}`} />
      <polygon points={`0,${-208 * s} ${-14 * s},${-183 * s} ${14 * s},${-183 * s}`} />
    </g>
  );
}

/* ── Zone (canopée / tronc / racines) ──────────────────────── */
function ForestZone({ bosquet, mode }: { bosquet: Bosquet; mode: Mode }) {
  const { ref, isVisible } = useScrollReveal();

  const dimmed =
    (mode === "technique"  && bosquet.id === "canopee") ||
    (mode === "management" && (bosquet.id === "tronc" || bosquet.id === "racines"));

  const lit =
    (mode === "technique"  && (bosquet.id === "tronc" || bosquet.id === "racines")) ||
    (mode === "management" && bosquet.id === "canopee");

  return (
    <div
      ref={ref}
      className={[
        "forest-zone",
        `forest-zone-${bosquet.id}`,
        dimmed ? "zone-dimmed" : "",
        lit    ? "zone-lit"    : "",
        isVisible ? "reveal-visible" : "reveal-hidden",
      ].join(" ").trim()}
    >
      {/* En-tête de zone */}
      <div className="zone-header">
        <span className="zone-icon">{bosquet.icon}</span>
        <div>
          <h3 className="zone-title">{bosquet.title}</h3>
          <p className="zone-subtitle-text">{bosquet.subtitle}</p>
        </div>
        <p className="zone-desc">{bosquet.description}</p>
      </div>

      {/* Groupes de badges flottants */}
      <div className="zone-groups">
        {bosquet.groups.map((group, gi) => (
          <div key={gi} className="badge-group">
            <p className="badge-group-label">{group.title}</p>
            <div className="badge-cluster">
              {group.skills.map((skill, si) => (
                <span
                  key={si}
                  className={`skill-badge skill-badge-colored badge-pos-${(si % 5)}`}
                  style={{ "--badge-color": skill.color ?? "rgba(255,255,255,0.65)" } as React.CSSProperties}
                >
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

/* ── Section principale ─────────────────────────────────────── */
export default function ForestSection() {
  const { messages } = useLanguage();
  const [mode, setMode] = useState<Mode>("all");

  return (
    <section id="competences" className="forest-section">
      <div className="forest-ambiance" aria-hidden="true" />
      <div className="forest-rays"    aria-hidden="true" />

      {/* Sapins latéraux — gauche */}
      <svg
        className="forest-side-trees forest-side-trees-left"
        viewBox="0 0 340 920"
        preserveAspectRatio="xMinYMax slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <PineTree cx={-20}  baseY={980} scale={4.5} fill="#010301" opacity={0.98} />
        <PineTree cx={78}   baseY={980} scale={3.6} fill="#020602" opacity={0.94} />
        <PineTree cx={162}  baseY={980} scale={2.6} fill="#030902" opacity={0.84} />
        <PineTree cx={232}  baseY={980} scale={1.8} fill="#050c03" opacity={0.70} />
        <PineTree cx={290}  baseY={980} scale={1.2} fill="#071004" opacity={0.54} />
        <PineTree cx={330}  baseY={980} scale={0.8} fill="#091304" opacity={0.38} />
      </svg>

      {/* Sapins latéraux — droite */}
      <svg
        className="forest-side-trees forest-side-trees-right"
        viewBox="0 0 340 920"
        preserveAspectRatio="xMaxYMax slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <PineTree cx={360}  baseY={980} scale={4.5} fill="#010301" opacity={0.98} />
        <PineTree cx={262}  baseY={980} scale={3.6} fill="#020602" opacity={0.94} />
        <PineTree cx={178}  baseY={980} scale={2.6} fill="#030902" opacity={0.84} />
        <PineTree cx={108}  baseY={980} scale={1.8} fill="#050c03" opacity={0.70} />
        <PineTree cx={50}   baseY={980} scale={1.2} fill="#071004" opacity={0.54} />
        <PineTree cx={10}   baseY={980} scale={0.8} fill="#091304" opacity={0.38} />
      </svg>

      <div className="forest-floor"             aria-hidden="true" />
      <div className="forest-to-river-mist-green" aria-hidden="true" />

      {/* Transition forêt → rivière */}
      <div className="forest-to-river-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 130" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,130 L0,108 Q8,82 16,108 L22,108 Q30,62 38,108 L44,108 Q56,36 68,108 L74,108 Q84,74 94,108 L100,108 Q112,18 124,108 L132,108 Q142,54 152,108 L160,108 Q170,40 180,108 L188,108 Q200,26 212,108 L220,108 Q230,60 240,108 L248,108 Q260,12 272,108 L280,108 Q290,48 300,108 L308,108 Q318,33 328,108 L336,108 Q346,70 356,108 L364,108 Q376,20 388,108 L396,108 Q406,56 416,108 L424,108 Q434,38 444,108 L452,108 Q464,10 476,108 L484,108 Q494,50 504,108 L512,108 Q524,30 536,108 L544,108 Q554,72 564,108 L572,108 Q582,16 592,108 L600,108 Q612,50 624,108 L632,108 Q642,36 652,108 L660,108 Q670,66 680,108 L688,108 Q700,6 712,108 L720,108 Q730,44 740,108 L748,108 Q760,28 772,108 L780,108 Q790,64 800,108 L808,108 Q820,18 832,108 L840,108 Q850,54 860,108 L868,108 Q878,38 888,108 L896,108 Q908,14 920,108 L928,108 Q938,58 948,108 L956,108 Q968,26 980,108 L988,108 Q998,68 1008,108 L1016,108 Q1026,20 1036,108 L1044,108 Q1056,54 1068,108 L1076,108 Q1086,34 1096,108 L1104,108 Q1114,74 1124,108 L1132,108 Q1144,16 1156,108 L1164,108 Q1174,50 1184,108 L1192,108 Q1204,36 1216,108 L1224,108 Q1234,64 1244,108 L1252,108 Q1264,10 1276,108 L1284,108 Q1294,46 1304,108 L1312,108 Q1322,30 1332,108 L1340,108 Q1352,66 1364,108 L1372,108 Q1382,22 1392,108 L1400,108 Q1412,54 1424,108 L1432,108 Q1436,40 1440,88 L1440,130 Z" />
        </svg>
      </div>

      <div className="container forest-content">
        <div className="section-header section-header-light">
          <h2 className="section-title">{messages.forest.title}</h2>
          <p className="section-subtitle">{messages.forest.subtitle}</p>
        </div>

        <p className="forest-intro">{messages.forest.intro}</p>

        {/* Toggle */}
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

        {/* Zones */}
        <div className="forest-zones">
          {bosquets.map((bosquet) => (
            <ForestZone key={bosquet.id} bosquet={bosquet} mode={mode} />
          ))}
        </div>
      </div>
    </section>
  );
}
