import React from 'react'
import { nanoid } from 'nanoid';
import Card from './Card';

export default function CardsList(props) {
    const { cards } = props;

    return (
        <div className='cards-list'>
            {cards.map((card) =>
                <Card {...card} key={nanoid()}>
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
                </Card>
            )}
        </div>
    )
}