import { useState } from "react"

const InputCreate = ({urlApi, fetchData}) => {
    const [title, setTitle] = useState('')

    const handleChange = (e) => {
      setTitle(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!title.trim()) return
        try {
            const response = await fetch(`${urlApi}/create`, {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json', 
                },
                body: JSON.stringify({title}), 
              })
                const data = await response.json()
                setTitle('')
                fetchData()
              
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
        </form>
    )
}

export default InputCreate