import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: 'Xiaomi POCO X7 Pro', quantity: 3 },
  { productName: 'Xiaomi Redmi 12 Pad', quantity: 5 },
  { productName: 'Asus ROG Strix 15', quantity: 1 },
  { productName: 'Gamesir x5 Lite', quantity: 5 },
]


export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>

      {
        itemsInCart.map(({ productName, quantity }) => (
          <ItemCounter key={productName} name={productName} quantity={quantity} />
        ))
      }

      {/* <ItemCounter productName="Xiaomi POCO X7 Pro" quantity={10} />
      <ItemCounter productName="Xiaomi Redmi 12 Pad" quantity={5} />
      <ItemCounter productName="Asus ROG Strix 15" quantity={3} /> */}
    </>
  )
}