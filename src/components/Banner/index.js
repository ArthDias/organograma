import  './Banner.css'

function Banner(props) {
    return (
        <header className="banner" style={{backgroundColor: props.primaryColor}}>
            <img src="/img/banner.png" alt="O Banner principal do Organograma" />
        </header>
    )
}

export default Banner