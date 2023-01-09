import React, {useEffect, useState } from "react"
import axios from "axios";
import "./Candidatos.scss"

const Candidatos = () => {

    const [ allCandidatos, setCandidatos] = useState([]);
    
    
    
    useEffect (() => {

        const getData = async () => {
            const { data } = await axios.get("http://localhost:8000/candidatos/get");
            console.log(data);

            setCandidatos(data);

        };
         getData();
    }, []);


  return (
    <div>
        <h1>Candidatos</h1>
        {allCandidatos && allCandidatos.map((candidatos) => {
            return (
            <div>
                <div className="box">
                    <ul>
                        <li><h4>Nombre</h4></li>
                        <li><p>{candidatos.name}</p></li>
                        <li><h4>Apellidos</h4></li>
                        <li><p>{candidatos.apellidos}</p></li>
                        <li><h4>Correo electronico</h4></li>
                        <li><p>{candidatos.mail}</p></li>
                        <li><h4>Telefono</h4></li>
                        <li><p>{candidatos.telefono}</p></li>
                        <li><h4>Curriculum Vitae</h4></li>
                        <li><p>{candidatos.cv}</p></li>
                    </ul>
                </div>
            </div>
            )
        })}
    </div>
  )
}

export default Candidatos