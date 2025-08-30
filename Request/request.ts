export async function getAllCategory() { 
    const categoryRes = await fetch('http://fakestoreapi.com/products/categories');
    
    return categoryRes.json()
}

export async function getAllproduct() {
    const productRes = await fetch("https://fakestoreapi.com/products");
    return productRes.json()
}