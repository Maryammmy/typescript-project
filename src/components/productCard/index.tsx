import { Item } from "../../interface"
import { textSlicer } from "../../utils/function"
import Image from "../Image"
import Button from "../ui/Button"

interface IProps{
product:Item
}

function ProductCard({ product }: IProps) {
    const  {title,description,imageUrl, price,color} =product
  return (
      <div className="border rounded-md p-2 max-w-sm">
          <h3>{title}</h3>
          <Image imageUrl={imageUrl} alt="product name" className="w-full rounded-md"/>
          <p className="pt-2">{textSlicer(description)}</p>
          <div className="flex space-x-2 mt-2">
            {color.map((color,index)=>  <span key={index} className={`w-5 h-5 bg-${color} rounded-full`}></span>
              )}
          </div>
          <div className="flex justify-between items-center">
              <span>{price}</span>
              <div> <Image imageUrl="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg" alt="product name" className="w-10 h-10 rounded-full object-cover"/></div>
          </div>
          <div className="flex justify-between space-x-2 my-2">
              <Button className="bg-blue-500" onClick={() => {
                  console.log("edit")
              }}>Edit</Button>
              <Button width="w-full" className="bg-red-500 text-red-300">Remove</Button>
          </div>
    </div>
  )
}

export default  ProductCard