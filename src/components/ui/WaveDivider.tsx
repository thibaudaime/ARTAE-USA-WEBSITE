interface WaveDividerProps {
  flip?: boolean;
  className?: string;
}

/**
 * Decorative "deux vagues" motif from the brand guideline: two overlapping
 * organic hill shapes in beige clair / beige, used as a section-transition
 * accent. `flip` mirrors it vertically so it can sit at the top of a
 * section instead of the bottom.
 */
export function WaveDivider({ flip = false, className = "" }: WaveDividerProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 h-16 sm:h-24 ${
        flip ? "top-0 rotate-180" : "bottom-0"
      } ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d="M0,55 C220,10 460,95 720,50 C980,5 1220,85 1440,45 L1440,120 L0,120 Z"
          fill="#C69F63"
          opacity="0.5"
        />
        <path
          d="M0,75 C260,100 520,25 780,70 C1040,110 1260,45 1440,75 L1440,120 L0,120 Z"
          fill="#F0E7D8"
        />
      </svg>
    </div>
  );
}
