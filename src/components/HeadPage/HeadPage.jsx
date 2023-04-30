import Head from 'next/head'
import React from 'react'

const HeadPage = ({children}) => {
  return (
    <Head>
      {children}
      <meta name="description" content="Personal Page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default HeadPage
