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
  const numberAge = Number.parseInt(age)
  // console.log("age:",age);
  let bgColor = "#ffc7d1";
  if (numberAge > 6) bgColor = "#f1f13c";
  if (numberAge > 9) bgColor = "#abfcab";
  if (Number.isNaN(numberAge)) bgColor = "#b4d7e4;"
  // console.log("bgColor:",bgColor)
  return bgColor;
}