"use client"
import { RooteState } from '@/store/store'
import { ShoppingBagIcon } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '../ui/sheet'
import CartSidbar from './CartSidbar'

const ShoppingCartButton = () => {
  const items = useSelector((state: RooteState) => state.cart.items)
  const totalQuantity = items.reduce((total, item) =>
    total + item.quantity
    , 0)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative">
          <span className='absolute -top-3 -right-2 w-6 h-6 bg-red-500 flex items-center justify-center text-xs text-white rounded-full'>
            {totalQuantity}
          </span>
          <ShoppingBagIcon size={26} />
        </button>
      </SheetTrigger>

      <SheetContent className="overflow-auto h-full">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>

        <CartSidbar items={items} />
      </SheetContent>
    </Sheet>
  )
}

export default ShoppingCartButton
