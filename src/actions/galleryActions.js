import axios from 'axios';


export const getPublicUnAuthorized = (nameOfCountry)=>{
      let endpoint= `http://localhost:8080/country/${nameOfCountry}/photos`;
      return axios.get(endpoint)
      .then(res =>{ 
        console.log(res.data);
        return res.data}
      ).catch(error=>{
        throw error;
      })
  }



export const getAllPublicAuthorized = (nameOfCountry,userLogin)=>{
  let endpoint= `http://localhost:8080/country/${nameOfCountry}/photos/${userLogin}`;
  return axios.get(endpoint)
  .then(res =>{ 
    console.log(res.data);
    return res.data}
  ).catch(error=>{
    throw error;
  })

};
export const getOnlyUsers = (nameOfCountry,userLogin)=>{
  let endpoint= `http://localhost:8080/country/${nameOfCountry}/photos/private/${userLogin}`;//endpoint change 
  return axios.get(endpoint)
  .then(res =>{ 
    console.log(res.data);
    return res.data}
  ).catch(error=>{
    throw error;
  })

};