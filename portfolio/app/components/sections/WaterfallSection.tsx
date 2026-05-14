"use client";

import { useLanguage } from "@/app/i18n/LanguageContext";
import { reviews } from "@/app/data/reviewsData";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="star-rating" aria-label={`${rating} étoiles sur 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= rating ? "star star-filled" : "star star-empty"}>
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className={`waterfall-card ${isVisible ? "reveal-visible" : "reveal-hidden"}`}>
      <StarRating rating={review.rating} />
      <p className="waterfall-text">"{review.text}"</p>
      <div className="waterfall-author">
        <div className="waterfall-avatar">
          {review.author.charAt(0)}
        </div>
        <div>
          <p className="waterfall-author-name">{review.author}</p>
          <p className="waterfall-author-role">{review.role}</p>
        </div>
        <span className="waterfall-date">{review.date}</span>
      </div>
    </div>
  );
}

export default function WaterfallSection() {
  const { messages } = useLanguage();

  return (
    <section id="waterfall" className="waterfall-section">
      {/* Cascade visuelle en fond */}
      <div className="waterfall-streams" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`waterfall-stream waterfall-stream-${i + 1}`} />
        ))}
      </div>

      <div className="container waterfall-content">
        <div className="section-header section-header-light">
          <h2 className="section-title">{messages.waterfall.title}</h2>
          <p className="section-subtitle">{messages.waterfall.subtitle}</p>
        </div>

        <div className="waterfall-grid">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
