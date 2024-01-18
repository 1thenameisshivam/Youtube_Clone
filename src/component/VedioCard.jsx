import React from 'react'

const VedioCard = ({info}) => {
    const {snippet,statistics}=info;
    const {channelTitle,localized,thumbnails}=snippet;

  return (

    <div className=' w-96 p-1 ' >
        <img className='w-96 rounded-lg' src={thumbnails.medium.url} />
        <h1>{localized.title}</h1>
        <p className='py-2 font-bold'>{channelTitle.split(",")}</p>
        <p>{Math.floor((statistics.viewCount)/1000)} k Viewa</p>
    </div>
  )
}

export default VedioCard