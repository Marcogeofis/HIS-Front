import '@/styles/globals.css'
import { Header } from '@/components/Header/header'
import { Footer } from '@/components/Footer/Footer'
import { UserContextProvider } from '@/context/userContext'

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserContextProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </UserContextProvider>
    </>
  )
}

