import React from 'react'
import AboutSection from '../components/AboutSection'
import Services from "../components/Services"

import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

import ScrollTop from '../components/ScrollTop'

const AboutUs = () => {
    return (
        //ao adicionar .motion 'dentro' da tag a página já esta preparada para ser animada
        <motion.div
            initial = 'hidden'
            animate = 'show'
            exit = 'exit'
            variants = { pageAnimation }
            >
            < AboutSection />
            < Services /> 
            <ScrollTop />           
        </motion.div>

    )
}

export default AboutUs
