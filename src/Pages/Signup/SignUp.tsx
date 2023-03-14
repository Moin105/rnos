import   React,{useEffect,useReducer} from 'react'
import Button from '../../Components/Buttons/Button'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Heading from '../../Components/Headings/Heading'
import Input from '../../Components/Input/Input'
import './Signup.css'
import { INITIAL_STATE ,reducer,UPDATE_FORM,onInputChange,onFocusOut} from '../../redux/reducers/formReducer'
function SignUp() {
   

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  // const validateForm = (name:string,value:any)=>{
  //   let hasError = false
  //   switch (name){
  //     case "firstName": if(value !== "" ){hasError = false} else hasError  = true; break
  //     case "email":  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){return hasError = false} else hasError = true; break
  //     case "lastName": if(value !== "" ){hasError = false} else hasError  = true;break
  //     case "password": if(value !== "" ){hasError = false} else hasError  = true;break
  //     case "confirmPassword": if(value !== "" ){hasError = false} else hasError  = true; break
  //     case "username": if(value !== "" ){hasError = false} else hasError  = true;break
  //     case "bio": if(value !== "" ){hasError = false} else hasError  = true; break
  //     // case "firstName": if(value !== "" ){hasError = false} else hasError  = true;
  //    default :break

      
  //   }
  //   // return {hasError , error}
  // }
  useEffect(() => {
  }, [])
  const onChange =(e:any)=>{
    onInputChange(e.target.name,e.target.value,dispatch,state)
    // dispatch({
    //   type:"CHANGE_INPUT",
    //   payload:{name:e.target.name,value:e.target.value}
    // } )
    console.log("talwinder",state)
  }

  return (
    <>
    
    <div className='signup-container'>
        <Header color=''/>
    </div>

        <div className='signup-box'>

        
        <Heading color="#064490" content="Create an Account" txtAlign="center" />
        <span>Already an Account</span>
        <div className='signup-form'>
             <Input value={state?.name?.value} onFocusOut={(e)=>onFocusOut("username", e.target.value, dispatch, state)} name='username' onChange={onChange}  placeholder="Username" label="Username" type="text" color="#064490"/> 
             {state.username.touched && state.username.hasError && (
            <div className="error">{state.username.error}</div>
          )}
             <Input value={state?.name?.value} onFocusOut={(e)=>onFocusOut("firstName", e.target.value, dispatch, state)} onChange={(e)=>onInputChange("firstName",e.target.value,dispatch,state)}  name='firstName'  placeholder="First Name" label="First Name" type="text" color="#064490"/>
             <Input value={state?.name?.value} onFocusOut={(e)=>onFocusOut("lastName", e.target.value, dispatch, state)} onChange={(e)=>onInputChange("lastName",e.target.value,dispatch,state)} name='lastName'  placeholder="Last Name" label="Last Name" type="text" color="#064490"/> 
             <Input value={state?.name?.value} onFocusOut={(e)=>onFocusOut("phone", e.target.value, dispatch, state)} onChange={(e)=>onInputChange("phone",e.target.value,dispatch,state)} name='phone'  placeholder="Phone" label="Phone" type="text" color="#064490"/>
             <Input value={state?.name?.value} onFocusOut={(e)=>onFocusOut("email", e.target.value, dispatch, state)} onChange={(e)=>onInputChange("email",e.target.value,dispatch,state)} name='email'  placeholder="Email" label="Email" type="text" color="#064490"/>
             <Input value={state?.name?.value} onFocusOut={(e)=>onFocusOut("password", e.target.value, dispatch, state)} onChange={(e)=>onInputChange("password",e.target.value,dispatch,state)} name='password'  placeholder="Password" label="Password" type="text" color="#064490"/>
             <Input value={state?.name?.value} onFocusOut={(e)=>onFocusOut("confirmPassword", e.target.value, dispatch, state)} onChange={(e)=>onInputChange("confirmPassword",e.target.value,dispatch,state)} name='confirmPassword'  placeholder="Confirm Password" label="Confirm Password" type="text" color="#064490"/>

             {/* <Input  placeholder="Re-Enter Password" label="Re-Enter Password" type="text" color="#064490"/> */}
             <Button func={null}  name="Sign Up" color="#ffffff" bg="#F21B2D" />
        </div>
        </div><>
          <Footer/>
        </>
        </>
  )
}

export default SignUp