'use client'

import React, { useEffect, useState } from 'react'

const CancelBooking = () => {
	const [contactNumber, setContactNumber] = useState('')
	const [pin, setPin] = useState('')
	const [cancellationMessage, setCancellationMessage] = useState('')

	const [bookingList, setBookingList] = useState([])

	useEffect(() => {
		const prevList = localStorage.getItem('bookingList')

		if (prevList) setBookingList(JSON.parse(prevList))
	}, [])

	//Array deletion
	const deleteData = (data) => {
		let index = 0
		let tempList = bookingList

		for (let item of tempList) {
			if (item.contact === data.contact && item.pin === data.pin) {
				index = tempList.indexOf(item)

				tempList.splice(index, 1)
				setBookingList(tempList)

				return true
			}
		}

		return false
	}

	//Reset Cancellation Message
	useEffect(() => {
		setTimeout(() => {
			setCancellationMessage('')
		}, 3000)
	}, [cancellationMessage])

	const handleSubmit = (e) => {
		e.preventDefault()

		const cancellationData = {
			contact: contactNumber,
			pin,
		}

		let isCancelled = deleteData(cancellationData)

		if (isCancelled) setCancellationMessage('* Booking Cancelled Successfully')
		else setCancellationMessage('* Cancellation Request Failed')

		localStorage.setItem('bookingList', JSON.stringify(bookingList))
		//Resetting Form Values
		setContactNumber('')
		setPin('')
	}

	return (
		<section className='flex justify-center items-center'>
			<div className='mx-10 md:mx-50 max-w-[400px] px-10 py-10 bg-white rounded-lg shadow-md'>
				<form className='flex flex-col gap-5' onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='Contact No.'
						value={contactNumber}
						onChange={(e) => setContactNumber(e.target.value)}
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
						CANCEL BOOKING
					</button>

					<p className='italic text-xs font-semibold'>
						* This action is irreversible <br />
						{cancellationMessage && cancellationMessage}
					</p>
				</form>
			</div>
		</section>
	)
}

export default CancelBooking
