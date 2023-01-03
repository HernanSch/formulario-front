import React, {useEffect, useState } from "react"
import axios from "axios";


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
                <div>
                    <h4>Nombre</h4>
                    <p>{candidatos.name}</p>
                    <h4>Apellidos</h4>
                    <p>{candidatos.apellidos}</p>
                    <h4>Correo electronico</h4>
                    <p>{candidatos.mail}</p>
                    <h4>Telefono</h4>
                    <p>{candidatos.telefono}</p>
                    <h4>Curriculum Vitae</h4>
                    <p>{candidatos.cv}</p>
                </div>
            </div>
            )
        })}
    </div>
  )
}

export default Candidatos