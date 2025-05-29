import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export const StarRating = ({ rating }: { rating?: string }) => {
  if (!rating || rating === "N/A") return null;
  const score = parseFloat(rating) / 2;
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (score >= i) stars.push(<FaStar key={i} className="text-yellow-400" />);
    else if (score >= i - 0.5)
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
  }

  return (
    <div className="flex items-center gap-2 mb-6">
      <div className="flex gap-1">{stars}</div>
      <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
        ({rating}/10)
      </span>
    </div>
  );
};
