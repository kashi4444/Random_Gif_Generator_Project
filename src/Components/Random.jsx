import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
const Random = () => {
    const{gif, loading, fetchData}= useGif();
    
    function clickHandler(){
      fetchData();
    }
  return (
    <div className='a_random_gif_container'>
        <h1 className='gif_heading'>A Random Gif</h1>
        {
        loading === 'true' ? (<Spinner/>): (<img src={gif} width='450'/>)
        }
        <button onClick={clickHandler} className='random_btn'>Generate</button>
    </div>
  )
}

export default Random