import React from 'react'

export default function Product(props){
  return(
    <div>
      <img src={props.image} height="100" width="100" alt='' />
      <div>
        <h5>{props.name}</h5>
        <p>{props.price}</p>
        <button onClick={() => props.deleteThingFn(props.id)}>Delete</button>
      </div>
      
    </div>
  )
}