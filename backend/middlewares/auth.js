// Webtoken - Secret
const jwt = require("jsonwebtoken")
const secret_base64 = process.env.JWT_SECRET
/* decodificar o base64 para o secret funcionar, visto que no arquivo .env não pode haver quebra de linhas
como no formato Plain text (Heroku, AWS normalmente não aceita) */
const secret = Buffer.from(secret_base64, 'base64') 
const project_id = process.env.USERFRONT_PROJECT_ID

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        return res.sendStatus(401)
    }

    const token = authHeader.split(' ')[1] //verifica a existencia, ignora o Baren [0] e mostra a posição [1]
    
    //caso ocorram erros
    try{
        const user = jwt.verify(token, secret)
        //Caso o usuário não tenha o role admin (configurações do UserFront sobre previlégios do usuário)
        if (user.authorization[project_id].roles.includes('admin')) {
            next()
        }
        else {
            res.sendStatus(401) //Inauthorized
        }
    }
    catch {
        res.status(401).json({
            error: new Error('Invalid request')
        })
    }
    
}

