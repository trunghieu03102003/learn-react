import { Space, Table, Tag,Popconfirm,notification } from 'antd';
import { EditOutlined,DeleteOutlined } from '@ant-design/icons'
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import ViewUserDetail from './view.user,detail';
import { deleteUserAPI } from '../../services/api.service';
const UserTable = (props) =>{
    const{dataUsers,loadUser} = props;
    const [isModalUpdate,setIsModalUpdateOpen] = useState(false)
    const [dataUpdate,setDataUpdate] = useState(null)
    const [dataDetail,setDataDetail] = useState(null)
    const [isDetailOpen,setDetailOpen] = useState(false)
    const handleDeleteUser = async (id) =>{
      const res = await deleteUserAPI(id);
      if (res && res.data) {
            notification.success({
                message: "Delete User",
                description: "Xóa user thành công",
            });
            // await loadUser();
            await loadUser()
        } else {
            notification.error({
                message: "Update User",
                description: JSON.stringify(res.message),
            });
        }
    }
    const columns = [
      {
    title: 'Action',
    key: 'action',
    render: (_, record) => {
      return(
        <a href='#' onClick={()=>{setDataDetail(record);setDetailOpen(true)}}>{record._id}</a>
      )
    },
  },
  {
    title: 'Full Name',
    dataIndex: 'fullName',
    
  },
  {
    title: 'Email',
    dataIndex: 'email',
   
  }
  ,{
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <div style={{display:"flex",gap:"20px"}}>
        <a><EditOutlined onClick={() =>{
          setIsModalUpdateOpen(true)
          setDataUpdate(record)
        }} style={{color:"orange"}}/></a>
        <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this task?"
        onConfirm={() => handleDeleteUser(record._id)}
        okText="Yes"
        cancelText="No"
        placement="left"
      >
        <a><DeleteOutlined style={{color:"red"}}/></a>
      </Popconfirm>
        
      </div>
    ),
  },
];
return (<>
      <Table columns={columns} dataSource={dataUsers} rowKey={"_id"}/>
      <UpdateUserModal
        isModalUpdate = {isModalUpdate}
        setIsModalUpdateOpen ={setIsModalUpdateOpen}
        dataUpdate = {dataUpdate}
        setDataUpdate ={setDataUpdate}
        loadUser={loadUser}
      />
      <ViewUserDetail 
      dataDetail = {dataDetail}
      setDataDetail = {setDataDetail}
      isDetailOpen = {isDetailOpen}
      setDetailOpen = {setDetailOpen}/>
      </>
      
    
)
}

export default UserTable;