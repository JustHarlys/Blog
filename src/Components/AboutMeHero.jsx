import Harlys from '../assets/me.jfif'

function AboutMeHero() {
  return (
    <div className='about-me-whole-container'>
    <section className="about-me-container">

      <img src={Harlys} alt="Imagen de Harlys" className="harlys-img"/>

      <div className='hero-content-about-me'>
          <h1>Bienvenidos a mi Blog!</h1>
          <p>Para ver mis trabajos puedes acceder a mi Portafolio</p>
          <div className="buttons">
          <a className='cta-button' href='https://harlys-portfolio.vercel.app/'>Ir al portafolio</a>
          </div>
        </div>


    </section>

    <h1 className='about-me-title'>Sobre mi</h1>

    <p className='about-me-p'>
    Mi nombre es Harlys De Jesús Almánzar Polanco,
      nací en la Republica Dominicana,
      me dedico a la creación y desarrollo de páginas web desde 2023.
      Estudio la carrera de Ingeniería de Software desde el 2020.
    </p>

<table>
<tr>
  <th className='table-head'>Nombre: </th>
  <th className='table-head'>Fecha de Nacimiento: </th>
  <th className='table-head'>Correo: </th>
  <th className='table-head'>Idiomas: </th>
</tr>
<tr>
  <td>Harlys Almanzar</td>
  <td>14/09/2024</td>
  <td>harlysmc@gmail.com</td>
  <td>Español, Ingles y Ruso</td>
</tr>
</table>
    </div>
  )
}

export default AboutMeHero