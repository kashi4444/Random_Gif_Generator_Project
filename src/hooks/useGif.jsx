import React, { useEffect, useState } from 'react'
import axios from 'axios';
const apiKey = 'n7sDKXUm1vJNByyZjIGZc3WO4CsY3kmF';
const url=`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
const useGif = (tag) => {
    const[loading, setLoading]= useState('false');
    const[gif, setGif] =useState('');

    async function fetchData() {
        setLoading('true');
        const {data}= await axios.get(tag ? `${url}&tag=${tag}` : url);
        const img_source= data.data.images.downsized_large.url;
        setGif(img_source);
        console.log(img_source);
        setLoading('false');
    }
    useEffect(() => {
      fetchData();
    }, [])

    return {gif, loading, fetchData};
}

export default useGif