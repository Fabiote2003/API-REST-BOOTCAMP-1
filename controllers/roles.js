const { response, request } = require('express');
const db = require('../database/config');

const rolesGet = (req = request, res = response) => {
    const q = "SELECT * FROM `primer-api`.roles";

    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
}

const rolesPost =  (req = request, res = response) => {
    const q =  "INSERT INTO `primer-api`.`roles` (`id`, `name`, `desc`) VALUES (?)";
    const values = [
        req.body.id,
        req.body.name,
        req.body.desc
    ];
    db.query(q, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json("Role has been created succesfully");
    })
}

const rolesGetById =  (req = request, res = response) => {
    const rolId = req.params.id;
    const q = "SELECT * FROM `primer-api`.roles WHERE id = ?";
    db.query(q, [rolId], (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
}

const rolesPut =  (req = request, res = response) => {
    const rolId = req.params.id;
    const q = "UPDATE `primer-api`.`roles` SET `id` = ?, `name` = ?, `desc` = ? WHERE id = ?";
    const values = [
        req.body.id,
        req.body.name,
        req.body.desc
    ];
    db.query(q, [...values, rolId], (err, data) => {
        if(err) return res.json(err);
        return res.json("Rol has been updated succesfully");
    })
}

const rolesDelete =  (req = request, res = response) => {
    const rolId = req.params.id;
    const q = "DELETE FROM `primer-api`.`roles` WHERE id = ?";
    db.query(q, [rolId], (err, data) => {
        if(err) return res.json(err);
        return res.json("Rol has been deleted succesfully");
    })
}
module.exports = {
    rolesGet,
    rolesPost,
    rolesGetById,
    rolesPut,
    rolesDelete
}