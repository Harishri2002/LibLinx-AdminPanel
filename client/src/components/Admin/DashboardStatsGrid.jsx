import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5';
import { FaHandsHolding } from "react-icons/fa6";
import { useState,useEffect } from 'react';
import axios from 'axios';
import { PiStudentDuotone } from "react-icons/pi";
import { FaBook,FaArrowAltCircleRight } from "react-icons/fa";

export default function DashboardStatsGrid() {
	const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/Dash");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

	return (
		<div className="flex gap-4">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<PiStudentDuotone className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Students</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">{data.stdNo}</strong>
						<span className="text-sm text-green-500 pl-2"></span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<FaBook className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Books</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">{data.BookNo}</strong>
						<span className="text-sm text-green-500 pl-2"></span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<FaHandsHolding className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Holders</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">{data.Hold}</strong>
						<span className="text-sm text-red-500 pl-2"></span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
					<FaArrowAltCircleRight className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Stduents Inside Library</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">{data.qrNo}</strong>
						<span className="text-sm text-red-500 pl-2"></span>
					</div>
				</div>
			</BoxWrapper>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
