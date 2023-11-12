import {Pizza_maker} from '../assets/images'

const AboutUs = () => {
  return (
    <section id="about-us"className="w-full flex xl:flex-row flex-col justify-center bg-[#06070b] p-20 ">
        <img src={Pizza_maker} alt="Pizza master tossing a pizza" className="object-contain relative" />
        <div className="relative xl:w-[35%] flex flex-col justify-center items-center w-full text-white-400 pl-8 ">     
            <h1 className='text-4xl font-palanquin font-bold text-center text-red-800'>23 YEARS OF EXCELLENCY</h1>
            <br />
            <div className="text-justify font-monserrat">
                <p>
                    Devon couldn't figure out the color of her eyes. He initially would have guessed that they were green, but the more he looked at them he almost wanted to say they were a golden yellow. Then there were the flashes of red and orange that seemed to be streaked throughout them. It was almost as if her eyes were made of opal with the sun constantly glinting off of them and bringing out more color. They were definitely the most unusual pair of eyes he'd ever seen.
                </p>
                <br />
                <p>
                    Devon couldn't figure out the color of her eyes. He initially would have guessed that they were green, but the more he looked at them he almost wanted to say they were a golden yellow. Then there were the flashes of red and orange that seemed to be streaked throughout them. It was almost as if her eyes were made of opal with the sun constantly glinting off of them and bringing out more color. They were definitely the most unusual pair of eyes he'd ever seen.
                </p>
            </div>
        </div> 
    </section>
  )
}

export default AboutUs
