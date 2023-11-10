import React from 'react'

const ProfileCard = (props) => {

    let {titulo, arroba, img} = props;

  return (
    <div>
        <img src="" alt="" />
        <h3>Titulo {props.titulo}</h3>
        <p>{props.arroba}</p>
        </div>
  )
  
}


export default ProfileCard