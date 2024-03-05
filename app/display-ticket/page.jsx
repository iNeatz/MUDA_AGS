'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'

const DisplayTickets = () => {
	const router = useRouter()
	const [bookingList, setBookingList] = useState([])

	useEffect(() => {
		const prevList = localStorage.getItem('bookingList')

		if (prevList) setBookingList(JSON.parse(prevList))
	}, [])

	//Array deletion
	const deleteData = (index) => {
		let tempList = bookingList
		tempList.splice(index, 1)
		setBookingList(tempList)

		localStorage.setItem('bookingList', JSON.stringify(bookingList))

		router.refresh()
	}

	return (
		<div className='overflow-x-auto mx-auto'>
			<table className='table-auto border-collapse border border-gray-800'>
				<thead>
					<tr>
						<th className='px-4 py-2 bg-gray-800 text-white'>Full Name</th>
						<th className='px-4 py-2 bg-gray-800 text-white'>Contact No.</th>
						<th className='px-4 py-2 bg-gray-800 text-white'>No. Of Seats</th>
						<th className='px-4 py-2 bg-gray-800 text-white'>Action</th>
					</tr>
				</thead>
				<tbody>
					{bookingList.map((listItem, index) => (
						<tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : ''}>
							<td className='border px-4 py-2'>{listItem.fullName}</td>
							<td className='border px-4 py-2'>{listItem.contact}</td>
							<td className='border px-4 py-2'>{listItem.noOfSeats}</td>
							<td className='border px-4 py-2'>
								<button
									className='bg-red-500 text-white flex items-center justify-center p-3 rounded-md hover:bg-transparent hover:text-black cursor-pointer'
									onClick={() => deleteData(index)}
								>
									<span>Delete</span>
									<MdDelete />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default DisplayTickets
