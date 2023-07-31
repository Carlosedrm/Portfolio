import React, { useEffect, useState } from 'react'
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const ProjectsCard = ({index, name, description, tags, image, source_code_link }) => {
  return(
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="flex justify-center items-center pl-5 pr-5" style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Tilt options={{max: 45, scale: 1, speed: 450}} className="bg-tertiary p-5 rounded-2xl sm:w-[350px] w-full min-h-[230px] mt-5">
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain"/>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
        
      </Tilt>
    </motion.div>
  )
}

const Assignments = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 650px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Projetos</p>
          <h2 className={styles.sectionHeadText}>Meus Projetos</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] overflow-visible">
        Além dos meus projetos individuais, também tive a oportunidade de participar de projetos em maior escala, nos quais trabalhei em equipe com um grupo de pessoas. 
        Durante essas experiências, pude aprimorar minhas habilidades de colaboração e comunicação, aprendendo a trabalhar de forma eficiente em conjunto para alcançar metas comuns.
        </motion.p>
      </div>
      
      
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={isMobile? 195 : 170}
        totalSlides={projects.length}
        visibleSlides={isMobile ? 1 : 3}
        dragEnabled={isMobile ? true : false}
        isPlaying={isMobile ? true : false}
        infinite={true}
        className='mt-5 w-full overflow-hidden'
      >
        <Slider>
          {projects.map((project, index) => (
            <Slide index={index} key={`slide-${index}`}>
              <ProjectsCard index={index} {...project} />
            </Slide>
          ))}
        </Slider>
        
        {isMobile ? null : (
          <div className="flex justify-center items-center">
            <ButtonBack className='mt-20 carousel-arrow absolute top-1/2 left-0 transform -translate-y-1/2 text-[74px] hover:text-gray-500'>&#8249;</ButtonBack>
            <ButtonNext className='mt-20 carousel-arrow absolute top-1/2 right-0 transform -translate-y-1/2 text-[74px] hover:text-gray-500'>&#8250;</ButtonNext>
          </div>
        )}

      </CarouselProvider>
    </>
  )
}

export default SectionWrapper(Assignments, "")