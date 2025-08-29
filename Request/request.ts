export async function getAllCategory() { 
    const categoryRes = await fetch('http://fakestoreapi.com/products/categories');
    
    return categoryRes.json()
}