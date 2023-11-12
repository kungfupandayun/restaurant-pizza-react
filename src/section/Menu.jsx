import {menu} from "../constants"

const Menu = () => {
  return (
    <section id='menu' className="bg-[#06070b] xl: min-h-screen 
    max-xl:py-40">
        <div className="text-4xl text-center font-palanquin text-white-400 font-bold pt-24 pb-6">
            MENU
        </div>
        <div className="flex justify-center bg-[#06070b] py-2 px-12 ">
          <button className="px-2">
            <img src='./src/assets/images/left-arrow.png' alt="leftarrow" className=" w-[100px] bg-white -rotate-[135deg] rounded-full border-black"/>
          </button>
          <img  src={menu[2].src} alt={menu[0].text} className=" h-[500px] rounded-lg z-20 shadow-md"/>
          <img  src={menu[1].src} alt={menu[0].text} className=" h-[500px] rounded-lg z-20 shadow-md"/>
          <button className="px-2">
            <img src='./src/assets/images/left-arrow.png' alt="rightarrow" className="w-[100px] bg-white rotate-[45deg] rounded-full border-black block m-auto"/>  
          </button>
        </div>
    </section>
  )
}

export default Menu
