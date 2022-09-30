const ContactService = require("../services/contact.services");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

//Create and save a new contact
exports.create = async (req, res) => {
    res.send({message: "create handler"});
};

exports.findAll = async(req, res) => {
    res.send({message: "findAll handler"});
};

//find a single contact whith an id
exports.findOne = async(req, res)=> {
    res.send({message: "findOne handler"});
};

//update a contact by the id in the request
exports.update = async(req, res) => {
    res.send({message: "update handler"});
};

//delete a contact wit the specified id in the request
exports.delete = async (req, res) => {
    res.send({message: "deleteAll handler"});
};

exports.findAllFavorite = async(_req, res) => {
    return res.send({message: "findAllFavorite handler"}); 
};

exports.deleteAll = async (_req, res) => {
res.send({message: "findAllFavorite handler"});
};
