import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar';
import Header from './Header'

export default function Layout(){
	return (
		<div className="bg-neutral-100 h-screen w-screen  flex flex-row">
			<div className="fixed h-full">
        <Sidebar />
      </div>
			<div className="ml-64 w-full">
				<Header />
				<div className="flex-1 p-4 min-h-0 overflow-auto">
					<Outlet />
				</div>
			</div>
		</div>
	)
}