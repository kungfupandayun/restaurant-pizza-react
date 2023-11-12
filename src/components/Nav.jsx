
import {hamburger} from  '../assets/icons'
import {navLinks} from "./../constants/index";
import Button from "./Button";
import {login} from '../assets/icons';

const Nav = () => {
  return (
    <header className=" padding-z py-4 absolute z-10 w-full bg-black">
      <nav className="flex max-container px-4 justify-evenly items-center gap-8">
        <ul className=" flex-1 flex justify-evenly items-center gap-8 max-lg:hidden ">
            {navLinks.map((item) =>
                (<li key={item.label}>
                    <a href={item.href} className="font-palanquin leading-normal text-white hover:text-slate-gray ">
                        {item.label}
                    </a>
                </li>))}
        </ul>
        <div className='hidden max-lg:block'>
            <img src={hamburger} alt="Hamburger" width={25} height={25}/>
        </div>
        <div className="">
          
        </div>
        <Button text="Order Online" borderColour="border-white"/>
        <Button text="Log In" imgURL={login}/>
        
      </nav>
    </header>
  )
}

export default Nav;
