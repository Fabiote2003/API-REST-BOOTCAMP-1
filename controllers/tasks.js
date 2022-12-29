const { response, request } = require('express');
const db = require('../database/config');

const tasksGet = (req = request, res = response) => {
    const q = "SELECT * FROM `primer-api`.tasks";

    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
}

const tasksPost =  (req = request, res = response) => {
    const q =  "INSERT INTO `primer-api`.`tasks` (`id`, `name`, `desc`) VALUES (?)";
    const values = [
        req.body.id,
        req.body.name,
        req.body.desc
    ];
    db.query(q, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json("Task has been created succesfully");
    })
}

const tasksGetById =  (req = request, res = response) => {
    const taskId = req.params.id;
    const q = "SELECT * FROM `primer-api`.tasks WHERE id = ?";
    db.query(q, [taskId], (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
}

const tasksPut =  (req = request, res = response) => {
    const taskId = req.params.id;
    const q = "UPDATE `primer-api`.`tasks` SET `id` = ?, `name` = ?, `desc` = ? WHERE id = ?";
    const values = [
        req.body.id,
        req.body.name,
        req.body.desc
    ];
    db.query(q, [...values, taskId], (err, data) => {
        if(err) return res.json(err);
        return res.json("Task has been updated succesfully");
    })
}

const tasksDelete =  (req = request, res = response) => {
    const taskId = req.params.id;
    const q = "DELETE FROM `primer-api`.`tasks` WHERE id = ?";
    db.query(q, [taskId], (err, data) => {
        if(err) return res.json(err);
        return res.json("Task has been deleted succesfully");
    })
}
module.exports = {
    tasksGet,
    tasksPost,
    tasksGetById,
    tasksPut,
    tasksDelete
}