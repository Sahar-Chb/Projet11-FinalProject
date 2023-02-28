const Client = require('../models/client');

const create = async (req, res, filename) => {
  try {
    let client = new Client(req.body);
    client.image = filename;

    let result = await client.save();
    res.status(200).send(result);
    
  } catch (error){
    res.status(500).send(error);
  }
  
 }

const getAll = async (req,res) => {
  try {
    let result = await Client.find();
    res.status(200).send(result);
    
  } catch (error){
    res.status(500).send(error);
  }
  
}

const byid = async (req,res)=> {
  try {
    let id = req.params.id;
    let result = await Client.findById({ _id: id });
    res.status(200).send(result);
    
  } catch (error){
    res.status(500).send(error);
  }

}

const del = async (req,res)=> {
  try {
    let { id } = req.params;
    let result = await Client.findByIdAndDelete({ _id: id });
    res.status(200).send(result);
    
  } catch (error){
    res.status(500).send(error);
  }

}

const update = async (req,res, filename)=> {
  try {
    let { id } = req.params;
    let data = req.body;
    if (filename.length > 0) { 
      data.image = filename;
    }
    let result = await Client.findByIdAndUpdate({ _id: id }, data);
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