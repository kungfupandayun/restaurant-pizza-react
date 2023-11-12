import Button  from  "../components/Button";
const Home = () => {
  return (
    <section id="home" className='relative flex flex-1 justify-center items-center
    xl: min-h-screen 
    max-xl:py-40 bg-primary bg-home bg-cover bg-center bg-blend-darken'>
    <div className="relative
    flex flex-col justify-center items-center 
    w-full max-xl:padding-x pt-28 text-white">
      <h2 className=" font-sans text-4xl xl:w-[50%] ">Perfect</h2>
      <h1 className=" font-sans
      text-16xl max-sm:text-[72px] 
      max-sm:leading-[82px] font-extrabold mb-10">
        <span className="text-red-800 border-white border-spacing-6">Pizza</span> To Go
      </h1>
      <p className="font-sans text-4xl mb-10 ">Take Away & Delivery</p>
      <div className="relative flex flex-1 justify-between gap-10 text-2xl">
        <Button className="mt-10" text="Order Online" borderColour="border-white"/>
        <Button className="mt-10" text="Reserve a Place" borderColour="border-white"/>
      </div>
    </div>
    </section>
  )
}

export default Home
