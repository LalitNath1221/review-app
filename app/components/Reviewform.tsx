'use client'
import React from 'react'
import Rating from './Rating'
import YesNo from './YesNo'
import PriceRate from './PriceRate'

const Reviewform = () => {

  
  return (
    <div className='max-w-[600px] mx-auto rounded-lg shadow-lg font-sans px-4 py-8 bg-white'>
      <p className='pb-1'><i className="bi bi-x text-gray-500 text-4xl"></i></p>
      <p className='text-2xl font-bold mb-5'>Live a review</p>
      <div className='mb-3'>
      <p className='text-xl font-semibold'>Safty</p>
      <p className='text-gray-700 text-sm'>Did you feel safe throughout the experience?</p>
      <div>
      <Rating/>
      </div>
      </div>
      <div className='mb-3'>
      <p className='text-xl font-semibold'>Communication</p>
      <p className='text-gray-700 text-sm'>Did the communication feel professional and courteous?</p>
      <div>
      <Rating/>
      </div>
      </div>
      <div className='mb-3'>
      <p className='text-xl font-semibold'>Would you recommend Trausti?</p>
      <p className='text-gray-700 text-sm'>Your recommendation helps others make informed decisions.</p>
      <div>
      <YesNo/>
      </div>
      </div>
      <div className='mb-3'>
      <p className='text-xl font-semibold'>Price</p>
      <p className='text-gray-700 text-sm'>Was the price fair for the value you received?</p>
      <div>
        <PriceRate/>
      </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4">
        Submit Review
      </button>
    </div>
  )
}

export default Reviewform