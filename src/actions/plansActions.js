import axios from 'axios';

export const getPublicPlans = async(nameOfCountry)=>{
    let endpoint= `http://localhost:8080/country/${nameOfCountry}/plans`;
    return axios.get(endpoint)
        .then(res =>{
            console.log(res.data);
            return res.data}
        ).catch(error=>{
            throw error;
        })
};

export const getPublicAndPrivatePlans = async(nameOfCountry, login)=>{
    let endpoint= `http://localhost:8080/country/${nameOfCountry}/plans?user=${login}`;
    return axios.get(endpoint)
        .then(res =>{
            console.log(res.data);
            return res.data}
        ).catch(error=>{
            throw error;
        })
};


export const getPlanById = async(nameOfCountry, idOfPlan)=>{
    let endpoint= `http://localhost:8081/country/${nameOfCountry}/plans/${idOfPlan}`;
    return axios.get(endpoint)
        .then(res =>{
            console.log(res.data);
            return res.data}
        ).catch(error=>{
            throw error;
        })
};


export const getUsersPlans = async(nameOfCountry, login)=>{
    let endpoint= `http://localhost:8080/country/${nameOfCountry}/plans/private?user=${login}`;
    return axios.get(endpoint)
        .then(res =>{
            console.log(res.data);
            return res.data}
        ).catch(error=>{
            throw error;
        })
};

export const createNewPlan = async(nameOfCountry)=>{
    let endpoint= `http://localhost:8080/country/${nameOfCountry}/plans`;
    return axios.post(endpoint)
        .then(res =>{
            console.log(res.data);
            return res.data}
        ).catch(error=>{
            throw error;
        })
};


export const deletePlan = async(nameOfCountry, idOfPlan)=>{
    let endpoint= `http://localhost:8080/country/${nameOfCountry}/plans/${idOfPlan}`;
    return axios.delete(endpoint)
        .then(res =>{
            console.log(res.data);
            return res.data}
        ).catch(error=>{
            throw error;
        })
};


export const editPlan = async(nameOfCountry, idOfPlan)=>{
    let endpoint= `http://localhost:8080/country/${nameOfCountry}/plans/${idOfPlan}`;
    return axios.get(endpoint)
        .then(res =>{
            console.log(res.data);
            return res.data}
        ).catch(error=>{
            throw error;
        })
};
