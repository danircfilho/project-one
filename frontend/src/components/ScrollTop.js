import { useEffect } from 'react'; /* Usar o useEffect do react */
import { useLocation } from 'react-router-dom'; /* Toda vez que mudar o pathname (nome após a barra) */

const ScrollTop = () => {
    const { pathname } = useLocation();

    useEffect (() => {
        /* executa o metodo window.scroll da função toda vez que a variável pathname mudar (a janela sempre irá para o inicio da tela) */
        window.scroll({
            top: 0,
            left: 0
        })
    }, [pathname])
    return null
}

export default ScrollTop

