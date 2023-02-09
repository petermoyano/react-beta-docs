import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    setProducts(
      products.map((p) => {
        if (p.id === productId) {
          return { ...p, count: p.count + 1 };
        } else {
          return p;
        }
      })
    );
  }
  function handleDecreaseClick(productId) {
    /* const p = products.filter((e) => e.id === productId)[0];
    if (p.count === 1) {
      console.log("Im HERE!!!!");
      setProducts(products.filter((prod) => prod.id !== productId));
    } else {
      setProducts(
        products.map((p) => {
          if (p.id === productId) {
            return { ...p, count: p.count - 1 };
          } else {
            return p;
          }
        })
      );
    } */
    let nextProducts = products.map((p) => {
      if (p.id === productId) {
        return { ...p, count: p.count - 1 };
      } else {
        return p;
      }
    });
    nextProducts = nextProducts.filter((p) => p.count > 0);
    setProducts(nextProducts);
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              handleDecreaseClick(product.id);
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
