import { useEffect, useState } from "react"
import { createUserApi, updateUserApi } from "../../services/api.service";
import { Input, notification,Modal } from "antd";
const UpdateUserModal = (props) =>{
        const [id,setId] = useState("")
        const [fullName,setFullName] = useState("")

        const [phone,setPhone] = useState("")
        const {isModalUpdate,setIsModalUpdateOpen, dataUpdate,setDataUpdate,loadUser} = props;
        console.log(dataUpdate)
        useEffect(() =>{
            if(dataUpdate){
                setId(dataUpdate._id)
                setFullName(dataUpdate.fullName)
                setPhone(dataUpdate.phone)
            }
        },[dataUpdate])
        const handleClickBtn = async () =>{
        
       const res = await updateUserApi(id,fullName,phone)
  
       console.log("res", res);
        if (res && res.data) {
            notification.success({
                message: "Update User",
                description: "Tạo user thành công",
            });
            // await loadUser();
            resetAndCloseModal()
            await loadUser()
        } else {
            notification.error({
                message: "Update User",
                description: JSON.stringify(res.message),
            });
        }
        
    
    }
    const resetAndCloseModal = () =>{
        setIsModalUpdateOpen(false)
        setFullName("")
        setPhone("")
        setId("")
        setDataUpdate(null)
    }
    return(
         <Modal
                title="Update User"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalUpdate}
                onOk={() => { handleClickBtn();
                    ;
                   
                }}
                okText="Save"
                onCancel={() => resetAndCloseModal()}
                maskClosable ={false}
            >
                 <div>
                <div className="form-group">
                    <span>Id</span>
                    <Input value={id}
                        disabled/>
                </div>
                <div className="form-group">
                    <span>FullName</span>
                    <Input 
                    value={fullName}
                            onChange={(event) =>{setFullName(event.target.value)}}/>
                </div>
                
                <div className="form-group">
                    <span>Phone number</span>
                    <Input value={phone}
                            onChange={(event) =>{setPhone(event.target.value)}}/>
                </div>
            </div>
            </Modal>
    )
}
export default UpdateUserModal