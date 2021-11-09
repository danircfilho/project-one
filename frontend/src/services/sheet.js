/* Configurar o axios para não necessitar configurar toda vez que for efetuar uma chamada */
// Não será usado React
import axios from "axios";    

export const save = (data) => {
    const config = {
        method: 'post',
        url: 'https://sheet.best/api/sheets/c3826b0b-4c49-4951-96c4-d0141d37e869',
        headers: {
            "Content-Type": "application/JSON",
        },
        data
    };

    axios (config)
    .then(res => {
        console.log("Dados da Planilha", res)
        return true
    })
    .catch(err => {
        console.log(err)
        return false
    })
}


