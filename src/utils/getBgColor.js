export function setBgColor (age) {
  const newYear =Number.parseInt(age)
  // console.log("newYear:",newYear);
  let classNames = "item";
//   if (newYear <= 6) classNames = "item"
  if (newYear > 6) classNames = "older";
  if (newYear > 9) classNames = "old";
  if (Number.isNaN(newYear)) classNames = "allAge";
  // console.log("classNames:", classNames)
  return classNames;

}

export function getBgColorEmotion({ age }) {
  let bgColor = "#ffc7d1";
  if (age > 6) bgColor = "#f1f13c";
  if (age > 9) bgColor = "#abfcab";
  if (Number.isNaN(age)) bgColor = "#b4d7e4;"
  return bgColor;
}