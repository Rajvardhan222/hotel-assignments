import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getQRCode } from '../../axios/hotelAdmin/hotel.api'

function QR() {
    let {name} = useParams()
    console.log(name)
    let [qr, setQR] = useState(null)
    let [error, setError] = useState(null)
    let [loading,setLoading]   = useState(false)

    useEffect(() => {
        setError(null)
        setLoading(true)
        getQRCode(name)
        .then((response) => {
            console.log(response)
            setQR(response.data.data.qr_code)
        }).catch((error) => {
            console.log('Error getting QR code: ', error.message)
            setError(error.message)
        }).finally(() => {
            setLoading(false)})
    }, [])


    
    return (
        
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary">
        <h1 className="text-3xl font-bold mb-4 text-quinary">QR Code</h1>
        {loading && <p className="text-primary">Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {qr && <img src={qr}  alt="QR Code" className="w-64 h-64   rounded-md" />}
    </div>
    )
  
}

export default QR