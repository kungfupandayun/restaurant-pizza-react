
const ButtonCard = ({text,imgURL}) => {
  return (
    <div className="relative flex-col items-center bg-white rounded-full h-64 w-64 ">
      <button className="mt-12 ml-14">
        <img src={imgURL} alt="text" width={180} height={180} className=' items-center'/>
        <h2 className="text-black text-center font-palanquin ">{text}</h2>
      </button>
    </div>
    
  )
}

export default ButtonCard
