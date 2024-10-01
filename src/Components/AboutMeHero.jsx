import Harlys from '../assets/me.jfif'
import { Link } from './Link'

function AboutMeHero() {
  return (
    <section className="about-me-container">

      <img src={Harlys} alt="Imagen de Harlys" className="harlys-img"/>

      <div className='hero-content-about-me'>
          <h1>Bienvenidos a mi Blog!</h1>
          <p>Para ver mis trabajos puedes acceder a mi Portafolio</p>
          <div className="buttons">
          <a className='cta-button' href='https://harlys-portfolio.vercel.app/'>Ir al portafolio</a>
          </div>
        </div>

        <table>
          <tr>
            <th>Date: </th>
            <th>Contact: </th>
            <th>Country: </th>
          </tr>
          <td>14-09-2024</td>
          <td>Lorem Ipsum</td>
          <td>Dominican Republic</td>
        </table>

    </section>
  )
}

export default AboutMeHero