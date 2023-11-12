import {socialMedia,footerLinks} from "../constants"
const Footer = () => {
  return (
    <footer id="contact-us" className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <p className="mt-6 text-base leading-7 font-montserrat  sm:max-w-sm">
          Fresh out of oven pizzas is just a few clicks away. 
          <br/>Operating hours:
          <br/>10:00 a.m - 10:00p.m.
          <br/>Daily except Tuesday
          </p>
          <div className="flex items-center gap-5 mt-8 pb-10">
            {socialMedia.map((icon)=>(
              <a href={icon.link} key={icon} className="flex justify-center items-center w-12 h-12 rounded-full border-black ring-2 ring-slate-400">
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-end lg:gap-10 gap-20 wrap">
          {footerLinks.map((section)=>(
            <div key={section.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mt-6">{section.title}</h4>
              <ul >
                {section.links.map((link)=>(
                  <li className="mt-3 text-base font-montserrat leading-normal hover:text-slate-gray cursor-pointer" key={link}>
                    <a href={link.link} className="">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
