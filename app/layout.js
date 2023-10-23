import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['200', '400', '600', '800'] })

export const metadata = {
  title: 'Unriddle | AI',
  description: 'Next generation AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        </body>
    </html>
  )
}
