import { Button, Flex, Input, notification,Modal } from "antd";
import { useState } from "react";
import { createUserApi } from "../../services/api.service";
const UserForm = (props) => {
    const {loadUser} = props;
    const [fullName,setFullName] = useState("hieu")
    const [email,setEmail] = useState("")
    const [password,setPassWord] = useState("")
    const [phone,setPhone] = useState("")
    const [isModalOpen,setIsModalOpen] = useState(false)
    const handleClickBtn = async () =>{
        
       const res = await createUserApi(fullName,email,password,phone)
       debugger
       console.log("res", res);
        if (res && res.data) {
            notification.success({
                message: "Create User",
                description: "Tạo user thành công",
            });
            await loadUser();
            resetAndCloseModal()
        } else {
            notification.error({
                message: "Create User",
                description: JSON.stringify(res.message),
            });
        }
        
    
    }
    const resetAndCloseModal = () =>{
        setIsModalOpen(false)
        setFullName("")
        setEmail("")
        setPassWord("")
        setPhone("")
    }
    return(
        <div className="user-form">
           
            <div style={{display :"flex",justifyContent :"space-between",margin:"20px"}}>
                <h3>Table Users</h3>
                <Button type="primary" onClick={() => setIsModalOpen(true)}> Create User</Button>
            </div>
            <Modal
                title="Create User"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={() => { handleClickBtn();
                    ;
                   
                }}
                okText="Create"
                onCancel={() => resetAndCloseModal()}
                maskClosable ={false}
            >
                 <div>
                <div className="form-group">
                    <span>FullName</span>
                    <Input 
                    value={fullName}
                            onChange={(event) =>{setFullName(event.target.value)}}/>
                </div>
                <div className="form-group">
                    <span>Email</span>
                    <Input value={email}
                            onChange={(event) =>{setEmail(event.target.value)}}/>
                </div>
                <div className="form-group">
                    <span>Password</span>
                    <Input.Password value={password}
                            onChange={(event) =>{setPassWord(event.target.value)}}/>
                </div>
                <div className="form-group">
                    <span>Phone number</span>
                    <Input value={phone}
                            onChange={(event) =>{setPhone(event.target.value)}}/>
                </div>
            </div>
            </Modal>
        </div>
    )
}
export default UserForm;