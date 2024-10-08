import { Item } from "../../interface"
import { textSlicer } from "../../utils/function"
import CircleColor from "../CircleColor"
import Image from "../Image"
import Button from "../ui/Button"

interface IProps{
  product: Item
  setProductToEdit: (product: Item) => void
  openEditModal: () => void
  setProductIndex: (index: number) => void
  index:number
}

function ProductCard({ product,setProductToEdit,openEditModal,setProductIndex,index }: IProps) {
  const { title, description, imageUrl, price, color, category } = product
  const toEdit = () => {
    setProductToEdit(product)
    openEditModal()
    setProductIndex(index)
    console.log(product)
  }
  return (
      <div className="border rounded-md p-2 max-w-sm">
          <Image imageUrl={imageUrl} alt="product name" className="w-full rounded-md" />
          <h3>{title}</h3>
          <p className="pt-2">{textSlicer(description)}</p>
          <div className="flex flex-wrap gap-1">
              {color.map((item, index) => <CircleColor key={index} color={item} />)}
            </div>
          <div className="flex justify-between items-center">
        <span>{price}</span>
              <div> <Image imageUrl={category.imageUrl} alt="product name" className="w-10 h-10 rounded-full object-cover"/></div>
          </div>
          <div className="flex justify-between space-x-2 my-2">
              <Button className="bg-blue-500" onClick={toEdit}>Edit</Button>
              <Button width="w-full" className="bg-red-500 text-red-300">Remove</Button>
          </div>
    </div>
  )
}

export default  ProductCard