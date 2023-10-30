import styles from '../SobreMi/SobreMi.module.css'
import Animacion from '../Animacion/Animacion.jsx' 
import perfil from '../assets/perfil.svg'

const SobreMi = () => {
    return (
        <section className={styles.SobreMi}>
            <Animacion/>
           <article className={styles.intro}>
                <div className={styles.img}>
                    <img src={perfil} alt="" />
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quis vitae eaque enim deserunt soluta animi culpa officiis veniam qui. Possimus et voluptatibus soluta quia rerum cumque ea numquam odio</p>
                <div className={styles.adornos}>
                <div></div>
                <div></div>
                <div></div>
                </div>
            </article>

            <div className={styles.edu}>

                <h2>Educación</h2>

                <div>
                    <h3>Educación 1</h3>
                    <h4>React, Node.js, Javascript</h4>
                </div>

                <div>
                <h3>Educación 2</h3>
                    <h4>React, Node.js, Javascript</h4>
                </div>

                <div>
                <h3>Educación 3</h3>
                    <h4>React, Node.js, Javascript</h4>
                </div>

                <div>
                <h3>Educación 4</h3>
                    <h4>React, Node.js, Javascript</h4>
                </div>

            </div>
        </section>
    )
}

export default SobreMi;