import styles from '../Proyectos/Proyectos.module.css';
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'
import img4 from '../assets/img4.webp'
import github from '../assets/github.svg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'

const Proyectos = () => {

    const tarjetas = [
      {
        image:[img2],
        name:'Proyecto 1',
        descrip:'Portafolio creado por JAMY, para que tengas un sitio en donde mostrarle al mundo tus proyectos.',
        tecno:[html,css,js],
        url:'https://github.com/MINOTAURO18/Portafolio-Plantilla-React',
      },

      {
        image:[img3],
        name:'Proyecto 2',
        descrip:'Portafolio creado por JAMY, para que tengas un sitio en donde mostrarle al mundo tus proyectos.',
        tecno:[html,css,js],
        url:'https://github.com/MINOTAURO18/Portafolio-Plantilla-React',
      },

      {
        image:[img4],
        name:'Proyecto 3',
        descrip:'Portafolio creado por JAMY, para que tengas un sitio en donde mostrarle al mundo tus proyectos.',
        tecno:[html,css,js],
        url:'https://github.com/MINOTAURO18/Portafolio-Plantilla-React',
      },

      {
        image:[img2],
        name:'Proyecto 3',
        descrip:'Portafolio creado por JAMY, para que tengas un sitio en donde mostrarle al mundo tus proyectos.',
        tecno:[html,css,js],
        url:'https://github.com/MINOTAURO18/Portafolio-Plantilla-React',
      },

      {
        image:[img4],
        name:'Proyecto 3',
        descrip:'Portafolio creado por JAMY, para que tengas un sitio en donde mostrarle al mundo tus proyectos.',
        tecno:[html,css,js],
        url:'https://github.com/MINOTAURO18/Portafolio-Plantilla-React',
      },


      {
        image:[img3],
        name:'Proyecto 3',
        descrip:'Portafolio creado por JAMY, para que tengas un sitio en donde mostrarle al mundo tus proyectos.',
        tecno:[html,css,js],
        url:'https://github.com/MINOTAURO18/Portafolio-Plantilla-React',
      },
    ]

    return (
        <section className={styles.Proyectos}>
            <h2>Proyectos</h2>
            <div className={styles.cards}>

                {
                  tarjetas.map((card,index) => {
                    return(
                      <div key={index} className={styles.card}>
                        <div className={styles.img}>
                          <img width='100%' height='250px' src={card.image} alt="" />
                        </div>

                        <h3>{card.name}</h3>

                        <p>{card.descrip}</p>

                        <div className={styles.tecno}>
                          <img width='30px' src={card.tecno[0]} alt="" />
                          <img width='30px' src={card.tecno[1]} alt="" />
                          <img width='30px' src={card.tecno[2]} alt="" />
                        </div>

                        <div className={styles.github}>
                          <a href={card.url}>
                            <img width='30px' src={github} alt="" />
                          </a>
                        </div>
                      </div>
                    )
                  })
                }

            </div>
        </section>
    )
}

export default Proyectos;