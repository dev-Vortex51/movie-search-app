interface PosterImageProps {
  src?: string;
  alt: string;
  onError: () => void;
  hasError: boolean;
}

export const PosterImage = ({
  src,
  alt,
  onError,
  hasError,
}: PosterImageProps) => {
  if (!src || src === "N/A" || hasError) {
    return (
      <div className="bg-gray-200 dark:bg-gray-800 flex items-center justify-center h-72 rounded-xl shadow-inner text-gray-400 text-5xl font-extrabold select-none">
        No Image
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full h-[28rem] object-cover rounded-xl group-hover:scale-105 transition-transform duration-300 ease-in-out"
      onError={onError}
    />
  );
};
