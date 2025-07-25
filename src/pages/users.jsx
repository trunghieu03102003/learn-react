import UserForm from "../component/user/user.form";
import UserTable from "../component/user/user.table";
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from '../services/api.service';
const UsersPage = () =>{
    const[dataUsers,setDataUsers] = useState([
      
    ]);
    const loadUser = async () =>{
  
    const res =  await fetchAllUserAPI()
    setDataUsers(res.data)
    }
    useEffect(() =>{
      console.log()
      loadUser()
    },[]);
    return(
        <div>
            <div>
                <UserForm loadUser={loadUser}/>
                <UserTable dataUsers ={dataUsers}
                loadUser={loadUser}/>
            </div>
        </div>
    )
}
export default UsersPage;