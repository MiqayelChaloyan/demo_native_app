export function calculateMonthDifference(item) {
  const currentDate = new Date();
  const createdDate = new Date(item.createdData);
  return (
    (currentDate.getFullYear() - createdDate.getFullYear()) * 12 +
    (currentDate.getMonth() - createdDate.getMonth())
  );
}
