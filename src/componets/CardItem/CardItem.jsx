import defaultImage from "./default.jpg"; //! Дефолтне зображення
import { getManufacturingYears } from "@/utils";
import {
  ItemTitle,
  ImageTitle,
  TextField,
  TextFieldValue,
  AdditionalImageBox,
  AdditionalImage,
  Button,
} from "./CardItem.styled";

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
  //! Якщо зображення не завантажилося — показуємо default.jpg
  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = defaultImage;
  };

  return (
    <>
      <ItemTitle>{name}</ItemTitle>

      <ImageTitle>Основне зображення</ImageTitle>
      <a href={wikipedia} target="_blank" rel="noreferrer noopener">
        <img
          src={imageReal}
          alt={`${name} — основне зображення`}
          onError={handleImageError}
        />
      </a>

      <ImageTitle>Фото товару</ImageTitle>
      <img
        src={imageToy}
        alt={`${name} — фото товару`}
        onError={handleImageError}
      />

      <ImageTitle>Додаткове зображення</ImageTitle>
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

      <TextField>
        Категорія: <TextFieldValue>{category}</TextFieldValue>
      </TextField>

      <TextField>
        Тип продукту: <TextFieldValue>{productType}</TextFieldValue>
      </TextField>

      <TextField>
        Вік: <TextFieldValue>{age}</TextFieldValue>
      </TextField>

      <TextField>
        Гендер: <TextFieldValue>{gender}</TextFieldValue>
      </TextField>

      <TextField>
        Де з'являвся: <TextFieldValue>{showMovie}</TextFieldValue>
      </TextField>

      <TextField>
        Герої: <TextFieldValue>{character}</TextFieldValue>
      </TextField>

      <TextField>
        Рік випуску: <TextFieldValue>{year}</TextFieldValue>
      </TextField>

      <TextField>
        Кількість років випуску:{" "}
        <TextFieldValue>{getManufacturingYears(year)}</TextFieldValue>
      </TextField>

      <TextField>
        Ціна: <TextFieldValue>{price}</TextFieldValue>
      </TextField>

      <TextField>
        Опис: <TextFieldValue>{discription}</TextFieldValue>
      </TextField>

      {interestingInfo && (
        <TextField>
          Цікаво: <TextFieldValue>{interestingInfo}</TextFieldValue>
        </TextField>
      )}

      {features && (
        <div>
          <TextField>Особливості:</TextField>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      <Button type="button">Додати до кошику</Button>
    </>
  );
}