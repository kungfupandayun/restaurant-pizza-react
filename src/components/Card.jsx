
const Card = ({src,text}) => {
  return (
    <>
      <li className='w-[70%] py-6 justify-evenly items-center flex-column'>
        <img
            className='bg-white '
            alt='Product Image'
            src={src}
            width='300px'
            height='300px'
        />
       <h3 className="font-mono text-white-400 text-center">{text}</h3>
      </li>
    </>
  )
}

export default Card
