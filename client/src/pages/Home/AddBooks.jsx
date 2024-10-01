import React from 'react'
import { useState } from 'react';
import axios from 'axios';


export default function AddBooks() {
     
	const [BookName,setBook] = useState("")
    const [Author,setAuthor] = useState("")
    const [Desc,setDesc] = useState("")
    const [selectedFile,setImage] = useState("")
	const [Category,setCat] = useState("")
	// const [date,setDate] = useState("")
	// const [like,setLike] = useState("")
    const [data,setData] = useState([])
    // event.preventDefault(); 

	function convertToBase64(e){
		console.log(e);
		var reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onload = () => {
			console.log(reader.result);
			setImage(reader.result);
		}
		reader.onerror = error => {
			console.log("Error: ",error);
		}
	}

    async function submitHandler(){
        const data={
            BookName,
            Author,
            Desc,
			selectedFile,
			Category,
        }
		console.log(data)
        try{
            const book=await axios.post("http://localhost:5000/books",data)
			.then(alert("Book Has been Inserted"))
            console.log(book);
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
					placeholder="Harrry Potter"
					onChange={ (e)=> {
                        setBook(e.target.value)
                   }}
				   />
					<p class=" text-xs italic">Please fill out this field.</p>
				</div>
				<div class="w-full md:w-1/2 px-3">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
					Author Name
					</label>
					<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" 
					type="text" 
					placeholder="JK Rowling"
					onChange={ (e)=> {
                        setAuthor(e.target.value)
                   }}
					/>
				</div>
				</div>
				<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full px-3">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
					Discription
					</label>
					<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" 
					type="text" 
					placeholder="Enter the Discription"
					onChange={ (e)=> {
                        setDesc(e.target.value)
                   }}
					/>
					<p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
				</div>
				</div>
				<div class="flex flex-wrap -mx-3 mb-2">
				<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
					Image Upload
					</label>
					<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" 
					type="file" 
					placeholder="Albuquerque" 
					onChange={convertToBase64}
					/>
				</div>
				<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
					Category
					</label>
					<div class="relative">
					<select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
					id="grid-state"
					onChange={ (e)=> {
                        setCat(e.target.value)
                   }}
					>
					    <option>Computer Science</option>
						<option>Buisness Managment</option>
						<option>Adventure</option>
						<option>Horror</option>
						<option>Sci-Fi</option>
						<option>Action</option>
						<option>Adventure</option>
						<option>Horror</option>
						<option>Romance</option>
						<option>Mystery</option>
						<option>Thriller</option>
						<option>Drama</option>
						<option>Fantasy</option>
						<option>Literature</option>
						<option>Poetry</option>
						<option>Philosophy</option>
						
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
