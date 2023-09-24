import './globals.css'
import { Inter } from 'next/font/google'
import {Header} from '../components/header/index'
import {Menu} from '../components/menu/index'
import {Footer} from '../components/Footer/index'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <Menu/>
        {children}
        <Footer/>
        </body>

    </html>
  )
}
