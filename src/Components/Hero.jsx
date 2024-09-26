import HeroImg from '../assets/coding1.png'

function Hero() {
  return (
    <div className='image-container'>
      <div className='overlay'>
        <div className='hero-content'>
          <h1>Bienvenidos a mi Blog!</h1>
          <p>Para conocerme más puedes entrar a los siguientes enlace</p>
          <button className='cta-button'>Get Started</button>
        </div>
      </div>
      <img src={HeroImg} alt="Imagen del Hero" className='hero-img'/>
    </div>
  )
}

export default Hero