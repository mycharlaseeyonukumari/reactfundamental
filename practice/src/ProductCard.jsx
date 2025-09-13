function ProductCard({productName,productPrice,isAvailable}){
    
    return(
        <div>
            <p>productName: {productName}</p>
            <p> price: {productPrice}</p>
            <p>{isAvailable===true ? "product is avaliable" : "product is not avaliable"}</p>
        </div>
    )
}


export default ProductCard;