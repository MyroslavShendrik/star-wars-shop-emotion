import { iconSize } from "./iconSize.js";

//! Єдине джерело правди для всіх візуальних налаштувань застосунку.
//! Доступ у styled-компонентах: ${({ theme }) => theme.colors.bg.itemTitle}
//! Доступ у React-компонентах: const theme = useTheme();
export const theme = Object.freeze({
  //! Кольори
  colors: {
    //? колір тексту
    font: {
      mainTitle: "darkblue",
      itemTitle: "#0000ff",
      button: "#ffffff",
    },
    //? фони
    bg: {
      itemTitle: "#ffff00",
      additionalImageBox: "#808080",
      button: "#008080",
      buttonHover: "#902a00",
    },
    //? фон картки залежно від віку товару (див. utils/getBgColor.js)
    card: {
      young: "#ffc7d1", // до 6 років
      older: "#f1f13c", // 7–9 років
      old: "#abfcab", // 10+ років
      allAge: "#b4d7e4", // вік не вказано / "для всіх"
    },
    //? рамки та контури
    border: {
      list: "red",
      item: "grey",
      buttonFocus: "#d9d902",
    },
    //? іконки
    icon: {
      title: "darkblue",
      imageTitle: "#0000ff",
      textField: "#9b25fc",
      feature: "#008080",
      button: "#99ffff",
      buttonHover: "#d9d902",
    },
    shadow: "rgba(0, 0, 0, 0.9)",
  },

  //! Відступи — theme.spacing(3) => "12px"
  spacing: (value) => `${4 * value}px`,

  //! Розміри іконок
  iconSize,

  //! Заокруглення
  radii: {
    sm: "8px",
    md: "12px",
    lg: "14px",
  },

  //! Типографіка
  fontSizes: {
    text: "18px",
    itemTitle: "32px",
    mainTitle: "48px",
    button: "1.5rem",
  },
  fontWeights: {
    regular: 400,
    bold: 700,
  },
  fontFamily: {
    button: '"Franklin Gothic Medium", "Arial Narrow"',
  },

  //! Тіні
  shadows: {
    buttonText:
      "1px 1px 2px rgba(0, 0, 0, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.2), 4px 4px 8px rgba(0, 0, 0, 0.1)",
    button:
      "inset 0 0 16px 8px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.9)",
  },

  //! Розміри елементів і анімації
  sizes: {
    cardMinWidth: "445px",
    buttonWidth: "70%",
  },
  transition: "200ms ease-in-out",
});
