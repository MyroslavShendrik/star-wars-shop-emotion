import { useTheme } from "@emotion/react";
import {
  FaImage,
  FaCamera,
  FaImages,
  FaTag,
  FaBoxOpen,
  FaChild,
  FaVenusMars,
  FaFilm,
  FaUserAstronaut,
  FaCalendarAlt,
  FaHourglassHalf,
  FaDollarSign,
  FaAlignLeft,
  FaLightbulb,
  FaListUl,
  FaCartPlus,
} from "react-icons/fa";
import { GiLightSabers } from "react-icons/gi";

import defaultImage from "./default.jpg"; //! Дефолтне зображення
import { getManufacturingYears } from "@/utils";
import {
  ItemTitle,
  ImageTitle,
  TextField,
  FieldIcon,
  TextFieldValue,
  FeatureList,
  FeatureItem,
  AdditionalImageBox,
  AdditionalImage,
  Button,
} from "./CardItem.styled";

//! Текстове поле з іконкою: розмір іконки береться з theme.iconSize
function Field({ icon: Icon, label, children }) {
  const theme = useTheme();

  return (
    <TextField>
      <FieldIcon>
        <Icon size={theme.iconSize.sm} aria-hidden="true" />
      </FieldIcon>
      {label}: <TextFieldValue>{children}</TextFieldValue>
    </TextField>
  );
}

export default function CardItem({
  name,
  imageReal = defaultImage,
  imageAdditional = [defaultImage],
  imageToy = defaultImage,
  category,
  productType,
  age,
  gender,
  showMovie,
  character,
  year,
  price,
  discription,
  interestingInfo,
  features,
  wikipedia,
}) {
  const theme = useTheme();

  //! Якщо зображення не завантажилося — показуємо default.jpg
  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = defaultImage;
  };

  return (
    <>
      <ItemTitle>{name}</ItemTitle>

      <ImageTitle>
        <FaImage size={theme.iconSize.sm} aria-hidden="true" />
        Основне зображення
      </ImageTitle>
      <a href={wikipedia} target="_blank" rel="noreferrer noopener">
        <img
          src={imageReal}
          alt={`${name} — основне зображення`}
          onError={handleImageError}
        />
      </a>

      <ImageTitle>
        <FaCamera size={theme.iconSize.sm} aria-hidden="true" />
        Фото товару
      </ImageTitle>
      <img
        src={imageToy}
        alt={`${name} — фото товару`}
        onError={handleImageError}
      />

      <ImageTitle>
        <FaImages size={theme.iconSize.sm} aria-hidden="true" />
        Додаткове зображення
      </ImageTitle>
      <AdditionalImageBox>
        {imageAdditional.map((image, index) => (
          <AdditionalImage
            key={index}
            src={image}
            alt={`${name} — додаткове фото`}
            onError={handleImageError}
          />
        ))}
      </AdditionalImageBox>

      <Field icon={FaTag} label="Категорія">{category}</Field>
      <Field icon={FaBoxOpen} label="Тип продукту">{productType}</Field>
      <Field icon={FaChild} label="Вік">{age}</Field>
      <Field icon={FaVenusMars} label="Гендер">{gender}</Field>
      <Field icon={FaFilm} label="Де з'являвся">{showMovie}</Field>
      <Field icon={FaUserAstronaut} label="Герої">{character}</Field>
      <Field icon={FaCalendarAlt} label="Рік випуску">{year}</Field>
      <Field icon={FaHourglassHalf} label="Кількість років випуску">
        {getManufacturingYears(year)}
      </Field>
      <Field icon={FaDollarSign} label="Ціна">{price}</Field>
      <Field icon={FaAlignLeft} label="Опис">{discription}</Field>

      {interestingInfo && (
        <Field icon={FaLightbulb} label="Цікаво">{interestingInfo}</Field>
      )}

      {features && (
        <div>
          <TextField>
            <FieldIcon>
              <FaListUl size={theme.iconSize.sm} aria-hidden="true" />
            </FieldIcon>
            Особливості:
          </TextField>
          <FeatureList>
            {features.map((feature, index) => (
              <FeatureItem key={index}>
                <GiLightSabers size={theme.iconSize.sm} aria-hidden="true" />
                {feature}
              </FeatureItem>
            ))}
          </FeatureList>
        </div>
      )}

      <Button type="button">
        <FaCartPlus size={theme.iconSize.md} aria-hidden="true" />
        Додати до кошику
      </Button>
    </>
  );
}
