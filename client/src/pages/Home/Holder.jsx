import React from 'react'
import { useState } from 'react';
import axios from 'axios';


export default function Holder() {
     
	const [BookName,setName] = useState("")
    const [Reg,setReg] = useState("")
    const [Event,setEvent] = useState("")
    const [Dates,setDate] = useState("")

    const [data,setData] = useState([])
    // event.preventDefault(); 

    async function submitHandler(){
        const data={
            BookName,
            Reg,
            Event,
			ReturnAt:new Date(Dates)
        }
		console.log(data)
        try{
            const holder=await axios.post("http://localhost:5000/Holder",data);

			if (holder.data === "Book does Not Exists") {
				alert("Book does Not Exists");
			} 
			else if (holder.data === "Student does not exists") {
				alert("Student does not exists");
			} 
			else if (holder.data === "Book Updated Sucessfully") {
				alert("Book Updated Sucessfully");
			} 
			else if (holder.data === "Book Return Details Updated") {
				alert("Book Return Details Updated");
			} 
			else if (holder.data === "Already Updated") {
				alert("Already Updated");
			} 
			else{
				alert("Details Updated");
			}
            console.log(holder);
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
					Book Name
					</label>
					<input class="appearance-none block w-full bg-gray-200 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" 
					type="text" 
					placeholder="John"
					onChange={ (e)=> {
                        setName(e.target.value)
                   }}
				   />
					<p class=" text-xs italic">The name should be precise.</p>
				</div>
				<div class="w-full md:w-1/2 px-3">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
					Holder Register No.
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
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
					Event
					</label>
                    <div class="relative">
					<select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-7 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
					id="grid-state"
					onChange={ (e)=> {
                        setEvent(e.target.value)
                   }}
					>
					    <option>Taking</option>
						<option>Returning</option>
					</select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
						<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
					</div>
                    </div>
					<p class="text-gray-600 text-xs italic">Select One Event</p>
				</div>
				</div>
				<div class="flex flex-wrap -mx-3 mb-2">
				<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
					Date of Return
					</label>
					<div class="relative">
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
					id="grid-city"  
					type="date" 
					onChange={ (e)=> {
                        setDate(e.target.value)
                   }}
					/>
					</div>
					<p class="text-gray-600 text-xs italic">(Not Necassary if returning)</p>
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
