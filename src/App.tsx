import ProductCard from "./components/productCard"
import { items } from "./data"



function App() {
const productList =items.map(product=><ProductCard key={product.id} product={product}/>)
  return (
    <main className="container">
    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
   {productList}
      </div>
      </main>
  )
}

export default App
