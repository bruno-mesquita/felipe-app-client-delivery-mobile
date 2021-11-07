import { useContext, createContext, useState } from 'react';

interface SelectedItem {
  orderId: number | null;
  evaluationId: number | null;
}

interface OrderContextData {
  selectedItem: SelectedItem;
  setSelectedItem: (item: SelectedItem) => void;
}

const Context = createContext({} as OrderContextData);

export const OrderProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState<SelectedItem>({
    orderId: null,
    evaluationId: null,
  });

  return (
    <Context.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </Context.Provider>
  );
};

export const useSelectedOrder = () => useContext(Context);
