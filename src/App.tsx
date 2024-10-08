import { ChangeEvent, FormEvent, useState } from "react"
import ProductCard from "./components/productCard"
import Modal from "./components/ui/Modal"
import { categories, colors, inputForm, items } from "./data"
import Button from "./components/ui/Button"
import Input from "./components/ui/Input"
import { Validation } from "./validation"
import ErrorMsg from "./components/ErrorMsg"
import CircleColor from "./components/CircleColor"
import { Item } from "./interface"
import { v4 as uuid } from "uuid";
import Select from "./components/ui/Select"
import ErrorMsgColor from "./components/ErrorMsgColor"
import { Label } from '@headlessui/react';
import { TProductName } from "./types"



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
  const [isOpenEditModal, setIsOpenEditModal] = useState(false)
  const [product, setProduct] = useState<Item>(defaultProduct)
  const [products, setProducts] = useState<Item[]>(items)
  const [productToEdit,setProductToEdit] =useState<Item>(defaultProduct)
  const [tempColors, setTempColors] = useState<string[]>([])
  const [errorColor,setErrorColor]=useState<string>("")
  const [selected, setSelected] = useState(categories[0])
  const [productIndex,setProductIndex]=useState<number>(0)
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
    const onChangeEditHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProductToEdit({
      ...productToEdit,
      [name]:value
    })
    setErrors({
      ...errors,
      [name]:""
    })
  }
  function open() {
    setIsOpen(true)
  }  function close() {
    setIsOpen(false)
  }
  function openEditModal() {
    setIsOpenEditModal(true)
  }
  function closeEditModal() {
    setIsOpenEditModal(false)
  }
  function cancelForm(): void {
    setProduct(defaultProduct)
    setTempColors([])
    close()
  }

  function cancelEditForm(): void {
    setProductToEdit(defaultProduct)
    setTempColors([])
    closeEditModal()
  }
  function onSubmitHandler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    const { title,description,price,imageUrl} =product
    const errors = Validation({ title, description, imageUrl, price})
    const hasErrorMsg = Object.values(errors).some(value => value == "") && Object.values(errors).every(value => value == "")
    if (!tempColors || tempColors.length === 0) {
      setErrorColor("At least one color is required."); 
    } else {
      setErrorColor("");
    }
  
    if (!hasErrorMsg || errorColor !== "") {
      setErrors(errors); 
      return; 
    }
    setProducts(prev => [{ ...product, id: uuid(), color: tempColors,category:selected }, ...prev])
    setProduct(defaultProduct)
    setTempColors([])
    close()
  }
  function onSubmitEditHandler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    const { title,description,price,imageUrl} =productToEdit
    const errors = Validation({ title, description, imageUrl, price})
    const hasErrorMsg = Object.values(errors).some(value => value == "") && Object.values(errors).every(value => value == "")
    const combinedColors = tempColors.concat(productToEdit.color);
    if (!combinedColors || combinedColors.length === 0) {
      setErrorColor("At least one color is required.");
      return;
    }
  
    if (!hasErrorMsg || errorColor !== "") {
      setErrors(errors); 
      return; 
    }
    const updatedProducts = [...products]
    updatedProducts[productIndex] = { ...productToEdit,color:tempColors.concat(productToEdit.color) };
    setProducts(updatedProducts)
    setProduct(defaultProduct)
    setTempColors([])
    closeEditModal()
  }
  const productList = products.map((product, index) => <ProductCard key={index} index={index} product={product} setProductToEdit={setProductToEdit } openEditModal={openEditModal} setProductIndex={setProductIndex} />)

   const form = inputForm.map(input => <div key={input.id} className="flex flex-col">
    <label htmlFor={input.id}>{input.label}</label>
    <Input onChange={onChangeHandler} id={input.id} name={input.name} value={product[input.name]} />
    <ErrorMsg msg={errors[input.name]} />
   </div>)
  // const editForm = inputForm.map(input => <div key={input.id} className="flex flex-col">
  //   <label htmlFor={input.id}>{input.label}</label>
  //   <Input onChange={onChangeEditHandler} id={input.id} name={input.name} value={productToEdit[input.name]} />
  //   <ErrorMsg msg={errors[input.name]} />
  // </div>)
  const colorsList = colors.map((color, index) => <CircleColor onClick={() => 
  {
    if (tempColors.includes(color)) {
      setTempColors(prev => prev.filter(item => item !== color))
      return;
    }
    if (productToEdit.color.includes(color)) {
      const updatedColors = productToEdit.color.filter(item => item !== color);
      setProductToEdit(prev => ({
        ...prev,
        color: updatedColors,
      }));
      return;
    }
    setErrorColor("")
    setTempColors((prev) => [...prev, color])
    
  }
  } key={index} color={color} />)
  const renderEditForm = (id: string, label:string,name:TProductName) => {
    return <div className="flex flex-col">
    <label htmlFor={id}>{label}</label>
    <Input onChange={onChangeEditHandler} id={id} name={name} value={productToEdit[name]} />
    <ErrorMsg msg={errors[name]} />
  </div>
  }
  console.log("edtit",productToEdit.color)
  console.log("temp",tempColors)
  return (
    <main className="container">
      <Button className="bg-blue-500  hover:bg-blue-400" onClick={open}>Add</Button>
    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
   {productList}
      </div>
      <Modal isOpen={isOpen} close={close} title="Add product">
        <form className="space-y-3" onSubmit={onSubmitHandler }>
          {form}
          <Select selected={selected} setSelected={setSelected} />
          <ErrorMsgColor errorColor={errorColor}/>
          <div className="flex flex-wrap gap-1">
            {colorsList}
          </div>
          <div className="flex flex-wrap">
            {tempColors.map((color, index) => <span style={{backgroundColor:color}} className="text-white mb-1 p-1 rounded-md ms-1" key={index}>{color}</span>)}
          </div>
          <div className="flex justify-between space-x-3 ">
        <Button className="bg-red-500  hover:bg-red-400" type="button" onClick={cancelForm}>Cancel</Button>
        <Button className="bg-blue-500  hover:bg-blue-400">Submit</Button>
       </div>
        </form>
    
      </Modal>
      <Modal isOpen={isOpenEditModal} close={closeEditModal} title="Edit product">
        <form className="space-y-3" onSubmit={onSubmitEditHandler}>
          {renderEditForm("title", "Product Title", "title")}
          {renderEditForm("description", "Product Description", "description")}
          {renderEditForm("imageUrl", "Product Image Url", "imageUrl")}
          {renderEditForm("price", "Product Price", "price")}
          {/* <Select selected={selected} setSelected={setSelected} /> */}
          <ErrorMsgColor errorColor={errorColor}/>
          <div className="flex flex-wrap gap-1">
            {colorsList}
          </div>
          <div className="flex flex-wrap">
          {tempColors.concat(productToEdit.color).map((color, index) => <span style={{backgroundColor:color}} className="text-white mb-1 p-1 rounded-md ms-1" key={index}>{color}</span>)}
          </div> 
          <div className="flex justify-between space-x-3 ">
        <Button className="bg-red-500  hover:bg-red-400" type="button" onClick={cancelEditForm}>Cancel</Button>
        <Button className="bg-blue-500  hover:bg-blue-400">Submit</Button>
       </div>
        </form>
    
      </Modal>
      </main>
  )
}

export default App
