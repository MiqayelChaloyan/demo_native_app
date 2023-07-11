export function calculateMonthDifference(createdData) {
  const currentDate = new Date();
  const createdDate = new Date(createdData);
  return (
    (currentDate.getFullYear() - createdDate.getFullYear()) * 12 +
    (currentDate.getMonth() - createdDate.getMonth())
  );
}
