export const dateStringToDate = (dateString: string): Date => {
  const [mm, dd, yyyy] = dateString
    .split('/')
    .map((x: string): number => parseInt(x));
  return new Date(yyyy, mm - 1, dd);
};
