import Student from '../Student'
import './Team.css'

const Team = (props) => {
    return (
    ( props.students.length > 0) && <section className="team" style={{backgroundColor: props.secundaryColor}}>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className="students-cards">
                {props.students.map( student => <Student bgColor={props.primaryColor} key={student.name} name={student.name} roll={student.roll} image={student.image} /> )}
            </div>
       </section>
    )
}

export default Team