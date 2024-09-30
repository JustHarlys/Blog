function Aside({category, title, entry}) {
  return (
    <aside className="latest-entries">
        <div className="aside-entry">

            <div className="container">
            <h1>{title}</h1>
            <h3>Category: {category}</h3>
            <p>{entry}</p>
        
            </div>

            {/* <div className="container">

            <h1>Titulo de la entrada</h1>
            
            <h3>Category</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta nulla rhoncus malesuada sodales. Phasellus ornare dolor ante, eget dapibus ex efficitur ac. Praesent condimentum aliquam malesuada. Proin egestas posuere est eleifend porta. Sed at rutrum quam. Nulla vehicula, arcu nec maximus fringilla, purus libero tristique odio, eu pulvinar nulla velit sed metus. Suspendisse purus risus, tincidunt nec pharetra sodales, ullamcorper quis nisl. Maecenas nec pulvinar nisi, quis commodo quam.</p>
            </div>
        
            <div className="container">

            <h1>Titulo de la entrada</h1>
            <h3>Category</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta nulla rhoncus malesuada sodales. Phasellus ornare dolor ante, eget dapibus ex efficitur ac. Praesent condimentum aliquam malesuada. Proin egestas posuere est eleifend porta. Sed at rutrum quam. Nulla vehicula, arcu nec maximus fringilla, purus libero tristique odio, eu pulvinar nulla velit sed metus. Suspendisse purus risus, tincidunt nec pharetra sodales, ullamcorper quis nisl. Maecenas nec pulvinar nisi, quis commodo quam.</p>
            </div>
  */}
        </div>
    </aside>
  )
}

export default Aside