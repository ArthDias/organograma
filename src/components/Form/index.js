import './Form.css'
import TextInput from '../TextInput';
import DropdownList from '../DropdownList';
import Button from '../Button';


const Form = () => {

    const teams = [
        'Líderança',
        'Conteúdo',
        'Apoio Técnico',
        'Logística',
        'Comunicação'
    ]

    const onSave = (event) => {
        event.preventDefault()
        console.log('Form submitted')
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do estudante</h2>
                <TextInput required={true} label="Nome" placeholder="Digite seu nome" />
                <TextInput required={true} label="Cargo" placeholder="Digite seu cargo" />
                <TextInput required={true} label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropdownList required={true} label="Equipe" itens={teams} />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form