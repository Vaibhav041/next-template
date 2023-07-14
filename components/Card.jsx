import React from 'react'

const Card = ({image, heading, text}) => {
  return (
    <div className='w-[253px] h-full border border-blue-200 border-solid'>
        <img src={image}/>
        <div className='p-3 flex flex-col justify-between min-h-[219px]'>
            <div>
            <h1 className='text-lg'>{heading}</h1>
            <p className='text-sm'>{text}</p>
            </div>
            <button className='text-xs font-medium text-[#0033FF] mt-10 border-2 border-[#0033FF] py-1 border-solid hover:text-orange-500 hover:border-orange-500' >VIEW THIS TEMPLATE</button>
        </div>
    </div>
  )
}

export default Card