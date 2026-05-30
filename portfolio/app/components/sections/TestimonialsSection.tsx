"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Star, ChevronUp, ChevronDown } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { reviews } from "@/app/data/reviewsData";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="star-rating" role="img" aria-label={`${rating} étoiles sur 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={star <= rating ? "star star-filled" : "star star-empty"}
          fill={star <= rating ? "currentColor" : "none"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

const GAP = 24;
const CLONE_COUNT = 2;

const extended = [
  ...reviews.slice(-CLONE_COUNT),
  ...reviews,
  ...reviews.slice(0, CLONE_COUNT),
];

export default function TestimonialsSection() {
  const { messages } = useLanguage();
  const viewportRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [index, setIndex] = useState(CLONE_COUNT);
  const [animated, setAnimated] = useState(true);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  function toggleExpand(author: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(author) ? next.delete(author) : next.add(author);
      return next;
    });
  }

  function computeCardWidth() {
    if (!viewportRef.current) return;
    setCardWidth(viewportRef.current.offsetWidth);
  }

  useEffect(() => {
    computeCardWidth();
    const ro = new ResizeObserver(computeCardWidth);
    if (viewportRef.current) ro.observe(viewportRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!animated) {
      const t = setTimeout(() => setAnimated(true), 50);
      return () => clearTimeout(t);
    }
  }, [animated]);

  function handleTransitionEnd() {
    if (index >= reviews.length + CLONE_COUNT) {
      setAnimated(false);
      setIndex(CLONE_COUNT);
    } else if (index < CLONE_COUNT) {
      setAnimated(false);
      setIndex(reviews.length + CLONE_COUNT - 1);
    }
  }

  const slideTo = useCallback((i: number) => {
    setAnimated(true);
    setIndex(i);
  }, []);

  const next = useCallback(() => slideTo(index + 1), [index, slideTo]);
  const prev = useCallback(() => slideTo(index - 1), [index, slideTo]);

  const touchStartX = useRef<number | null>(null);

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    touchStartX.current = null;
  }

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const realIndex = ((index - CLONE_COUNT) % reviews.length + reviews.length) % reviews.length;
  const translateX = -(index * cardWidth);

  return (
    <section id="temoignages" className="testimonials-section">
      <div className="container testimonials-content">
        <div className="section-header">
          <h2 className="section-title">{messages.testimonials.title}</h2>
          <p className="section-subtitle">{messages.testimonials.subtitle}</p>
        </div>

        <div className="carousel-outer">
          <button className="carousel-btn" onClick={prev} aria-label="Précédent">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div ref={viewportRef} className="carousel-viewport" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div
              className="carousel-track"
              style={{
                transform: cardWidth ? `translateX(${translateX}px)` : "none",
                transition: animated ? "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)" : "none",
                opacity: cardWidth ? 1 : 0,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extended.map((review, i) => (
                <div
                  key={i}
                  className="testimonial-card"
                  style={{ width: cardWidth ? `${cardWidth}px` : undefined, flexShrink: 0 }}
                >
                  <StarRating rating={review.rating} />
                  <p className={`testimonial-text${expanded.has(review.author) ? " testimonial-text-expanded" : ""}`}>
                    "{review.text}"
                  </p>
                  {review.text.length > 220 && (
                    <button
                      className="testimonial-readmore"
                      onClick={() => toggleExpand(review.author)}
                    >
                      {expanded.has(review.author) ? <><ChevronUp size={14} aria-hidden="true" /> Réduire</> : <>En savoir plus <ChevronDown size={14} aria-hidden="true" /></>}
                    </button>
                  )}
                  <div className="testimonial-footer">
                    <div className="testimonial-author">
                      {review.logo ? (
                        <Image
                          src={review.logo}
                          alt={review.author}
                          width={0}
                          height={0}
                          sizes="84px"
                          className="testimonial-logo"
                        />
                      ) : (
                        <div className="testimonial-avatar">{review.author.charAt(0)}</div>
                      )}
                      <div>
                        <p className="testimonial-author-name">{review.author}</p>
                        <p className="testimonial-author-role">{review.role}</p>
                      </div>
                    </div>
                    <div className="testimonial-actions">
                      {review.siteUrl && (
                        <a
                          href={review.siteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="testimonial-link testimonial-link-site"
                          aria-label={`Voir le site de ${review.author}`}
                        >
                          Voir le site
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                          </svg>
                        </a>
                      )}
                      <a
                        href={review.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="testimonial-link"
                      >
                        Avis Google
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn" onClick={next} aria-label="Suivant">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        <div className="carousel-dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === realIndex ? "carousel-dot-active" : ""}`}
              onClick={() => slideTo(CLONE_COUNT + i)}
              aria-label={`Avis ${i + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
