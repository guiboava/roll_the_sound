import { MaskitoElementPredicate } from "@maskito/core";
import { maskitoDateOptionsGenerator, maskitoNumberOptionsGenerator, maskitoParseDate, maskitoStringifyDate } from "@maskito/kit";

const dateMask = maskitoDateOptionsGenerator({ mode: 'dd/mm/yyyy', separator: '/' });
const priceMask = maskitoNumberOptionsGenerator({
  decimalSeparator: ',',
  min: 0,
  max: 1000,
  precision: 2,
  thousandSeparator: '.'
})
const maskitoElement: MaskitoElementPredicate = async (el) =>
  (el as HTMLIonInputElement).getInputElement();

const parseDateMask = (date: string) => {
  return maskitoParseDate(date, {mode: 'dd/mm/yyyy'})
}
const formatDateMask = (date: Date) => {
  return maskitoStringifyDate(date, {mode: 'dd/mm/yyyy', separator: '/'});
}

export {
  dateMask,
  priceMask,
  maskitoElement,
  parseDateMask,
}