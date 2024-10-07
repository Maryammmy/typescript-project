import { ICategory, IInputForm, Item } from "../interface";
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
 


export const categories :ICategory[] = [
  {
    id: uuid(),
    name: "Nike",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec26c4c77f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wWDd8fGVufDB8fHx8",
  },
  {
    id: uuid(),
    name: "T-Shirt",
    imageUrl: "https://images.unsplash.com/photo-1576566588028-414f73842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wdWYwfGVufDB8fHx8",
  },
  {
    id: uuid(),
    name: "Clothes",
    imageUrl: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wdWYwfGVufDB8fHx8",
  },
  {
    id: uuid(),
    name: "PC Desktop",
    imageUrl: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wdWYwfGVufDB8fHx8",
  },
  {
    id: uuid(),
    name: "Shoes",
    imageUrl: "https://images.unsplash.com/photo-1500048800687-8f4fec67e0a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wdWYwfGVufDB8fHx8",
  },
  {
    id: uuid(),
    name: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1506812574058-fc75fa93fead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wdWYwfGVufDB8fHx8",
  },
  {
    id: uuid(),
    name: "Watches",
    imageUrl: "https://images.unsplash.com/photo-1549057446-9f5d2d1a52c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wdWYwfGVufDB8fHx8",
  },
  {
    id: uuid(),
    name: "Hats",
    imageUrl: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wdWYwfGVufDB8fHx8",
  },
  {
    id: uuid(),
    name: "Sunglasses",
    imageUrl: "https://images.unsplash.com/photo-1518518822076-5b37d3b09dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wdWYwfGVufDB8fHx8",
  },
  {
    id: uuid(),
    name: "Bags",
    imageUrl: "https://images.unsplash.com/photo-1519923043430-7d16018b8fbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wdWYwfGVufDB8fHx8",
  }
];

