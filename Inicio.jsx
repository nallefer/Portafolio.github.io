import styles from '../Inicio/Inicio.module.css'
import Animacion from '../Animacion/Animacion';
const Inicio = () => {
    return (
        <section className={styles.Inicio}>
            <article className={styles.full}>
                <h1>Full Stack Web Developer</h1>
                <p>Programador con enfoque en el desarrollo de aplicaciones web, tengo habilidades tanto en el Front-end como en el el Back-end. sin embargo mi especialidad y enfoque principal está en el Front-end.</p>
                <div className={styles.adornos}>
                <div></div>
                <div></div>
                <div></div>
                </div> 
            </article>

            <div className={styles.botones}>

                <h2>Ingresa Tu Nombre</h2>
                <div>
                   <a href="#">GMAIL</a> 
                   <a href="#">CV</a> 
                </div>

            </div>

            <Animacion/>
        </section>
    )
}

export default Inicio;