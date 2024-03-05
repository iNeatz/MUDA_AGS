import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<main className='flex justify-center items-center w-full overflow-hidden '>
			<div className='flex flex-col md:flex-row gap-11 mx-10 md:mx-50 max-w-[1000px] px-10 py-10 bg-white rounded-lg shadow-md'>
				<Image src='/heroImage.svg' alt='conference' width={400} height={400} />

				<div className=' max-w-100 flex flex-col justify-around'>
					<h1 className='text-mainText font-bold tracking-widest text-2xl'>
						MUDA
						<span className='text-black uppercase'> Conference</span>
					</h1>
					<p className='text-md text-black font-normal my-5'>
						{' '}
						MUDA is a playground for students who plan to sharpen their
						developing skills to the very edge of their learning capabilities.
					</p>

					<div className='flex gap-5 items-center'>
						<Link
							href='/booking'
							className='px-5 py-2 bg-mainText text-white rounded-full cursor-pointer border-2 border-mainText hover:bg-white hover:text-mainText font-medium uppercase'
						>
							Book Now
						</Link>
						<Link
							href='/cancel-booking'
							className='border-b border-gray-500 text-gray-500 cursor-pointer hover:border-b-white'
						>
							Cancel?
						</Link>
					</div>
				</div>
			</div>
		</main>
	)
}
