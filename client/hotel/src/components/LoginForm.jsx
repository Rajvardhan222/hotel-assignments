import React from "react";
import InputText from "./Input";
import Button from "./Button";
import {set, useForm} from 'react-hook-form'
import { login as createOrLogin} from "../axios/user/user.api";
import { useNavigate } from "react-router-dom";
function LoginForm({ name }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    
  } = useForm()
  let navigate = useNavigate();
  let [error, setError] = React.useState(null);
  async function loginUser(data) {
    try {
      setError(null)
      let requestPayload = {
        username: data.username,
        password: data.password,
      }
      console.log(data)
      let response = await createOrLogin(requestPayload);
      console.log(response)
      if (response.status === 200) {
        navigate('/list')
      }else{
        setError(response.data.message)
      }
    } catch (error) {
      setError(error.message)
    }
    
  }
  return (
    <>
      <div className=" shadow-md bg-gradient-to-br from-quaternary to-tertiary p-4 rounded-md">
        <div className="text-center p-5">
          <h4>{name}</h4>
          {error && <p className="text-red-500">{error}</p>}
          
        </div>
        <div className="px-7 w-full lg:px-28  md:px-16  ">
          <form className="grid  grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-3"  
          
          onSubmit={handleSubmit(loginUser)}
          >
          <div className="flex flex-col gap-y-3">
            <InputText placeholder={'username'} 
            {...register('username', { required: 'Username is required' , minLength: { value: 3, message: 'Username should be at least 3 characters' } })}
            />
            {errors.username && <p className="text-red-500 ">{errors.username.message}</p>}
            </div>
            <div className="flex flex-col gap-y-3">
            <InputText type={'password'}  placeholder={'password'}
            
            {...register('password', { required: 'Password is required' , minLength: { value: 6, message: 'Password should be at least 6 characters' } })}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
           </div>
            <div className="m-auto md:col-span-2">
              <Button>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
