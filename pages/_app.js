import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'nes.css/css/nes.css'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            font-family :  'Press Start 2P', cursive;
          }
        `}</style>
        <Head>
          <title>Portfolio Azako</title>
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    )
  }
}
