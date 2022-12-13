import React from 'react'

export default function Card(props) {

    return (
        <div className="card" style={{ width: 18 + 'rem', marginTop: 20 + 'px' }}>
            {props.image && <img src={props.image} className="card-img-top" alt="card_image" />}
            <div className="card-body">
                {props.children}
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div >
    )
}