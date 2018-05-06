/**
 * Format a number into USD currency. 
 * 
 * @param The number to format.
 */
export const formatCurrencyUSD = (number) => {
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(number);
};