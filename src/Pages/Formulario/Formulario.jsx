import { useForm } from "react-hook-form"

const Formulario = () => {

    const {register, handleSubmit } = useForm();

    const onSubmit = data =>{
        console.log(data.name)
    }
    

  return (
    <div>Formulario
        <form onSubmit = {handleSubmit(onSubmit)}>
            <div>
            <h4>Nombre</h4>
            <input type="text" {...register("name")} />
            </div>
            <h4>Apellidos</h4>
            <input type="text" {...register("apellidos")} />
            <h4>Telefono</h4>
            <input type="text" {...register("telefono")} />
            <h4>Correo Electronico</h4>
            <input type="text" {...register("mail")} />
            <h4>Curriculum Vitae</h4>
            <input type="text" {...register("cv")} />
            <div>
                <button>Enviar</button>
            </div>
        </form>
    </div>
  )
}

export default Formulario