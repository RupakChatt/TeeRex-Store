import { createContext, useContext, useState } from 'react';
import { ITEMS } from './Items';


const ProductContext = createContext();

class Cart {
    constructor(productName, productQuantity, productPrice, productId, productImage, orderedQuantity, total) {
        this.productName = productName;
        this.productQuantity = productQuantity;
        this.productPrice = productPrice;
        this.productId = productId;
        this.productImage = productImage;
        this.orderedQuantity = orderedQuantity;
        this.total = total;
    }
}

export function ProductContextProvider({ children }) {
    const [productData, setProductData] = useState(ITEMS);
    const cartItems = [];

    const filterColor = (item) => {
        const result = ITEMS.filter(currData => {
            return currData.color === item;
        })
        setProductData(result);
    }

    const filterGender = (item) => {
        const result = ITEMS.filter(curr => {
            return curr.gender === item;
        })
        setProductData(result);
    }

    const filterType = (item) => {
        const result = ITEMS.filter(curr => {
            return curr.type === item;
        })
        setProductData(result);
    }

    const filterPrice = (price1, price2) => {
        const result = ITEMS.filter(curr => {
            return curr.price >= price1 && curr.price <= price2;
        })
        setProductData(result);
    }

    return (
        <ProductContext.Provider value={{
            productData, setProductData, filterColor, filterGender, filterType, filterPrice, ITEMS, cartItems, Cart
        }}  >{children}</ProductContext.Provider>
    )
}

export function Product() {
    return useContext(ProductContext);
}
