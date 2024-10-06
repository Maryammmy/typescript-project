import { IInputForm, Item } from "../interface";
import { v4 as uuid } from "uuid";
 export const items: Item[] = [
    {
      id: uuid(),
      title: "Item 1",
      description: "This is item 1",
         color: ["#ff5733", "#3498db"], 
         price:"1000",
         imageUrl: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg",
      category: {
          name: "cars",
          imageUrl:"https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg",
      },
    },
    {
      id: uuid(),
      title: "Item 1",
      description: "This is item 1",
         color: [ "#ff5733", "#3498db"], 
         price:"1000",
         imageUrl: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg",
      category: {
          name: "cars",
          imageUrl:"https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg",
      },
    },
    {
      id: uuid(),
      title: "Item 1",
      description: "This is item 1",
         color: [ "#ff5733", "#3498db"], 
         price:"1000",
         imageUrl: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg",
      category: {
          name: "cars",
          imageUrl:"https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg",
      },
    },
    {
      id: uuid(),
      title: "Item 1",
      description: "This is item 1",
         color: [ "#ff5733", "#3498db"], 
         price:"1000",
         imageUrl: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg",
      category: {
          name: "cars",
          imageUrl:"https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg",
      },
    },
    {
      id: uuid(),
      title: "Item 1",
      description: "This is item 1",
         color: [ "#ff5733", "#3498db"], 
         price:"1000",
         imageUrl: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg",
      category: {
          name: "cars",
          imageUrl:"https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg",
      },
    },
   ]
 export const inputForm: IInputForm[] = [
   {
      id: "title",
      name: "title",
      type: "text",
      label:"Product Title"
   },
   {
      id: "description",
      name: "description",
      type: "text",
      label:"Product Description"
   },
   {
      id: "imageUrl",
      name: "imageUrl",
      type: "text",
      label:"Product Image Url"
   },
   {
      id: "price",
      name: "price",
      type: "text",
      label:"Product Price"
   },

]
  
export const  colors = [ 
   "#33FF57", 
   "#5733FF", 
   "#FF33A8", 
   "#FFA533", 
   "#33D1FF",
   "#A833FF", 
   "#FF5733", 
   "#FF33C4", 
   "#33FF9E", 
   "#3357FF",
   "#FFC433",  
   "#33FFEB"
];
 

