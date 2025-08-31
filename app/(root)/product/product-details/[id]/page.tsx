import { getAllproduct, getProductByCategory, getSingleProduct } from "@/Request/request";
import { Product } from "@/typing";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import AddToCart from "./add-cart";
import ProductCard from "@/components/Home/ProductCard";
import Category from "@/components/Home/Category";

export default async function ProductDetails({ params }: any) {
    const { id } = params;
    const singleProduct: Product = await getSingleProduct(id);

    const allProduct = await getAllproduct()
    const relatedProduct = []

    for (let i = 0; i < allProduct.length; i++) {
        if (allProduct[i].category === singleProduct.category) {
            relatedProduct.push(allProduct[i])
        }

    } 
    
    const num = Math.round(singleProduct?.rating?.rate || 0);
    const starArray = new Array(num).fill(0);

    return (
        <div className="mt-20">
            <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4">
                <div className="col-span-3 mb-6 lg:mb-0">
                    <Image
                        src={
                            singleProduct.image && singleProduct.image.startsWith("http")
                                ? singleProduct.image
                                : singleProduct.image
                                    ? `https://fakestoreapi.com${singleProduct.image}`
                                    : "/placeholder.png"
                        }
                        alt={singleProduct.title}
                        width={400}
                        height={400}
                        unoptimized
                    />
                </div>

                <div className="col-span-4">
                    <h1 className="lg:text-3xl text-2xl font-bold text-black">{singleProduct.title}</h1>

                    <div className="mt-2 flex items-center space-x-2">
                        <div className="flex items-center">
                            {starArray.map((_, i) => (
                                <Star key={i} size={20} fill="yellow" className="text-yellow-600" />
                            ))}
                        </div>
                        <p className="text-base text-gray-700 font-semibold">
                            ({singleProduct.rating?.count} Reviews)
                        </p>
                    </div>

                    <span className="w-1/4 h-[1.6px] bg-gray-400 rounded-lg block mt-4 opacity-20 mb-4"></span>

                    <h1 className="lg:text-6xl text-3xl md:text-4xl text-blue-950 font-bold">
                        ${singleProduct?.price.toFixed(2)}
                    </h1>

                    <p className="mt-4 text-base text-black opacity-70">{singleProduct?.description}</p>
                    <p className="mt-4 text-sm text-black text-opacity-70 font-semibold">
                        Category: {singleProduct?.category}
                    </p>
                    <p className="mt-2 text-sm text-black text-opacity-70 font-semibold">Tag: Shop,PERSIAN</p>
                    <p className="mt-2 text-sm text-black text-opacity-70 font-semibold">SKU: {Math.random() * 500}</p>

                    <AddToCart />
                </div>
            </div>

            <div className="w-4/5 mt-6 mx-auto">
                <h1 className="text-2xl text-black font-semibold">Related Products</h1>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {relatedProduct.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
