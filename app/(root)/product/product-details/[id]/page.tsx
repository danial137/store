import { getSingleProduct } from '@/Request/request'
import React from 'react'

const ProductDetails = ({ params }: { params: { id: string } }) => {
    const id = params.id
    const singleProduct = getSingleProduct(id)
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails