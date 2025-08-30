import { getProductByCategory, getSingleProduct } from '@/Request/request'
import { Product } from '@/typing'
import Image from 'next/image'
import React from 'react'

const ProductDetails = async ({ params }: { params: { id: string } }) => {
    const id = params.id
    const singleProduct: Product = await getSingleProduct(id)
    const relatedProduct: Product[] = await getProductByCategory(singleProduct.category);
    const num = Math.round(singleProduct?.rating?.rate);
    const starArray = new Array(num).fill(0);
    return (
        <div className='mt-20'>
            <div className='w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4 '>
            
                <div className='col-span-3 mb-6 lg:mb-0'>
                    <Image src={singleProduct.image} alt={singleProduct.title} width={300} height={300} />
                </div>

                <div className='col-span-4'></div>
            
            </div>
        </div>
    )
}

export default ProductDetails