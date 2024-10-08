import { TProductName } from "../types";

 export interface Item {
   id?: string;
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
  name: TProductName;
    type: string;
    label: string;
}
export interface ICategory {
  id: string | undefined;
  name: string;
  imageUrl: string;
  }