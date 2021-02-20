import Head from "next/head";
import styles from "../styles/Home.module.css";
import products from "../data/products";
import { initiateCheckout } from "../stripe/initiateCheckout";
import { useState } from "react";

const displayPrice = (amount) => {
  if (Number.isInteger(amount)) {
    return `£${amount}`;
  }
  if (amount < 1) {
    return `${amount * 100}p`;
  }

  return `£${amount.toFixed(2)}`;
};

const defaultBag = {
  products: {},
};

export default function Home() {
  const [bag, updateBag] = useState(defaultBag);

  const bagItems = Object.keys(bag.products).map((key) => {
    const product = products.find(({ price: { id } }) => id === key);
    return {
      ...bag.products[key],
      pricePerItem: product.price.amount,
    };
  });

  const totalItems = bagItems.reduce((accumulator, { quantity }) => {
    return accumulator + quantity;
  }, 0);

  const totalCost = bagItems.reduce(
    (accumulator, { quantity, pricePerItem }) => {
      return accumulator + pricePerItem * quantity;
    },
    0
  );

  const checkoutDisabled = totalItems < 1;

  const addToBag = ({ id }) => {
    const prevBag = bag;
    const products = { ...bag.products };

    if (products[id]) {
      products[id].quantity++;
    } else {
      products[id] = { id, quantity: 1 };
    }

    updateBag({ ...prevBag, products });
  };

  const checkout = () => {
    const lineItems = bagItems.map(({ id, quantity }) => {
      return { price: id, quantity };
    });

    initiateCheckout({ lineItems });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>DC5B Odd Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>DC5B Odd Shop</h1>

        <p className={styles.description}>
          Imagination aids for now and the future
        </p>

        <p className={styles.description}>
          <strong>Total Items:</strong> {totalItems}
          <br />
          <strong>Total Cost:</strong> {displayPrice(totalCost)}
          <br />
          <button
            className={styles.button}
            onClick={checkout}
            disabled={checkoutDisabled}
          >
            Checkout
          </button>
        </p>

        <ul className={styles.grid}>
          {products.map((product) => {
            const { title, description, image, alt, price } = product;
            return (
              <li key={price.id} className={styles.card}>
                <h3>{title}</h3>
                <div className={styles.imageHolder}>
                  <img src={image} alt={alt} />
                </div>
                <p className={styles.price}>
                  {displayPrice(price.amount)}{" "}
                  <span className={styles.priceType}>PDF</span>
                </p>
                <p className={styles.cardDescription}>{description}</p>
                <button
                  className={styles.button}
                  onClick={() => {
                    addToBag({ id: price.id });
                  }}
                >
                  Add to bag
                </button>
              </li>
            );
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          className={styles.footerLink}
          href="https://dc5b.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; {new Date().getFullYear()}{" "}
          <i className={styles.logo}>
            <svg
              className={styles.logoShadow0}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 1000"
            >
              <path d="M160,208V689l100,5v306H360V698l90,4V840H550V707l290,13V160ZM310,580V300l380,16.2V574Z" />
            </svg>
            <svg
              className={styles.logoShadow1}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 1000"
            >
              <path d="M160,208V689l100,5v306H360V698l90,4V840H550V707l290,13V160ZM310,580V300l380,16.2V574Z" />
            </svg>
            <svg
              className={styles.logoShadow2}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 1000"
            >
              <path d="M160,208V689l100,5v306H360V698l90,4V840H550V707l290,13V160ZM310,580V300l380,16.2V574Z" />
            </svg>
          </i>
          DC5B
        </a>
      </footer>
    </div>
  );
}
