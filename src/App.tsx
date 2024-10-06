import { ChangeEvent, FormEvent, useState } from "react"
import ProductCard from "./components/productCard"
import Modal from "./components/ui/Modal"
import { colors, inputForm, items } from "./data"
import Button from "./components/ui/Button"
import Input from "./components/ui/Input"
import { Validation } from "./validation"
import ErrorMsg from "./components/ErrorMsg"
import CircleColor from "./components/CircleColor"
import { Item } from "./interface"
import { v4 as uuid } from "uuid";



function App() {

  
  const defaultProduct={
    title: "",
    description: "",
     color: [],
     imageUrl: "",
     price: "",
     category:{
         name: "",
         imageUrl: "",
     }
  }
  const [isOpen, setIsOpen] = useState(false)
  const [product, setProduct] = useState(defaultProduct)
  const [products,setProducts] =useState<Item[]>(items)
  const [tempColors,setTempColors] =useState<string[]>([])
  const [errors, setErrors] = useState({
    title:"",
    description:"",
    imageUrl:"",
    price:"" ,
  })
  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProduct({
      ...product,
      [name]:value
    })
    setErrors({
      ...errors,
      [name]:""
    })
  }
  function open() {
    setIsOpen(true)
  }
  function close() {
    setIsOpen(false)
  }

  function cancelForm(): void {
    setProduct(defaultProduct)
    close()
  }

  function onSubmitHandler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    const { title,description,price,imageUrl } =product
    const errors = Validation({ title, description, imageUrl, price })
    const hasErrorMsg = Object.values(errors).some(value => value == "") && Object.values(errors).every(value => value == "")
    if (!hasErrorMsg) {
      setErrors(errors)
      return;
    }
    setProducts(prev => [{ ...product, id: uuid(), color: tempColors }, ...prev])
    setProduct(defaultProduct)
    setTempColors([])
    console.log("success")
    console.log(products)
  }
  const productList = products.map((product,index) => <ProductCard key={index} product={product} />)
  const form = inputForm.map(input => <div key={input.id} className="flex flex-col">
    <label htmlFor={input.id}>{input.label}</label>
    <Input onChange={onChangeHandler} id={input.id} name={input.name} value={product[input.name]} />
    <ErrorMsg msg={errors[input.name]} />
  </div>)
  const colorsList = colors.map((color, index) => <CircleColor onClick={() => 
  {
    if (tempColors.includes(color)) {
      setTempColors(prev => prev.filter(item => item !== color))
      return;
    }
    setTempColors((prev) => [...prev, color])
  }
  } key={index} color={color} />)
  return (
    <main className="container">
      <Button className="bg-blue-500  hover:bg-blue-400" onClick={open}>Add</Button>
    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
   {productList}
      </div>
      <Modal isOpen={isOpen} close={close} title="Add product">
        <form className="space-y-3" onSubmit={onSubmitHandler }>
          {form}
          <div className="flex flex-wrap gap-1">
            {colorsList}
          </div>
          <div className="flex flex-wrap">
            {tempColors.map((color, index) => <span style={{backgroundColor:color}} className="text-white mb-1 p-1 rounded-md ms-1" key={index}>{color}</span>)}
          </div>
          <div className="flex justify-between space-x-3 ">
        <Button className="bg-red-500  hover:bg-red-400" onClick={cancelForm}>Cancel</Button>
        <Button className="bg-blue-500  hover:bg-blue-400">Submit</Button>
       </div>
        </form>
    
      </Modal>
      </main>
  )
}

export default App
