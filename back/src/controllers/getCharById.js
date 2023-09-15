const axios= require("axios")  ;


const getCharById = (res,id) => {
   axios(`https://rickandmortyapi.com/api/character/${id}`)
   .then((response) => response.data)
   .then(({ name, gender, species, origin, image, status,id }) => {

    const character = {
        id,
        name,
        gender,
        species,
        origin: origin.name,
        image,
        status
      }
    
   
      console.log(character)

     return res.writeHead(200, {"Content-Type":"application/json"}).end(JSON.stringify(character))
     ;
      
   })
   .catch ((error) => { 
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end(error.message )
  })
};



module.exports = getCharById;
