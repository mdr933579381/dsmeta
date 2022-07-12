import logo from '../../asserts/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-containner">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="marcio_dr2m"> MarcioDR2m@gmail.com</a>
                </p>
            </div>
        </header>

    )
}

export default Header