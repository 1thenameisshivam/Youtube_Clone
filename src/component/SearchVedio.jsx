import React from 'react'

const SearchVedio = ({info}) => {
    const {snippet,statistics}=info;
    const {channelTitle,localized,thumbnails}=snippet;

  return (

    <div className=' w-96 p-1 flex' >
        <img className='w-96 rounded-lg' src={thumbnails.medium.url} />
        <div>
        <h1>{localized.title}</h1>
        <p className='py-2 font-bold'>{channelTitle.split(",")}</p>
        <p>{Math.floor((statistics.viewCount)/1000)} k Viewa</p>
        </div>
       
    </div>
  )
}

export default SearchVedio