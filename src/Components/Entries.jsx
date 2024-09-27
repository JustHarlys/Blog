import { Link } from "./Link";

function Entries() {
  return (
    <section className="entries-container">
      <div className="entry">

        <div className="container">

        <Link to="/Entry">
        <h1>Titulo de la entrada</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta nulla rhoncus malesuada sodales. Phasellus ornare dolor ante, eget dapibus ex efficitur ac. Praesent condimentum aliquam malesuada. Proin egestas posuere est eleifend porta. Sed at rutrum quam. Nulla vehicula, arcu nec maximus fringilla, purus libero tristique odio, eu pulvinar nulla velit sed metus. Suspendisse purus risus, tincidunt nec pharetra sodales, ullamcorper quis nisl. Maecenas nec pulvinar nisi, quis commodo quam.</p>
        </Link>

        </div>

        <div className="container">
        <Link to="/Entry">
        <h1>Titulo de la entrada</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta nulla rhoncus malesuada sodales. Phasellus ornare dolor ante, eget dapibus ex efficitur ac. Praesent condimentum aliquam malesuada. Proin egestas posuere est eleifend porta. Sed at rutrum quam. Nulla vehicula, arcu nec maximus fringilla, purus libero tristique odio, eu pulvinar nulla velit sed metus. Suspendisse purus risus, tincidunt nec pharetra sodales, ullamcorper quis nisl. Maecenas nec pulvinar nisi, quis commodo quam.</p>
        </Link>
        </div>
      
        <div className="container">
        <Link to="/Entry">
        <h1>Titulo de la entrada</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta nulla rhoncus malesuada sodales. Phasellus ornare dolor ante, eget dapibus ex efficitur ac. Praesent condimentum aliquam malesuada. Proin egestas posuere est eleifend porta. Sed at rutrum quam. Nulla vehicula, arcu nec maximus fringilla, purus libero tristique odio, eu pulvinar nulla velit sed metus. Suspendisse purus risus, tincidunt nec pharetra sodales, ullamcorper quis nisl. Maecenas nec pulvinar nisi, quis commodo quam.</p>
        </Link>
        </div>
      
        <p className="counter"> {'< 1/3 >'}</p>

      </div>
    </section >
  )
}

export default Entries;