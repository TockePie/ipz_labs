import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { ItemId, StorageDish } from '@/types/dish'

interface CartState {
  cart: StorageDish[]

  addItem: (itemId: ItemId) => void
  removeItem: (itemId: ItemId) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addItem: (itemId) => {
        const { cart } = get()
        const isExisting = cart.some((item) => item.id === itemId)

        if (isExisting) {
          set({
            cart: cart.map((item) =>
              item.id === itemId
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          })
        } else {
          set({ cart: [...cart, { id: itemId, quantity: 1 }] })
        }
      },
      removeItem: (itemId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== itemId)
        }))
      },
      clearCart: () => set({ cart: [] })
    }),
    {
      name: 'cart'
    }
  )
)
