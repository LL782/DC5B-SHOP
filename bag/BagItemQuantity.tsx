import { BagItem } from "@types";
import { ChangeEvent } from "react";

import { useBag } from "./useBag";

interface Props {
  bagItem: BagItem;
}

export const BagItemQuantity = ({ bagItem }: Props) => {
  const { id, pricePerItem, quantity, maxQuantity = 5 } = bagItem;
  const { updateItem } = useBag();

  const handleQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = Number.parseInt(e.target.value);
    if (updateItem) {
      updateItem({ id, quantity: newQuantity, pricePerItem });
    }
  };

  const options = [];
  for (let i = 0; i <= maxQuantity; i++) {
    options.push(<option value={i} key={i}>{`${i}`}</option>);
  }

  return (
    <select value={quantity} onChange={handleQuantity} disabled={!updateItem}>
      {options}
    </select>
  );
};
