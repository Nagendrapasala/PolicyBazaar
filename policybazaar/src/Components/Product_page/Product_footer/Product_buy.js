import React from 'react'

export const Product_buy = ({arr}) => {
  return (
    <div>
        <img src={arr.image} alt={arr.title}/>
        <h4>{arr.title}</h4>
        <p>{arr.body}</p>
    </div>
  )
}
