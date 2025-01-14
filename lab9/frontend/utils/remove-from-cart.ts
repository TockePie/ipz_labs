import { ActionProps } from '@/types/cart'

const removeItem = ({ cart, setCart, itemId }: ActionProps) => {
  const newCart = cart.filter(({ id }) => id !== itemId)
  localStorage.setItem('cart', JSON.stringify(newCart))
  setCart(newCart)
}

export default removeItem
