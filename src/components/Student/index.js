import './Student.css'

const Student = ({ name, roll, image, bgColor}) => {
    return (
        <div className="student">
            <div className="header" style={{backgroundColor: bgColor}}>
                <img src={image} alt={name}/>
            </div>
            <div className="description">
                <h4>{name}</h4>
                <h5>{roll}</h5>
            </div>
        </div>
    )
}

export default Student