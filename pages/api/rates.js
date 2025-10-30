export default function handler(req, res) {
  // Read price range from environment variables; fallback values provided
  const lowest = process.env.LOWEST_PRICE || "3.45";
  const highest = process.env.HIGHEST_PRICE || "3.95";
  res.status(200).json({ lowestPrice: lowest, highestPrice: highest });
}