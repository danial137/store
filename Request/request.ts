export async function getAllCategory() { 
    const categoryRes = await fetch('http://fakestoreapi.com/products/categories');
    
    return categoryRes.json()
}

export async function getAllproduct() {
    const productRes = await fetch("https://fakestoreapi.com/products");
    return productRes.json()
}

export async function getSingleProduct(id:string ) {
    const singleProductRes = await fetch(`https://fakestoreapi.com/products/${id}`);
    return singleProductRes.json();
} 