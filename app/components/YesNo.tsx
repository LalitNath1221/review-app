import React from 'react'

const YesNo = () => {
    const [recommendation, setRecommendation] = React.useState(true);

  const handleRecommendationChange = (value: boolean) => {
    setRecommendation(value);
  };
  return (
    <div className='flex gap-5 text-4xl py-2 space-x-1'>
        <button onClick={() => handleRecommendationChange(true)}>
        <i className={`bi ${recommendation === true ? 'bi-hand-thumbs-up-fill text-green-700' : 'bi-hand-thumbs-up'}`}></i>
        </button>
        <button onClick={() => handleRecommendationChange(false)}>
        <i className={`bi  ${recommendation === true ? 'bi-hand-thumbs-down' : 'bi-hand-thumbs-down-fill text-green-700'}`}></i>
        </button>
    </div>
  )
}

export default YesNo