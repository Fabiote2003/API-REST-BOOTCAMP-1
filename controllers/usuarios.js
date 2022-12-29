const { response, request } = require('express');
const db = require('../database/config');

const usuariosGet = (req = request, res = response) => {
    const q = 'SELECT * FROM `primer-api`.users';
    
    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
}

const usuariosPost = (req, res = response) => {
    const q =  "INSERT INTO `primer-api`.`users` (`id`, `name`, `lastname`, `age`, `address`) VALUES (?)";
    const values = [
        req.body.id,
        req.body.name,
        req.body.lastname,
        req.body.age,
        req.body.address
    ];

    db.query(q, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json("User has been created succesfully");
    })

}

const usuariosGetById = (req, res = response) => {
    const userId = req.params.id;
    const q = "SELECT * FROM `primer-api`.users WHERE id = ?";
    db.query(q, [userId], (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
}

const usuariosPut = (req, res = response) => {
    const userId = req.params.id;
    const q = "UPDATE `primer-api`.`users` SET `id` = ?, `name` = ?, `lastname` = ?, `age` = ?, `address` = ? WHERE id = ?";
    const values = [
        req.body.id,
        req.body.name,
        req.body.lastname,
        req.body.age,
        req.body.address
    ];
    db.query(q, [...values, userId], (err, data) => {
        if(err) return res.json(err);
        return res.json("Rol has been updated succesfully");
    })
}

const usuariosDelete = (req, res = response) => {
    const userId = req.params.id;
    const q = "DELETE FROM `primer-api`.`users` WHERE id = ?";
    db.query(q, [userId], (err, data) => {
        if(err) return res.json(err);
        return res.json("Rol has been deleted succesfully");
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosGetById,
    usuariosPut,
    usuariosDelete
}
