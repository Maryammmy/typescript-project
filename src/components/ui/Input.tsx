import { InputHTMLAttributes } from "react"

interface IProps extends InputHTMLAttributes<HTMLInputElement>{

}

function Input ({...rest}:IProps) {
    return (
            <input type="text" {...rest} className=" py-2 focus:outline-none focus:border-blue-500 border border-gray-300 rounded-md"/>

  
  )
}

export default Input