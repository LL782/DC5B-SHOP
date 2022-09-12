import { ChildContextProvider, createContext, ReactNode } from "react";
import { BagItem } from "./businessLogic/BagItem";
import { useBagState } from "./hooks/useBagState";

interface iBagToolkit {
  addToBag?: (id: string) => void;
  lineItems: BagItem[];
  checkout?: () => void;
  checkoutDisabled: boolean;
  updateItem?: ({ id, pricePerItem, quantity }: BagItem) => void;
  totalCost: number;
}
const defaultBagContext: iBagToolkit = {
  lineItems: [],
  checkoutDisabled: true,
  totalCost: 0,
};

export const BagToolkit = createContext(defaultBagContext);

interface Props {
  children: ReactNode;
}

export const BagToolkitProvider = ({ children }: Props) => {
  const bag = useBagState();
  return <BagToolkit.Provider value={bag}>{children}</BagToolkit.Provider>;
};
