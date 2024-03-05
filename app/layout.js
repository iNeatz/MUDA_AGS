import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
	title: 'MUDA Conference',
	description:
		'A conference ticketing app for booking and cancelling tickets for ',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${montserrat.className} flex flex-col justify-between min-h-[100vh] bg-bgPrimary`}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
