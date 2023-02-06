import React from 'react'
import { useForm } from "react-hook-form"
const Search = ({onSubmit}) => {

    const {register, handleSubmit} = useForm()
    const submit = ({text}) =>{
        console.log(text);
        onSubmit(text);
    }

  return ( <form onSubmit={handleSubmit(submit)}>

    <input type="text" {...register("text")} />
    <button>Buscar</button>

    </form>
    )
}

export default Search