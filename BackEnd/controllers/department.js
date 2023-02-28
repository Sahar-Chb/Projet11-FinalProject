const Department = require('../models/department');

const create = async (req, res) => { 
  try {
    let dep = new Department(req.body);
    let result = await dep.save();
    res.status(200).send(result);
    
  } catch (error){
    res.status(500).send(error);
  }

  
}
const getAll = async (_req, res) => { 
  try {
    let result = await Department.find();
    res.status(200).send(result);
    
  } catch (error){
    res.status(500).send(error);
  }


}
const byid = async (req, res) => { 
  try {
    let { id } = req.params;
    let result = await Department.findById({ _id: id });
    res.status(200).send(result);
    
  } catch (error){
    res.status(500).send(error);
  }


}
const del = async (req, res) => { 
  try {
    let { id } = req.params;
    let result = await Department.findByIdAndDelete({ _id: id });
    res.status(200).send(result);

    
  } catch (error){
    res.status(500).send(error);
  }


}
const update = async (req, res) => { 
  try {
    let { id } = req.params;
    let data = req.body;
    let result = await Department.findByIdAndUpdate({ _id: id } , data);
    res.status(200).send(result);
    
  } catch (error){
    res.status(500).send(error);
  }


}

module.exports = {
  create,
  getAll,
  byid,
  del,
  update
}