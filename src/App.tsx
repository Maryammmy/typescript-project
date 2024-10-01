import ProductCart from "./components/productCart"


function App() {


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <ProductCart />
      <ProductCart />
      <ProductCart />
      <ProductCart />
      <ProductCart/>
    </div>
  )
}

export default App
