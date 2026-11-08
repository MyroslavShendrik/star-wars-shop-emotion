import CardItem from "@/componets/CardItem/CardItem.jsx"; //! без стилізації
import {setBgColor} from "@/utils"
import css from './CardList.module.css'
import {List,Item} from './CardList.styled.jsx'

export default function CardList({ items }) {
  // console.log("items:", items);
  return (
    <List>
      {items.map((item) => (
        <Item 
          key={item.id}
          age={item.age}
        >
<CardItem
  name={item.name}
  imageReal={item.image.real}
  imageAdditional={item.image.additional}
  imageToy={item.image.toy}
  category={item.category}
  productType={item.productType}
  age={item.age}
  gender={item.gender}
  showMovie={item.showMovie}
  character={item.character}
  year={item.year}
  price={item.price}
  discription={item.discription}
  interestingInfo={item.interestingInfo}
  features={item.features}
  wikipedia={item.wikipedia}
/>
        </Item>
      ))}
    </List>
  );
}
