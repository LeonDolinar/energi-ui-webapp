'use client'

import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <div className="flex h-screen flex-col justify-center">
      <Head>
        <title>
          Energi UI
        </title>
      </Head>
      <div className="flex justify-center">
        <button
          className={`bg-blue-500 p-4 text-white rounded hover:bg-blue-700 hover:shadow-xl`}
          onClick={() => alert('Welcome :)')}
        >
          Click Me
        </button>
      </div>
    </div>
  )
}
