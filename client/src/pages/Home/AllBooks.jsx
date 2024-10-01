// import React from 'react'
// import  SingleCard  from '../../components/Admin/SingleCard'
// import { useState,useEffect } from 'react';

// const API = "http://localhost:5000/books";


// export default function AllBooks() {

//     const [users, setUsers] = useState([]);

//   const fetchUsers = async (url) => {
//       try {
//           const res = await fetch(url);
//           const data = await res.json();
//           if (data.length > 0) {
//               setUsers(data);
//           }
//           console.log(data);
//       } catch (e) {
//           console.error(e)
//       }
//   }


//   useEffect(() => {
//       fetchUsers(API);
//   }, [])


// 	return <div> 

// 		 <SingleCard users={users}/>

// 	</div>
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AllBooks() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/books");
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
      {users.map((curUser, index) => (
        <div key={index} className="flex flex-col justify-start p-4 border border-gray-200 rounded-lg ">
          <img
            className="w-full h-31 object-cover rounded-lg mb-2"
            src={curUser.selectedFile}
            alt="Img not found" />

          <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">{curUser.BookName}</h5>
          <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">Author: {curUser.Author}</p>
          <p className="mb-3 text-base text-neutral-600 dark:text-neutral-200">Category: {curUser.Category}</p>
          <p className="mb-3 text-base text-neutral-600 dark:text-neutral-200">{curUser.Desc}</p>
          {/* <p className="mb-3 text-base text-neutral-600 dark:text-neutral-200">Likes: {curUser.likeCount}</p>
          <button
            type="button"
            // onClick={recievehandler}
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-red shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Button
          </button> */}
        </div>
      ))}
    </div>
  );
}
