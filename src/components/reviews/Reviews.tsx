import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/ui/Container";
import { REVIEWS_ARE_SAMPLE, type Review } from "@/data/locations";
import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <div className="flex items-center gap-0.5 text-orange" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" size={16} className={i < full ? "" : "text-line"} />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure data-reveal className="flex h-full flex-col rounded-card border border-line bg-paper p-6">
      <Stars rating={review.rating} />
      <blockquote className="mt-4 flex-1 text-[15.5px] leading-relaxed text-ink-soft">
        “{review.body}”
      </blockquote>
      <figcaption className="mt-5 border-t border-line pt-4">
        <span className="block font-display text-[15px] font-semibold text-ink">{review.author}</span>
        <span className="mt-0.5 block text-[13px] text-ink-soft">{review.role}</span>
        <span className="mt-1 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.08em] text-green">
          <Icon name="map-pin" size={12} />
          {review.area}
        </span>
      </figcaption>
    </figure>
  );
}

export function Reviews({
  reviews,
  cityName,
  locale = "en",
}: {
  reviews: Review[];
  cityName: string;
  locale?: Locale;
}) {
  if (reviews.length === 0) return null;
  const t = getDictionary(locale).reviews;

  return (
    <div>
      <div data-reveal className="max-w-[64ch]">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 className="mt-3 text-[clamp(26px,3.6vw,38px)]">{t.title(cityName)}</h2>
      </div>

      {REVIEWS_ARE_SAMPLE && (
        <p className="mt-5 rounded-lg border border-orange/30 bg-orange/[0.07] px-4 py-3 font-mono text-[11.5px] leading-relaxed tracking-[0.02em] text-ink-soft">
          Sample reviews — these are representative placeholders for layout and must be replaced with verified client reviews before launch.
        </p>
      )}

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </div>
  );
}
