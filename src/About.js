import { useNavigate } from "react-router-dom"
import Button from "react-bootstrap/Button"
import styles from './About.module.css'

function About() {
    let navigate = useNavigate()

    return (
        <>
        <div className={styles.heading}>
        <img className= "about-container" src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c29jY2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" width="500px"/>
        <h1 variant="success" className={styles.header}><span>Welcome to your one stop shop for the latest soccer gear!</span></h1>
        <p>Doggo ipsum doggo extremely cuuuuuute what a nice floof blep, woofer yapper. Most angery pupper I have ever seen mlem many pats most angery pupper I have ever seen heckin noodle horse, lotsa pats blop stop it fren wow very biscit. Most angery pupper I have ever seen bork aqua doggo heckin pats very jealous pupper, very hand that feed shibe fluffer big ol. shoob clouds. Boofers super chub puggo yapper long woofer, boofers adorable doggo. Dat tungg tho puggo smol puggo aqua doggo long doggo such treat smol, puggo big ol vvv thicc heckin good boys and girls. Shooberino puggo shoober doggorino woofer aqua doggo, big ol pupper the neighborhood pupper ruff.
        </p>
    </div>
        <p><Button variant="link" onClick={() => navigate(-1)}>Go Back</Button></p>

        </>
    )
}

export default About

