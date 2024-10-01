import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export const SigninPage = () => {
    const [Reg,setReg] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPass] = useState("")
    const [data,setData] = useState([])
  //  event.preventDefault(); 
    async function submitHandler(){
        const data={
            Reg,
            email,
            password
        }
        alert("User Created");
        try{
            const user=await axios.post("http://localhost:5000/admin",data);
            
            
            console.log(user);
        }
        catch(err){
            console.log(err);
        }
    }

    return (
<div className="main bg-white rounded-lg shadow-md p-10 transition-transform w-96 text-center ml-60">
        <h1 className="text-teal-500 text-3xl">
              LibLinx
          </h1>
        <h3 className="text-lg">
             Mobile App Account Details
          </h3>
        <form>
            <label className="block mt-4 mb-2 text-left text-gray-700 font-bold">Enter Student Regno:</label>
            <input type="text"  name="username"
                   placeholder="Enter your Username"
                   className="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400" 
                   onChange={ (e)=> {
                        setReg(e.target.value)
                   }}
                   required/>
            <label className="block mb-2 text-left text-gray-700 font-bold">Email:</label>
            <input type="text"  name="email"
                   placeholder="Enter your Email"
                   className="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400" 
                   onChange={ (e)=> {
                    setEmail(e.target.value)
                   }}
                   required/>
            <label className="block mb-2 text-left text-gray-700 font-bold">Create Password:</label>
            <input type="password"  name="password"
                   placeholder="Enter your Password"
                   className="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400" 
                   onChange={ (e)=> {
                    setPass(e.target.value)
                   }}
                   required/>     
            <div className="flex justify-center items-center">
                <button type="submit"
                        className="bg-teal-500 text-white py-3 px-6 rounded-md cursor-pointer transition-colors duration-300 hover:bg-green-500"
                        onClick={submitHandler}>
                    Submit
                </button>
            </div>
         </form>
    </div>
    )
}