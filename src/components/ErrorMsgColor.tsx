interface IProps{
    errorColor: string;
  }
  
  function ErrorMsgColor ({errorColor}:IProps) {
    return (

        errorColor ? <span className="text-red-600 font-semibold text-sm">{errorColor}</span> : null
       
    )
  }
  
  export default ErrorMsgColor