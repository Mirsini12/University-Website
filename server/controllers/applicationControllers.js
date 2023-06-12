const applicationModel= require ('../models/applicationModel');

const postApplication = async (req, res) => {
    const { vacancyId, email, cv, statement} = req.body;
  
    try {
      await applicationModel.create({
        vacancyId,
        email,
        cv,
        statement
      });
      res.send("Application saved successfully!");
    } catch (error) {
      res.status(500).send("an error occurred...");
      throw error;
    }
  };

  const getApplications = async (req, res) => {
    try {
      const applications = await applicationModel.find();
      res.send(applications);
    } catch (error) {
      res.status(500).send("Unable to retrieve applications...");
    }  
  }


  module.exports= {
    postApplication,
    getApplications
  };