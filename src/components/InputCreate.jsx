import { useState } from "react"
import axios from 'axios'

const InputCreate = ({urlApi}) => {
    const [title, setTitle] = useState('')
    const [ createdTask, setCreatedtask ] = useState('')

    const handleChange = (e) => {
      setTitle(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!title.trim()) return
        try {
          // CON FETCH
            // const response = await fetch(`${urlApi}/create`, {
            //     method: 'POST', 
            //     headers: {
            //       'Content-Type': 'application/json', 
            //     },
            //     body: JSON.stringify({title}), 
            //   })
            
              // if (response.ok ) {
              //   const data = await response.json()
              //   setCreatedtask(`'sucess', ${data.title}`)
              //   setTitle('')
              // } else {
              //   throw new Error ('No se ha podido crear la tarea')
              // }

            //CON AXIOS
              const response = await axios.post(`${urlApi}/create`,{title: title})
              setCreatedtask(`'sucess', ${response.data.title}`)
              setTitle('')

        } catch (error) {
            console.error('error en la solicitud',error)
        }
        

    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={title}
            onChange={handleChange}
            placeholder="Agregar nueva tarea" required/>
            <button type="submit">Agregar</button>
            <p>{createdTask}</p>
        </form>
    )
}

export default InputCreate