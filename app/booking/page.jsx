'use client'

import { useEffect, useState } from 'react'

const Booking = () => {
	const [fullName, setFullName] = useState('')
	const [contactNumber, setContactNumber] = useState('')
	const [noOfSeats, setNoOfSeats] = useState('')
	const [pin, setPin] = useState('')

	//Array State initialization
	const [bookingList, setBookingList] = useState([])

	useEffect(() => {
		const prevList = localStorage.getItem('bookingList')

		if (prevList) setBookingList(JSON.parse(prevList))
	}, [])

	//Array insertion
	const insertToList = (data) => {
		let tempList = bookingList
		tempList.push(data)

		setBookingList(tempList)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const listData = {
			fullName,
			contact: contactNumber,
			noOfSeats,
			pin,
		}

		insertToList(listData)

		localStorage.setItem('bookingList', JSON.stringify(bookingList))

		//Resetting Form Values
		setFullName('')
		setContactNumber('')
		setNoOfSeats('')
		setPin('')
	}

	return (
		<section className='flex justify-center items-center'>
			<div className='mx-10 md:mx-50 max-w-[400px] px-10 py-10 bg-white rounded-lg shadow-md'>
				<form className='flex flex-col gap-5' onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='Full Name'
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
						required
					/>
					<input
						type='text'
						placeholder='Contact No.'
						value={contactNumber}
						onChange={(e) => setContactNumber(e.target.value)}
						required
					/>
					<input
						type='number'
						placeholder='No. of Seats'
						value={noOfSeats}
						onChange={(e) => setNoOfSeats(e.target.value)}
						required
					/>
					<input
						type='number'
						placeholder='Security PIN'
						value={pin}
						onChange={(e) => setPin(e.target.value)}
						required
					/>
					<button type='submit' className='mainBtn'>
						BOOK
					</button>

					<p className='italic text-xs font-semibold'>
						* Security PIN is needed to cancel a booking. <br /> So Don't Lose
						It
					</p>
					<p className='italic text-xs font-semibold'>
						* Please use 4-digit PIN
					</p>
				</form>
			</div>
		</section>
	)
}

export default Booking
