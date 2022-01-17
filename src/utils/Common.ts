export const formatNumber = (value: number) => value?.toLocaleString(undefined, { minimumFractionDigits: 2 }) || 0;
