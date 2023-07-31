import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import {fadeIn, textVariant} from '../utils/motion'

import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Sobre mim</h2>
      </motion.div>

      <motion.p variants={("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Olá! Sou um estudante na PUCPR com interesse em explorar novas linguagens de programação e tecnologias. 
        Tenho conhecimento em várias linguagens e processamento digital de imagens. 
        Sou proativo, trabalhando em equipe para cumprir objetivos dentro dos prazos.
        Nos meus momentos de lazer, gosto de música, desenho, jogos e trilhas. 
        Minha jornada na programação começou com o interesse por jogos e fiz um curso para entender seu desenvolvimento e acabei me interessando nesse mundo da programação! 
      </motion.p>

      
    </>
  )
}

export default SectionWrapper(About, "sobre");