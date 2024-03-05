const AboutUs = () => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<h1 className='text-mainText font-bold uppercase text-3xl border-b-4'>
				Team Members
			</h1>
			<ul className='flex flex-col gap-2 my-5 font-semibold'>
				<li>
					Ashwin Shrestha (<span className='text-mainText'>7</span>)
				</li>
				<li>
					Darshan Gyawali (<span className='text-mainText'>14</span>)
				</li>
				<li>
					Mukesh Kumar Yadav (<span className='text-mainText'>24</span>)
				</li>
				<li>
					Ujjal Shrestha (<span className='text-mainText'>39</span>)
				</li>
			</ul>
		</div>
	)
}

export default AboutUs
