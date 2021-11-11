/* não irá usar React, somente exportar a animação */

//Framer-Motion
export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            when: 'beforeChildren',
            /* staggerChildren: 0.25 */
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5
        }
    }
}

export const titleAnimation = {
    hidden: {
        y: 300
    },
    show: {
        y: 0,
        transition: {
            duration: 0.75,
            ease:'easeOut'
        }
    }
}

export const fade = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: 2,
            ease:'easeOut'
        }
    }
}

export const photoAnimation = {
    hidden: {
        scale: 1.5,
        opacity: 0
    },
    show: {
        scale: 1, 
        opacity: 1,
        transition: {
            duration: 0.75,
            ease:'easeOut'
        }
    }
}

export const scrollReveal = {
    hidden: {
        scale: 1.2, 
        opacity: 0,
        transition: {
            duration: 0.5
        }        
    },
    show: {
        scale: 1, 
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
}


