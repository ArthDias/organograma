import './Form.css'
import TextInput from '../TextInput';
import DropdownList from '../DropdownList';
import Button from '../Button';
import { useState } from 'react';


const Form = (props) => {

    const [name, setName] = useState('')
    const [roll, setRoll] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onStudentAdded({
            name,
            roll,
            image,
            team
        })
        setName('')
        setRoll('')
        setImage('')
        setTeam('')
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do estudante</h2>
                <TextInput 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    value={name}
                    onChanged={value => setName(value)}
                 />
                <TextInput 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    value={roll}
                    onChanged={value => setRoll(value)}
                 />
                <TextInput 
                    required={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    onChanged={value => setImage(value)}
                 />
                <DropdownList
                    required={true}
                    label="Equipe"
                    itens={props.teamsNames}
                    value={team}
                    onChanged={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form