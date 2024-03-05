'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HiAdjustments } from 'react-icons/hi'

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleMenuToggle = () => {
		setIsMenuOpen((prev) => !prev)
	}

	return (
		<div className='flex justify-center items-center border-b border-b-gray-300 mx-4'>
			<Link href='/' className='flex items-center gap-2'>
				<Image src='/logo.png' alt='logo' width={100} height={80} />
				<h1 className='font-bold tracking-[6px] text-xl text-mainText'>MUDA</h1>
			</Link>

			<HiAdjustments
				className='text-mainText absolute right-5 text-xl cursor-pointer'
				onClick={handleMenuToggle}
			/>

			{isMenuOpen && (
				<div className='absolute right-10 top-10 p-5 bg-white rounded-lg shadow-md'>
					<ul className='flex flex-col gap-4'>
						<Link
							href='/display-ticket'
							className='p-5 cursor-pointer rounded-lg hover:bg-mainText hover:text-white flex justify-center items-center'
						>
							Display Ticket
						</Link>
						<Link
							href='/about-us'
							className='p-5 cursor-pointer rounded-lg hover:bg-mainText hover:text-white flex justify-center items-center'
						>
							About Us
						</Link>
					</ul>
				</div>
			)}
		</div>
	)
}

export default Navbar
