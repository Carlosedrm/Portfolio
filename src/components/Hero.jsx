import { styles } from "../styles";
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion'
import { contacts } from "../constants";

const ContactsIcons= ({index, image, source_link}) => {
  return (
    <motion.div className="w-[40px] h-[40px]" variants={fadeIn("right", "spring", 1.5 + (0.5 * index), 0.75)}>
      <div onClick={() => window.open(source_link, "_blank")} className="cursor-pointer">
        <img src={image} className='w-[40px] h-[40px] hover:brightness-75'/>
      </div>
    </motion.div>
  )
}

const Hero = () => {
  return (
    <section className="relative w-full h-hero mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)} initial="hidden" animate="show">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Olá, sou <span className="text-[#915eff]">Carlos</span>
          </h1>
          <motion.p className={`${styles.heroSubText} mt-2 text-white-100`} variants={fadeIn("right", "spring", 1, 0.75)}>
            Estudante da ciência da computação.
            <br className="sm:block hidden" />Entusiasta de tecnologia.
          </motion.p>
          <div className="flex mt-2">
            {contacts.map((contacts, index) => (
              <ContactsIcons key={contacts.source_link} index={index} {...contacts}/>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero