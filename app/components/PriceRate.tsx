import React from 'react'

const PriceRate = () => {
    const [price, setPrice] = React.useState(0);

  const handlePriceChange = (value: number) => {
    setPrice(value);
  };
  return (
    <div className='py-2 flex flex-wrap md:flex-nowrap gap-4 space-x-1'>
        <button className={`text-base rounded-3xl py-2 px-4 ${price===1?'bg-green-300':'bg-gray-200'}`} onClick={() => handlePriceChange(1)}>Too Low</button>
        <button className={`text-base rounded-3xl py-2 px-4 ${price===2?'bg-green-300':'bg-gray-200'}`} onClick={() => handlePriceChange(2)}>Reasonable</button>
        <button className={`text-base rounded-3xl py-2 px-4 ${price===3?'bg-green-300':'bg-gray-200'}`} onClick={() => handlePriceChange(3)}>Expensive</button>
    </div>
  )
}

export default PriceRate