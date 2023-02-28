const Employee = require('../models/employee');

const create = async (req, res, filename) => {
  try {
    let emp = new Employee(req.body);
    emp.image = filename;
    let result = await emp.save();
    res.status(200).send(result);
    
  } catch (error){
    res.status(500).send(error);
  }
  
 }

const getAll = async(req,res) => {
  
  try {
    let result = await Employee.aggregate(

      [
        {
          $lookup: {

            from: 'departments',
            localField: 'idDep',
            foreignField: '_id',
            as: 'dep'
            
          }
        }
      ]
    );
    
    res.status(200).send(result);
    
  } catch (error){
    res.status(500).send(error);
  }
  
}

const byid = async (req,res)=> {
  try {
    let { id } = req.params;
    let result = await Employee.findById({ _id: id });
      res.status(200).send(result);
    
  } catch (error){
    res.status(500).send(error);
  }

}

const del = async (req,res)=> {
  try {
    let { id } = req.params;
    let result = await Employee.findByIdAndDelete({ _id: id });
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
    let result = await Employee.findByIdAndUpdate({ _id: id }, data);
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