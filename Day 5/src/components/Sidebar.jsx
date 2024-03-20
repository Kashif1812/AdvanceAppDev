import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { FcBullish } from 'react-icons/fc'
import { HiOutlineLogout } from 'react-icons/hi'
// import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants'

const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
	return (
		<div className="bg-neutral-900 w-60 p-3 flex flex-col">
			<div className="flex items-center gap-2 px-1 py-3">
				<FcBullish fontSize={24} />
				<span className="text-neutral-200 text-lg">Uni Access</span>
			</div>
            <div className=' h-[25em]  my-5 font-alata cursor-pointer text-[#e6e3f2]'>
                    <div onClick={()=>navigate('/dashboard')} className='  rounded-lg hover:bg-[#ebe9ed] border-[#e0e0de] hover:text-black flex gap-3 items-center p-5 '>
                        <span><i class="fa-solid fa-chart-pie "></i></span>
                        <span className='text-lg font-alata'>Dashboards</span>
                    </div>
                    <div onClick={()=>navigate('/organization')} className='  rounded-lg border-[#e0e0de] hover:bg-[#ebe9ed] hover:text-black flex gap-3 items-center p-5 '>
                        <span><i class="fa-solid fa-layer-group"></i></span>
                        <span className='text-lg '>Students</span>
                    </div>
                    <div  onClick={()=>navigate('/vendor')}className='  rounded-lg border-[#e0e0de] hover:bg-[#ebe9ed] hover:text-black  flex gap-3 items-center p-5 '>
                        <span><i class="fa-solid fa-rocket"></i></span>
                        <span className='text-lg '>Colleges</span>
                    </div>
                    <div className='  rounded-lg border-[#e0e0de] hover:bg-[#ebe9ed] hover:text-black flex gap-3 items-center p-5 '>
                        <span><i class="fa-solid fa-circle-check"></i></span>
                        <span className='text-lg '>Courses</span>
                    </div>
                    <div className='   rounded-lg border-[#e0e0de] hover:bg-[#ebe9ed] hover:text-black flex gap-3 items-center p-5 '>
                        <span><i class="fa-solid fa-rectangle-list"></i></span>
                        <span className='text-lg '>Complaints</span>
                    </div>
                    <div className=' rounded-lg border-[#e0e0de] hover:bg-[#ebe9ed] hover:text-black flex gap-3 items-center p-5 '>
                        <span><i class="fa-solid fa-circle-info"></i></span>
                        <span className='text-lg '>Support center</span>
                    </div>
                </div>
			<div className="py-8 flex flex-1 flex-col gap-0.5">
				{/* {DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))} */}
			</div>
			<div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
				{/* {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))} */}
				<div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					<a href="/">Logout</a>
				</div>
			</div>
		</div>
	)
}

function SidebarLink({ link }) {
	const { pathname } = useLocation()

	return (
		<Link
			to={link.path}
			className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
		>
			<span className="text-xl">{link.icon}</span>
			{link.label}
		</Link>
	)
}