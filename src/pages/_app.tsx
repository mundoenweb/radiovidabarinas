import '@/styles/global/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (navigator.serviceWorker) {
      navigator.serviceWorker.register('sw.js');
    }
  }, [])

  return (
    <>
      <Head>
        <meta name="theme-color" content="#2B2C2C" />
        <title>Vida 100.5 FM</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
