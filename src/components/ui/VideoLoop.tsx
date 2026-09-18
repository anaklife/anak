type VideoLoopProps = {
  src: string;
  className?: string;
  poster?: string;
  preload?: "none" | "metadata" | "auto";
};

export function VideoLoop({
  src,
  className = "",
  poster,
  preload = "metadata",
}: VideoLoopProps) {
  return (
    <video
      className={className}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload={preload}
    />
  );
}
