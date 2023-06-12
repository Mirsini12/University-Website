const vacancyModel= require ('../models/vacanciesModel');

const postVacancies = async (req, res) => {
    const { title, description } = req.body;
  
    try {
      await vacancyModel.create({
        title,
        description,
      });
      res.send("Vacancy saved successfully!");
    } catch (error) {
      res.status(500).send("an error occurred...");
      throw error;
    }
  };

  const getVacancies = async (req, res) => {
    try {
      const vacancies = await vacancyModel.find();
      res.send(vacancies);
    } catch (error) {
      res.status(500).send("Unable to retrieve vacancies...");
    }  
  }

  const deleteVacancy= async (req, res) => {
    let id = req.params.id;
    await vacancyModel.deleteOne({ _id: id });
    res.status(204).send();
  }

  const updateVacancy =async(req,res)=> {
    let id=req.params.id;
    await vacancyModel.updateOne({_id:id},{...req.body});
    res.status(200).send();
  }

  module.exports= {
    postVacancies,
    getVacancies,
    deleteVacancy,
    updateVacancy
  };