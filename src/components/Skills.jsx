import React from 'react';
import { motion } from 'framer-motion';
import { technologies } from "../constants";

import { styles } from '../styles';
import { BallCanvas } from "./canvas";
import {textVariant} from '../utils/motion'

import { SectionWrapper } from '../hoc';
  

const Skills = () => {
    return (
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Habilidades</p>
          <h2 className={styles.sectionHeadText}>Minhas Habilidades</h2>
        </motion.div>
  
        <div className='flex flex-row flex-wrap justify-center gap-10 mt-5'>
          {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
                <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </>
    );
};
  
export default SectionWrapper(Skills, "");