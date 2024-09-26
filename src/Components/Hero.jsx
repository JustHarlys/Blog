import HeroImg from '../assets/coding1.png'
import { Link } from './Link'

function Hero() {
  return (
    <div className='image-container'>
      <div className='overlay'>
        <div className='hero-content'>
          <h1>Bienvenidos a mi Blog!</h1>
          <p>Para conocerme más puedes entrar a los siguientes enlaces</p>
          <div className="buttons">
          <Link to="/about"><a className='cta-button'>Sobre mi</a></Link>
          <a className='cta-button' href='https://harlys-portfolio.vercel.app/'>Ir al portafolio</a>
          </div>
        </div>
      </div>
      <img src={HeroImg} alt="Imagen del Hero" className='hero-img'/>
    </div>
  )
}

export default Hero