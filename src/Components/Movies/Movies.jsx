import React, { useEffect, useState } from 'react'
import './Movies.css'

const Movies = () => {
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 10000)

    // }, [])
    return (
        <div className='outer-container d-flex justify-content-center align-items-center'>
            {loading ? (
                <div className="image-container-shimmer"></div>
            ) : (
                <div className="image-container cursor-pointer">
                    <img src="https://cdn.pixabay.com/photo/2013/07/30/12/25/bouquet-168831_1280.jpg" alt="" />
                    <div className="image-overlay">
                        <h4 className="image-title">Purple Bouquet</h4>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Movies