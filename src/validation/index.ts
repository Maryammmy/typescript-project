
 export const Validation = (product: { title: string; description: string; imageUrl: string; price:string}) => {
    
    const errors :{ title: string; description: string; imageUrl: string; price:string} = {
        title: "",
        description: "",
        imageUrl: "",
        price:""
     }
     const vaildImageUrl =/https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_\+.~#?&//=]*)\.(?:jpg|jpeg|png|gif|bmp|webp)/;
    if (!product.title.trim() || product.title.length < 10 || product.title.length > 80) {
    errors.title= "product title must be between 10 and 80 characters"
    }
    if (!product.description.trim() || product.description.length < 10 || product.description.length > 80) {
        errors.description= "product description must be between 10 and 80 characters"
     }
     if (!product.price.trim() || isNaN(Number(product.price))) {
        errors.price= "vaild price is required"
     }
     if (!product.imageUrl.trim() || !vaildImageUrl) {
        errors.imageUrl= "must be a vaild imageUrl"
    }
    return errors
}