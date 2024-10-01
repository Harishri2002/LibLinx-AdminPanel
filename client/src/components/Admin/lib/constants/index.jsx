import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineLogout,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

import { 
	FaBookMedical,
	FaBookOpen

} from "react-icons/fa";

import { BsQrCodeScan } from "react-icons/bs";
import { 
	FaHandHoldingHand,
	FaDatabase
} from "react-icons/fa6";

import React from 'react'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/AdminPage/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'AddBooks',
		label: 'AddBooks',
		path: '/AdminPage/AddBooks',
		icon: <FaBookMedical/>
	},
	{
		key: 'ViewBooks',
		label: 'ViewBooks',
		path: '/AdminPage/ViewBooks',
		icon: <FaBookOpen />
	},
	{
		key: 'AddStudent',
		label: 'AddStudent',
		path: '/AdminPage/AddStudent',
		icon: <HiOutlineUsers />
	},
	{
		key: 'ScannerPage',
		label: 'ScannerPage',
		path: '/AdminPage/ScannerPage',
		icon: <BsQrCodeScan />
	},
	{
		key: 'BookHolder',
		label: 'BookHolder',
		path: '/AdminPage/BookHolder',
		icon: <FaHandHoldingHand />
	},
	{
		key: 'Records',
		label: 'Records',
		path: '/AdminPage/Records',
		icon: <FaDatabase/>
	}

]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'App Entry',
		label: 'App Entry',
		path: '/AdminPage/Sign',
		icon: <HiOutlineCog />,
		color: 'black',
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	},
	{
		key: 'Logout',
		label: 'Logout',
		path: '/Login',
		color: "red",
		icon: <HiOutlineLogout />
	}
]
