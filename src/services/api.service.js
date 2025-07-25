import axios from "./axios.customize";
const createUserApi = (fullName,email,password,phone) =>{
    const URL_BACKEND = "/api/v1/user"
        const data = {
            fullName:fullName,
            email:email,
            password:password,
            phone:phone

        }
        
            
        return axios.post(URL_BACKEND, data, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2ODgyMTY3OTM1ZmI3ZDNlZGEzZDQ0YzYiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3NTM0MzU1ODUsImV4cCI6MTc1MzQ3MTU4NX0.GiZCmc-UQgF8HMAYUslZLXgh2gFm9enaooLe0e1PAes` // ✅ dùng token từ localStorage
            }
            });
}
const updateUserApi = (_id,fullName,phone) =>{
    const URL_BACKEND = "/api/v1/user"
        const data = {
           _id:_id,
           fullName:fullName,
            phone:phone

        }
        
            
        return axios.put(URL_BACKEND, data, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2ODgyMTY3OTM1ZmI3ZDNlZGEzZDQ0YzYiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3NTM0MzU1ODUsImV4cCI6MTc1MzQ3MTU4NX0.GiZCmc-UQgF8HMAYUslZLXgh2gFm9enaooLe0e1PAes` // ✅ dùng token từ localStorage
            }
            });
}
const fetchAllUserAPI = () =>{
     const URL_BACKEND = "/api/v1/user"
     return axios.get(URL_BACKEND, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2ODgyMTY3OTM1ZmI3ZDNlZGEzZDQ0YzYiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3NTM0MzU1ODUsImV4cCI6MTc1MzQ3MTU4NX0.GiZCmc-UQgF8HMAYUslZLXgh2gFm9enaooLe0e1PAes` // ✅ dùng token từ localStorage
            }
            });
}
const deleteUserAPI = (id) =>{
    const URL_BACKEND = `/api/v1/user/${id}`
     return axios.delete(URL_BACKEND, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2ODgyMTY3OTM1ZmI3ZDNlZGEzZDQ0YzYiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3NTM0MzU1ODUsImV4cCI6MTc1MzQ3MTU4NX0.GiZCmc-UQgF8HMAYUslZLXgh2gFm9enaooLe0e1PAes` // ✅ dùng token từ localStorage
            }
            });
}
export{
    createUserApi,
    updateUserApi,
    fetchAllUserAPI,
    deleteUserAPI
} ;