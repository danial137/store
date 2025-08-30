import { getSingleProduct } from '@/Request/request'
import React from 'react'

interface PageProps {
    params: { id: string }
}

const ProductDetails = async ({ params }: PageProps) => {
    const { id } = params
    const singleProduct = await getSingleProduct(id)

    return (
        <div>
            <h1>{singleProduct.name}</h1>
            <p>{singleProduct.description}</p>
            <p>Price: ${singleProduct.price}</p>
        </div>
    )
}

export default ProductDetails
