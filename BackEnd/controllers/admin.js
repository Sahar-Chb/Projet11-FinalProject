const Admin = require('../models/admin');


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => { 
  try {
    let data=req.body;
    let admin = new Admin(data);

    admin.password = bcrypt.hashSync(data.password, 10);
    let result = await admin.save();
    res.status(200).send(result);
    
  } catch (error){
    res.status(500).send(error);
  }
}


const login = async (req, res) => { 
  try {
    let { email, password } = req.body;
    let result = await Admin.findOne({ email: email });

    if (!result) {
      return res.status(401).send('email or password invalid'); 
      // si on met pas de return ca continue a tourner .. y aura 2 response sur la meme requete..
    }

    let valid = bcrypt.compareSync(password, result.password);

    if (!valid) {
        return res.status(401).send('email or password invalid');
    }

    let payload = {
      _id: result._id,
      fullname: result.fullname,
      email: result.email,
    }

    let token = jwt.sign(payload, '123456789');

    res.status(200).send({ mytoken: token });
    
  } catch (error){
    res.status(500).send(error);
  }

}




module.exports={register,login}