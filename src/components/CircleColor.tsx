import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLDivElement>{
  color: string;
}

function CircleColor ({color,...rest}:IProps) {
  return (
 <div  style={{backgroundColor:color}} className="w-5 h-5 rounded-full  mb-1" {...rest}></div>
  )
}

export default CircleColor