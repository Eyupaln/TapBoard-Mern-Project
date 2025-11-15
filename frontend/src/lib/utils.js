export function formatDate(date) {
  return date.toLocaleDateString("tr-TR", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
