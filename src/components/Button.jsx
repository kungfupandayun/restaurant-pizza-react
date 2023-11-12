

const Button = ({text,borderColour,imgURL}) => {
  return (
    <button className={`${borderColour?`${borderColour}`:'border-black'} py-1 text-white  font-palanquin border-2 hover:border-black hover:text-slate-gray focus:outline-no px-2`}>
        {imgURL && <img src={imgURL} alt="Login" width={50} height={50} className='hover:transition inline-block px-2 bg-black'/>}
        {text}
    </button>
  )
}

export default Button
