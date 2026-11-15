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

//! Колір фону картки береться з theme.colors.card
//! Використання в styled: background-color: ${getBgColorEmotion};
export function getBgColorEmotion({ age, theme }) {
  const numberAge = Number.parseInt(age);
  const { young, older, old, allAge } = theme.colors.card;

  if (Number.isNaN(numberAge)) return allAge;
  if (numberAge > 9) return old;
  if (numberAge > 6) return older;
  return young;
}
