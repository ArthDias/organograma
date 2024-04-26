import './TextInput.css'

const TextInput = (props) => {
    
    return (
        <div className="text-input">
            <label>{props.label}</label>
            <input value={props.value} onChange={event => props.onChanged(event.target.value)} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextInput