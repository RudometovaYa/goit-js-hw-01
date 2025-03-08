function getElementWidth(content, padding, border) {
  const contentPx = Number.parseFloat(content);
  const paddingPx = Number.parseFloat(padding);
  const borderPx = Number.parseFloat(border);
  const borderBox = contentPx + paddingPx * 2 + borderPx * 2;

  return borderBox;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
