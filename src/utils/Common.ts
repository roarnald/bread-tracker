const MILLION = 1000000;
const THOUSAND = 1000;

const getFractionSize = (value: number) => {
  if (value === 0) {
    return 0;
  }
  if (value > 0.01) {
    return 2;
  }
  if (value > 0.0001) {
    return 6;
  }
  return 10;
};

export const formatNumber = (value: number, showAlphaEst?: boolean) => {
  if (showAlphaEst) {
    if (value >= MILLION) {
      return `${Math.round(value / MILLION).toLocaleString()}M`;
    }

    if (value >= THOUSAND) {
      return `${Math.round(value / THOUSAND)}K`;
    }
  }

  return value?.toLocaleString(undefined, { minimumFractionDigits: getFractionSize(value) }) || 0;
};
