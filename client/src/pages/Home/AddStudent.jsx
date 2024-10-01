import React from 'react'
import { useState } from 'react';
import axios from 'axios';


export default function AddStudent() {
     
	const [Name,setName] = useState("")
    const [Reg,setReg] = useState("")
    const [course,setcourse] = useState("")
    const [semister,setsemister] = useState("")

    const [data,setData] = useState([])
    // event.preventDefault(); 

    async function submitHandler(){
        const data={
            Name,
            Reg,
            course,
			semister
        }
		console.log(data)
        try{
            const std=await axios.post("http://localhost:5000/students",data)
			.then(alert("Student Has been Inserted"))
            console.log(std);
        }
        catch(err){
            console.log(err);
        }
    }

	return (
        <div className=' w-full flex justify-center items-center'>
		<form class="w-full max-w-lg display" >
				<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
					Name
					</label>
					<input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" 
					type="text" 
					placeholder="John"
					onChange={ (e)=> {
                        setName(e.target.value)
                   }}
				   />
					<p class="text-xs italic">Please fill out this field.</p>
				</div>
				<div class="w-full md:w-1/2 px-3">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
					Register No.
					</label>
					<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" 
					type="text" 
					placeholder="2317*****"
					onChange={ (e)=> {
                        setReg(e.target.value)
                   }}
					/>
				</div>
				</div>
				<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full px-3">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
					Course
					</label>
					<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" 
					type="text" 
					placeholder="Mca"
					onChange={ (e)=> {
                        setcourse(e.target.value)
                   }}
					/>
					<p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
				</div>
				</div>
				<div class="flex flex-wrap -mx-3 mb-2">
				{/* <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
					Image Upload
					</label>
					<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" 
					type="file" 
					placeholder="Albuquerque" 
					onChange={convertToBase64}
					/>
				</div> */}
				<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
					Semister
					</label>
					<div class="relative">
					<select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
					id="grid-state"
					onChange={ (e)=> {
                        setsemister(e.target.value)
                   }}
					>
					    <option>1st</option>
						<option>2nd</option>
						<option>3rd</option>
						<option>4th</option>	
					</select>
					<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
						<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
					</div>
					</div>
					
				</div>
				<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded mt-7 ml-7" 
			type="button"
			onClick={submitHandler}
			>
               Submit
             </button>
            </div>
				</div>
				
        </form>
		</div>
	
	) 
}
