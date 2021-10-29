const {response} = require('express');

const getUsuarios = (req,res = response)=>{
    //con esto obtengo los parámetros opcionales
    //por ejemplo /api/usuarios?id=1&nombre=ivan
    const query = req.query;
    //también se puede desestructurar
    //const {q, nombre, apikey} = req.query;
    //const {q, page = 1, nombre} = req.query;
    res.json({
        msg:'get api - Controllador',
        query,
    });
};
const postUsuarios = (req, res = response) =>{
    const body = req.body;
    console.log(body);
    res.json({
        msg: 'post api - Controllador',
        body
    });
};
const putUsuarios = (req, res = response) => {
    const {id} = req.params;
    res.json(
        {
            msg: 'put api - Controllador',
            id,
        });
};
const deleteUsuarios = (req, res = response) => {
    res.json({msg: 'delete api - Controllador'})
};

module.exports = {
    getUsuarios,
    postUsuarios,
    putUsuarios,
    deleteUsuarios
}