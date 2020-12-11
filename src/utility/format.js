export const { format: formatPrice } = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
});
