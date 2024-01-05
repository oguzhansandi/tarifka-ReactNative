import React, {useState, useEffect} from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [data, setData] =useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
          const {data : responseData} = await axios.get(url);
          setData(responseData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };

    
  useEffect(() => {
    fetchData();
  }, []);

  return {error, loading, data}
}

export default useFetch