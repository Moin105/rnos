export const INITIAL_STATE = {
    
    firstName:{ value: "", touched: false, hasError: true, error: "" },
    lastName:{ value: "", touched: false, hasError: true, error: "" },
    email:{ value: "", touched: false, hasError: true, error: "" },
    password:{ value: "", touched: false, hasError: true, error: "" },
    confirmPassword:{ value: "", touched: false, hasError: true, error: "" },
    phone:{ value: "", touched: false, hasError: true, error: "" },
    is_lender:'0',
    username:{ value: "", touched: false, hasError: true, error: "" },
    bio:{ value: "", touched: false, hasError: true, error: "" },
    isFormValid:false
}
export const UPDATE_FORM = "UPDATE_FORM";

export const reducer = (state:any,action:any)=>{
    switch (action.type){
      case UPDATE_FORM:
        const {name,value,hasError,error,touched,isFormValid} = action.data 
        //  console.log("name",name)
        return {
            ...state,
        [name]:{...state[name],value,hasError,error,touched},isFormValid
      
        };
      default: {
         return state
      }  
  
    }
  }

  export const validateInput=(name:string,value:any)=>{
    let hasError = false,
    error=""
    switch (name) {
      case "username":
      if (value.trim() !== "") {
        console.log("gimals",value,name)
        hasError = true
        error = "username cannot be empty"
      } else if (!/^[a-zA-Z ]+$/.test(value)) {
        hasError = true
        error = "Invalid Name. Avoid Special characters"
      } else {
        hasError = false
        error = ""
      }
      break
    default:
      break
    }
    return {hasError,error}
  }
  export const onFocusOut = (name:string,value:any,dispatch:Function,formState:[]) => {
    const { hasError, error  } = validateInput(name, value)
    let isFormValid = true
    for (const key in formState) {
      const item:any = formState[key]
      if (key === name && hasError) {
        isFormValid = false
        break
      } else if (key !== name && item.hasError) {
        isFormValid = false
        break
      }
    }
    dispatch({
      type: UPDATE_FORM,
      data: { name, value, hasError, error, touched: true, isFormValid },
    })
  }
  export const onInputChange = (name:string,value:any,dispatch:Function,formState:[]) =>{
    const { hasError, error } = validateInput(name, value)
    let isFormValid = true
  
    for (const key in formState) {
      const item:any = formState[key] 
      //  console.log("moin",name)
       
      // Check if the current field has error
      console.table(item)
      if (key === name && hasError) {
      
      
        isFormValid = false
        break
      }
       else if (key !== name && item?.hasError) {
        // Check if any other field has error
        isFormValid = false
        break
      }
    }
   dispatch({
     type:UPDATE_FORM,
     data:{
      name ,
      value,
      hasError,
      error:"",
      touched:false,
      isFormValid
     }
   })
  }
