import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const abortController = new AbortController();

     useEffect(() => {
        setLoading(true);
        fetch(url, {signal: abortController.signal } )
        .then(resp => 
            resp.json())
        .then(data => {
            setData(data)
            // setLoading(false) esta es una posible manera de mirar si el loading puede dejar de mostrarse
        })
        .catch(error => {
            if(error.name == "AbortError"){
                console.log("Petición cancelada")
            } else {
                console.warn(error) 
                setError('Set Generic Error')
            }
        })
        .finally(() => setLoading(false)) //  esta es la mejor manera ya que comprueba que todas las promesas han sido devueltas
      }, []);

      const handleCancelRequest = () => {
        abortController.abort();
        setError('Set request cancel')
      }

    return {data, loading, error, handleCancelRequest};
}
