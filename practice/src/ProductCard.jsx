function ProductCard({productName,productPrice,isAvailable})
{  

    return(
        <div className="outerbroder">
            <p >productName: {productName}</p>
            <p > price: {productPrice}</p>
           <p>{isAvailable===true ? "product is available" : "out of stock"}</p>
        </div>
    )
}
export default ProductCard;