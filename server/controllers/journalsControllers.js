const journalModel= require ('../models/journalsModel');

const postJournals = async (req, res) => {
    const { journalUrl, title, description, image } = req.body;
  
    try {
      await journalModel.create({
        journalUrl,
        title,
        description,
        image
      });
      res.send("Journal saved successfully!");
    } catch (error) {
      res.status(500).send("an error occurred...");
      throw error;
    }
  };

  // const getJournals = async (req, res) => {
  //   try {        
  //     const filter=req.query.filter
  //     const queryTitle=filter ? {title: new RegExp(`${filter}`,'i')} :{}
  //     const journals = await journalModel.find(queryTitle);
  //     res.send(journals);
  //   } catch (error) {
  //     res.status(500).send("Unable to retrieve journals...");
  //   }  
  // }
  const getJournals = async (req, res) => {
    try {        
      const filter = req.query.filter;
      const query = filter ? {
        $or: [
          { title: new RegExp(`${filter}`, 'i') },
          { description: new RegExp(`${filter}`, 'i') }
        ]
      } : {};  
      const journals = await journalModel.find(query);
      res.send(journals);
    } catch (error) {
      res.status(500).send("Unable to retrieve journals...");
    }  
  }
  

  const deleteJournal= async (req, res) => {
    let id = req.params.id;
    await journalModel.deleteOne({ _id: id });
    res.status(204).send();
  }

  const updateJournal =async(req,res)=> {
    let id=req.params.id;
    await journalModel.updateOne({_id:id},{...req.body});
    res.status(200).send();
  }

  module.exports= {
    postJournals,
    getJournals,
    deleteJournal,
    updateJournal
  };