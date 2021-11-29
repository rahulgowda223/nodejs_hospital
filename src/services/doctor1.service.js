import axios from 'axios'

const API= "http://localhost:8080/api/auth/doctor1/"

const register = (doctorname, department) => {
  return axios.post(API + "create", {
    doctorname,
    department
  });
}


const delete1=(id)=>{
  return axios.post(API+`delete/${id}`,{
    id
  });
}

class DoctorDataService1 {
    getAll() {
      return axios.get(API+"");
    }
    
    get(id) {
      return axios.get(API+`find/${id}`);
    }
  
    create(data) {
      return axios.post(API+"/create", data);
    }
  
    update(id, data) {
      return axios.put(API+`update/${id}`, data);
    }
  
    delete(id) {
      return axios.post(API+`${id}`);
    }
  
  
  }

  export default { DoctorDataService1,register,delete1}
  