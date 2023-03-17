import React, { createContext, ReactNode, useState } from "react";
import { Navigation } from "../navigation/RootNavigation";
import Main from "../screens/Main";
import ProductInfo from "../screens/ProductInfo";

// Não consigo fazer esse context funcionar por nada

export interface ContextResponse {
  cart : Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
  addToCart: Function;
  subFromCart: Function;
}

export interface Cart {
  num : number;
  itens: string[];
  values: number;
}

export const CartContext = createContext<ContextResponse | null>(null);

export function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<Cart>({
    num: 0,
    itens: [],
    values: 0,
  });

  function addToCart (item: any){
    if (cart != null){
      let prevItens = cart.itens;
      let prevValues = cart.values;
      prevItens!.push(item.title);
    
      setCart({
        num: prevItens.length,
        itens: prevItens,
        values: prevValues + item.price
      })
    }
    else {
      setCart({
        num: 0,
        itens: [],
        values: 0
      })
    }
  }
  function subFromCart (item: any){
    let prevItens = cart.itens;
    let prevValues = cart.values;
    
    let itemToDestroy = prevItens.findIndex(item.title); 
    if(itemToDestroy != -1){
      prevItens.splice(itemToDestroy, 1);
    }

    setCart({
      num: prevItens.length,
      itens: prevItens,
      values: prevValues - item.price
    })
  }

  return(
    <CartContext.Provider
        value={{
            cart,
            setCart,
            addToCart,
            subFromCart,
        }
        }
    >
        {children}
    </CartContext.Provider>
  )
}
interface Props{
  children?: ReactNode | undefined
}
