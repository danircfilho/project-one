import React from "react";
import { About, Description, Image } from "../styles";

import { useHistory } from "react-router-dom";

import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation, scrollReveal } from "../animation";
import { useScroll } from '../hooks/useScroll';

//O componente AboutSection recebe as caracteristicas do About que passou a ser 'motion' (ver em styles.js a 	mudança no About)
//Desta forma consguimos aplicar a animação (scrollReveal - animation e o hook useScroll)
const AboutSection = () => {
	const [element, controls] = useScroll()
	const hystory = useHistory()

	//usando o hystory para o botão mudar para a página Contact Me
	const redirect = () => {
		hystory.push('/contact')
	}

	return (
		//Não esquecer de colocar dentro da tag de abertura <About....>
		<About
			variants={scrollReveal}
            animate={controls}
            initial='hidden'
            ref={element}
		>
			<Description>
				<motion.h2 variants={ titleAnimation }>Daniel Rodrigues</motion.h2>
				<motion.h2 variants={ titleAnimation }>Developer FullSatck</motion.h2>
				<motion.p variants={ fade }>
					The standard chunk of Lorem Ipsum used since the 1500s is reproduced
					below for those interested. Sections 1.10.32 and 1.10.33 from "de
					Finibus Bonorum et Malorum" by Cicero are also reproduced in their
					exact original form, accompanied by English versions from the 1914
					translation by H. Rackham.
				</motion.p>
				<button onClick={redirect}>Click Aqui</button>
			</Description>
			<Image>
				<motion.div variants={ photoAnimation }>
				<img
					src="https://s2.glbimg.com/QX11K9BpnAIsM8CyqA4ddCo2QIA=/512x320/smart/e.glbimg.com/og/ed/f/original/2016/08/11/chris.jpg"
					alt=""
				/>
				</motion.div>
			</Image>
		</About>
	);
};

export default AboutSection;
