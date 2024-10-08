function SocialMedia({app, link}) {
  return (
    <a href={link}><i className={`fa-brands ${app}`}></i></a>
  )
}

export default SocialMedia