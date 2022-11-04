export function formatNumberTwoDecimals(value: number) {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  })
}