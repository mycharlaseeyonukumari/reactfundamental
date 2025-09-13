import ProductCard from "./ProductCard.jsx"
function App() {
    const productName="facewash"
    const productPrice=100
    const isAvailable=true

  return (
  <>
    <ProductCard productName={productName} productPrice={productPrice} isAvailable={isAvailable}/>  
  </>
  )
}

export default App
