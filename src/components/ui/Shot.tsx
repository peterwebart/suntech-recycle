import Image from "next/image";

type Props = {
  /** Base image name without extension, e.g. "suntech-itad-solutions". */
  name: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  /** Use a wider banner aspect ratio instead of 16:9. */
  banner?: boolean;
  className?: string;
};

/**
 * Rounded media frame. Source images ship as matching .webp/.jpg pairs in
 * /public/images; next/image serves modern formats automatically.
 */
export function Shot({
  name,
  alt,
  priority = false,
  sizes = "(max-width: 860px) 100vw, 50vw",
  banner = false,
  className = "",
}: Props) {
  return (
    <figure
      className={`relative overflow-hidden rounded-card bg-near-black ${
        banner ? "aspect-[21/9]" : "aspect-[16/9]"
      } ${className}`}
    >
      <Image
        src={`/images/${name}.jpg`}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </figure>
  );
}
