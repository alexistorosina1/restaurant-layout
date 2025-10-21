import logo from "../images/sabores-logo.jpg"

export default function About(){
    return(
        <section>
            <div className="about-container">
                <article className="about-us-text"> 
                    <h2>Learn about us</h2>
                    <p>
                    At Delicias Colombianas, we bring the heart of Colombia to the streets of New York. Our bakery is a celebration of tradition, flavor, and community — where every pastry, bread, and dish is made with the same love and warmth found in Colombian kitchens. From the aroma of fresh pandebonos to the sweet taste of buñuelos and arepas de choclo, each bite is a connection to our roots. Come savor authentic Colombian flavors and experience a little piece of home, right here in the city that never sleeps. 🇨🇴🥐
                    </p>
                </article>
                <figure>
                    <img src={logo} alt="restaurant logo"/>
                    <figcaption>Our team</figcaption>
                </figure>
            </div>
        </section>
    )
}