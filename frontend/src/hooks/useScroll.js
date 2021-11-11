import { useInView } from "react-intersection-observer"; // verifica se ocomponente está na tela
import { useAnimation } from "framer-motion";

export const useScroll = () => {
    const controls = useAnimation()
    const [element, view] = useInView({threshold: 0.3})

    if (view) {
        controls.start('show')
    } 
    else {
        controls.start('hidden')
    }
        
    return [element, controls]
}