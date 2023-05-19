import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import SearchBox from '@/components/SearchBox'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google clone',
  description: 'Google clone by Olawale',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
    
      <Footer />
      </body>
    </html>
  )
}
