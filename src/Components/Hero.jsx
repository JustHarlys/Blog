import HeroImg from '../assets/coding1.png'

function Hero() {
  return (
    <div className='image-container'>
        <div className='overlay'></div>
        <img src={HeroImg} alt="Imagen del Hero" className='hero-img'/>
    </div>
  )
}

export default Hero