import React, { useState } from 'react'
import Axios from 'axios'
import "./Formulario.scss"


function Formulario() {
  const url = "http://localhost:8000/candidatos/post"
  const [data, setData] = useState({
    nombre:"",
    apellidos:"",
    telefono:"",
    mail:"",
    cv:"",
  })

  function submit(e){
    e.preventDefault();
    Axios.post(url, {
      nombre: data.nombre,
      apellidos: data.apellidos,
      telefono: data.telefono,
      mail: data.mail,
      cv: data.cv,
    })
  }
  
  function handle(e){
    const newData = { ...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)

  }
  return (
    <div>
        <h1>Añadir Candidatos</h1>
        <form onSubmit={(e)=> submit(e)}>
            <div className='bl1'>
              <p>Nombre candidatos</p>
              <input onChange={(e)=>handle(e)} id="nombre" value={data.nombre} type="text"></input>
              <p>Apellidos Candidato</p>
              <input onChange={(e)=>handle(e)} id="apellidos" value={data.apellidos} type="text"></input>
            </div>
            <div className='bl2'>
              <p>Telefono Candidato</p>
              <input onChange={(e)=>handle(e)} id="telefono" value={data.telefono} type="number"></input>
              <p>Correo Electronico Candidato</p>
              <input onChange={(e)=>handle(e)} id="mail" value={data.mail} type="text"></input>
            </div>
            <p>Curriculum Vitae Candidato</p>
            <input onChange={(e)=>handle(e)} id="cv" value={data.cv} type="file"></input>
            <button>Enviar</button>
            
        </form>
    </div>
  )
}

export default Formulario