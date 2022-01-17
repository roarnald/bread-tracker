const getFractionSize = (value: number) => {
  if (value > 0.01) {
    return 2;
  }
  if (value > 0.0001) {
    return 6;
  }
  if (value > 0.000001) {
    return 10;
  }
  return 8;
};

export const formatNumber = (value: number) =>
  value?.toLocaleString(undefined, { minimumFractionDigits: getFractionSize(value) }) || 0;
