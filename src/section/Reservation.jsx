import ButtonCard from "../components/ButtonCard"

const Reservation = () => {
  return (
    <section  id='reservation' className="bg-[#06070b] p-20 xl: min-h-screen 
    max-xl:py-10">
        <div className="text-4xl text-center font-palanquin text-red-800 font-bold ">
            ORDER NOW
        </div>
        <div className="ml-48 mt-10 rounded-full">
            <ul className="grid grid-cols-3 justify-center align-middle items-center col-auto w-[90%]  ">
                <ButtonCard imgURL="./src/assets/images/delivery-icon.png" text="DELIVERY"/>
                <ButtonCard imgURL="./src/assets/images/take-away-icon.png" text="TAKE AWAY"/>
                <ButtonCard imgURL="./src/assets/images/reservation-icon.png" text="RESERVATION"/>
            </ul>
        </div>
    </section>
  )
}

export default Reservation
