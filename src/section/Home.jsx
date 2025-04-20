import Button  from  "../components/Button";
const Home = () => {
  return (
    <section id="home" className='relative flex flex-1 justify-center items-center
    xl: min-h-screen 
    max-xl:py-40 bg-primary bg-home bg-cover bg-center bg-blend-darken'>
    <div className="relative
    flex flex-col justify-center items-center 
    w-full max-xl:padding-x pt-28 text-white">
      <h2 className="font-sans text-4xl xl:w-[50%] outline-black outline-2">Perfect</h2>
      <h1 className="font-sans
      text-16xl max-sm:text-[72px] 
      max-sm:leading-[82px] font-extrabold mb-10 outline-black outline-2">
        <span className="text-red-800 border-black border-spacing-6 outline-black outline-2">Pizza</span> To Go
      </h1>
      <p className="font-sans text-4xl mb-10 outline-black outline-2">Take Away & Delivery</p>
      <div className="relative flex flex-1 justify-between gap-10 text-2xl">
        <Button className="mt-10 outline-black outline-2" text="Order Online" borderColour="border-black"/>
        <a href="/reservation">
          <Button className="mt-10 outline-black outline-2" text="Reserve a Place" borderColour="border-black"/>
        </a>
      </div>
    </div>
    </section>
  )
}

export default Home
