import http from "../http-common";

class DoctorDataService {
  getAll() {
    return http.get("/doctor");
  }
  
  get(id) {
    return http.get(`/doctor/${id}`);
  }

  create(data) {
    return http.post("/doctor", data);
  }

  update(id, data) {
    return http.put(`/doctor/${id}`, data);
  }

  delete(id) {
    return http.delete(`/doctor/${id}`);
  }

  findByDoctor(doctorname) {
    return http.get(`/doctor?doctorname=${doctorname}`);
  }

  deletebyDoctor(doctorname){
    return http.delete(`/doctor/${doctorname}`)
  }

}

export default new DoctorDataService();