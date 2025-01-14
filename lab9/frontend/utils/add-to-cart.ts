import { ActionProps } from '@/types/cart'

const addToCart = ({ cart, itemId, setCart }: ActionProps) => {
  const updatedCart = [...cart]
  const itemIndex = updatedCart.findIndex((item) => item.id === itemId)
  console.log(itemId)

  if (itemIndex !== -1) {
    updatedCart[itemIndex].quantity += 1
  } else {
    updatedCart.push({ id: itemId, quantity: 1 })
  }

  localStorage.setItem('cart', JSON.stringify(updatedCart))
  setCart(updatedCart)
}

export default addToCart
