/* Configurar o axios para não necessitar configurar toda vez que for efetuar uma chamada */
// Não será usado React

import axios from "axios";

const api = axios.create({
    baseURL: 'https://sheet.best/api/sheets/c3826b0b-4c49-4951-96c4-d0141d37e869'
})

export default api