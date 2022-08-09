import { Product } from "../@types/Product";
import { balsamicPotion, niceBitOfWrapping, spaceAgeMug } from "./ideasBase";

const products: Product[] = [
  Object.assign(
    { price: { amount: 15, id: "price_1LV0VbJvxKuslv8gTkTZVnNt" } },
    niceBitOfWrapping
  ),
  Object.assign(
    { price: { amount: 50, id: "price_1LV01JJvxKuslv8gnJWklB18" } },
    balsamicPotion
  ),
  Object.assign(
    { price: { amount: 500, id: "price_1LNkKpJvxKuslv8gZDbyb8CM" } },
    spaceAgeMug
  ),
  {
    alt: "Black and white artists impression of a Toltec warrior standing in from of Los Atlantis statues with a flying saucer hovering above.",
    description:
      "In Tula you can see them. Very strange! In 2008 we draw them with a UFO and a Toltec Warrior on the scene. Now you can spend 50p or £1 or £1.50, etc. and print copies till your heart's content",
    price: {
      amount: 0.5,
      id: "price_1ILcCGJvxKuslv8gGjmwU6P2",
    },
    image: "/product-images/los-atlantis-02.png",
    title: "Los Atlantis",
    type: "Printable Download",
    subTitle: "Colouring in sheet",
  },
  {
    alt: "Ink drawing of an unusual face with a blindfold covering the eyes, with eyes printed on the blindfold.",
    description:
      "Imagine having faces on the front and the back of the head. Now imagine one face has been blindfolded, and on the blindfold are the only open eyes. I drew the original in 2009 (shown here). I'll redraw just the lines so you can print it at home or at the library and apply your own colours. Yum",
    image: "/product-images/orange-splash-03.jpg",
    price: {
      amount: 0.5,
      id: "price_1ILcBtJvxKuslv8gqTi6Z9tQ",
    },
    title: "Eyes On The Blindfold",
    type: "Printable Download",
    subTitle: "Colouring in sheet",
  },
  {
    alt: "A coloured in drawing of a strange bearded face.",
    description:
      "This bearded face, of ambigious adornment, is shown here in colour but I've since redrawn it in black and white at a bigger size to give you a colouring in version. Let me know if you like it and about other ideas for the artwork. We can do anything!",
    image: "/product-images/orange-splash-01.jpg",
    price: {
      amount: 0.5,
      id: "price_1ILcBUJvxKuslv8gmfBuEG5K",
    },
    title: "Bearded Strangeface",
    type: "Printable Download",
    subTitle: "Colouring in sheet",
  },
];

export default products;
