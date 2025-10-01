import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    {productName: "Nintendo Switch", quantity: 1},
    {productName: "Playstation 5", quantity: 2},
    {productName: "Xbox Series X", quantity: 5},
]

export function FirstStepsApp(){
    return(
        <>
            <h1>Carrito de compras</h1>
            {/* <ItemCounter name="Nintendo Switch" quantity={1}/>
            <ItemCounter name="Playstation 5" quantity={3}/>
            <ItemCounter name="Xbox Series X" quantity={2}/> */}

            {
                itemsInCart.map(({productName, quantity}) => (
                    <ItemCounter key={productName} name={productName} quantity={quantity}/>
                ))
            }
        </>
    )
}