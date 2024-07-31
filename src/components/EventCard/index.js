import React from 'react';
import * as C from './styles';

const EventCard = ({ day, month, src, title, label }) => {
  return (
        <C.Container>
            <C.DateContainer>
                <label className='day'>{day}</label>
                <label className='month'>{month}</label>
            </C.DateContainer>

            <img src={src} alt='' />

            <h4>{title}</h4>

            <label className='description'>{label}</label>
        </C.Container>
  )
}

export default EventCard