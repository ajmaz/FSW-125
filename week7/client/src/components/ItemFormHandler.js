import { useState } from "react";

const ItemFormHandler = ({name, city, _id, btnText, submit}) => {
    const initialInputs = {name: name || '', city: city || ''}
    const [inputs, setInputs] = useState(initialInputs)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        submit(inputs, _id);
        setInputs(initialInputs)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            name='name'
            value={inputs.name}
            onChange={handleChange}
            placeholder='Team Name...'/>
            <input
            type='text'
            name="city"
            value={inputs.descr}
            onChange={handleChange}
            placeholder="City..."/>
            <button className="add-item">{btnText}</button>
        </form>
    )
}

export default ItemFormHandler;