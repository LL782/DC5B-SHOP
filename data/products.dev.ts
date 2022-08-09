import { Product } from "../@types/Product";
import { balsamicPotion, niceBitOfWrapping, spaceAgeMug } from "./ideasBase";

const products: Product[] = [
  Object.assign(
    { price: { amount: 15, id: "price_1LV0V2JvxKuslv8gXJMJyWgm" } },
    niceBitOfWrapping
  ),
  Object.assign(
    { price: { amount: 50, id: "price_1LV01JJvxKuslv8gnJWklB18" } },
    balsamicPotion
  ),
  Object.assign(
    { price: { amount: 500, id: "price_1LNkCqJvxKuslv8gltFewqHU" } },
    spaceAgeMug
  ),
  {
    alt: "A coloured in drawing of a strange bearded face.",
    description:
      "Entertain you little one colouring in this bearded face of ambigious adornment.",
    image: "/product-images/orange-splash-01.jpg",
    price: {
      amount: 0.5,
      id: "price_1ILxbyJvxKuslv8gRyvaM2ez",
    },
    title: "Bearded Strangeface",
    type: "Printable Download",
    subTitle: "Colouring in sheet",
  },
  {
    alt: "Ink drawing of an unusual face with a blindfold covering the eyes, with eyes printed on the blindfold.",
    description:
      "Imagine having faces on the front and the back of the head and blindfolding one.",
    image: "/product-images/orange-splash-03.jpg",
    price: {
      amount: 0.5,
      id: "price_1ILxbXJvxKuslv8gtLk0vtky",
    },
    title: "Eyes On The Blindfold",
    type: "Printable Download",
    subTitle: "Colouring in sheet",
  },
  {
    alt: "Black and white artists impression of a Toltec warrior standing in from of Los Atlantis statues with a flying saucer hovering above.",
    description:
      "In Mexico, in Hidalgo, in Tula, look up from town and you'll see them. Very strange!",
    image: "/product-images/los-atlantis-02.png",
    price: {
      amount: 0.5,
      id: "price_1ILxZ4JvxKuslv8godvKlBvt",
    },
    title: "Los Atlantis",
    type: "Printable Download",
    subTitle: "Colouring in sheet",
  },
];

export default products;
