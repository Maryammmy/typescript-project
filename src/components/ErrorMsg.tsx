interface IProps{
    msg: string;
}

function ErrorMsg ({msg}:IProps) {
  return (
      msg ? <span className="text-red-600 font-semibold text-sm">{msg}</span>:null
  )
}

export default ErrorMsg