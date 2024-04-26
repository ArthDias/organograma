import './Footer.css'

const Footer = (props) => {
    return (
        <footer className="footer" style={{backgroundColor: props.primaryColor}}>
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/img/fb.png" alt="Logo do Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/img/tw.png" width="32px" alt="Logo do Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/img/ig.png" alt="Logo do Instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/img/icon.png" alt="Logo do Think" width="200px" />
            </section>
            <section>
                <p>
                    Desenvolvido por Arthur.
                </p>
            </section>
        </footer>
    )
}

export default Footer