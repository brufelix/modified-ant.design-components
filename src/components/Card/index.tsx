import React from 'react'
import { Image } from 'antd'
import img from '../../assets/img/imggec.jpg'

const styleContainer: React.CSSProperties = {
    display: 'flex',
    height: 'auto',
    width: '100%',
    borderRadius: '10px',
    overflow: 'hidden',
    margin: 10
}

function Card(): JSX.Element {
    return (
        <>
            <div style={styleContainer}>
                <Image src={img} alt="Gov" width="100%" height="175px" />
                <p style={{
                    position: 'absolute',
                    color: 'white',
                    height: 'auto',
                    bottom: 0,
                }}>Rio de Janeiro</p>
            </div>
        </>
    )
}

export default Card