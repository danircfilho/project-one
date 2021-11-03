/* Configurar o axios para não necessitar configurar toda vez que for efetuar uma chamada */
// Não será usado React

import axios from "axios";

const api = axios.create({
    baseURL: '/api'
})

export default api