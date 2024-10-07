 export interface Item {
    id?: string | undefined;
    title: string;
    description: string;
     color: string[];
     imageUrl: string;
     price: string;
     category:{
         name: string;
         imageUrl: string;
     }
  }
  
export interface IInputForm{
    id: string;
  name: "title" | "description" | "imageUrl" | "price";
    type: string;
    label: string;
}
export interface ICategory {
  id: string | undefined;
  name: string;
  imageUrl: string;
  }