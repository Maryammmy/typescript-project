 export interface Item {
    id?: number;
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
  