import {Pizza_maker} from '../assets/images'

const AboutUs = () => {
return (
    <section id="about-us" className="w-full flex xl:flex-row flex-col justify-center bg-gray-900 p-10">
        <img src={Pizza_maker} alt="Pizza master tossing a pizza" className="z-50 object-contain relative w-full xl:w-1/3" />
        <div className="relative xl:w-[40%] flex flex-col justify-center items-center w-full text-gray-300 pl-8">
            <h1 className="text-4xl font-palanquin font-extrabold text-center text-red-700 drop-shadow-lg shadow-black">
                Authentic Italian Pizza
            </h1>
            <br />
            <div className="text-justify font-montserrat text-lg leading-relaxed">
                <p>
                    For over a century, our family-owned pizzeria has been dedicated to crafting the finest authentic Italian pizzas. Using recipes passed down through generations, we combine traditional techniques with the freshest ingredients to deliver a taste of Italy in every bite.
                </p>
                <br />
                <p>
                    From our hand-stretched dough to our signature sauces and premium toppings, every pizza is a testament to our passion for quality and authenticity. Join us in celebrating 100 years of culinary excellence and experience the rich heritage of Italian pizza-making.
                </p>
                <br />
                <p>
                    Whether you're dining in, taking out, or enjoying delivery, we strive to provide an unforgettable experience for every customer. Our commitment to tradition and innovation ensures that every pizza we serve is a masterpiece, crafted with love and care.
                </p>
            </div>
        </div>
    </section>
)
}

export default AboutUs
