/* Configurar o axios para não necessitar configurar toda vez que for efetuar uma chamada */
// Não será usado React
import axios from "axios";

import Userfront from "@userfront/react";

Userfront.init("xbrzvzbw");

const accessToken = Userfront.accessToken() 

const api = axios.create({
    baseURL: '/api'
})

export default api

export const deleteItem = (slug) => {
    axios
    .delete(`/api/portfolio/${slug}`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(res=> {
        console.log("Resultado", res)
        return res;
    })
    .catch(e=> {
        console.log("Erro", e)
        return e;
    })
}

export const editItem = (slug, {title, description, longDescription, image, technologies}) => {
    axios
    .patch(`/api/portfolio/${slug}`, {
        title, description, longDescription, image, technologies
    }, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(res=> {
        console.log("Alterado com sucesso!", res)
        return res;
    })
    .catch(e=> {
        console.log("Erro", e)
        return e;
    })
}

//Adicionar itens do front ao back
export const addItem = ({title, description, longDescription, image, technologies}) => {
    axios
    .post(`/api/portfolio`, {
        title, description, longDescription, image, technologies
    }, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(res=> {
        console.log("Adicionado com sucesso!", res)
        return res;
    })
    .catch(e=> {
        console.log("Erro", e)
        return e;
    })
}
