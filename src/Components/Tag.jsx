import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
const Tag = () => {
    const[tag, setTag]= useState('car');
    const{gif, loading, fetchData}= useGif(tag);
    
    function clickHandler(){
      fetchData();
    }
    function changeHandler(event){
      setTag(event.target.value);
    }
  return (
    <div className='random_gif_container'>
        <h1 className='gif_heading'>Random {tag} Gif</h1>
        {
        loading === 'true' ? (<Spinner/>): (<img src={gif} width='450'/>)
        }
        <input className='input_field' onChange={changeHandler} value={tag}/>
        <button onClick={clickHandler} className='random_btn'>Generate</button>
    </div>
  )
}

export default Tag