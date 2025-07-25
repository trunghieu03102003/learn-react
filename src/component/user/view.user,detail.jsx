import { useState,useEffect } from "react"
import { Button,Drawer } from 'antd';
const ViewUserDetail = (props) =>{
    const{dataDetail,setDataDetail,isDetailOpen,setDetailOpen} = props;

    return (
    <>
     
      <Drawer
        closable
        destroyOnHidden
        title={<p>Chi tiết</p>}
        open={isDetailOpen}
        onClose={() => {setDataDetail(null); setDetailOpen(false)}}
      >
        {dataDetail ?
            <>
            <p>Id : {dataDetail._id}</p>
            <p>FullName : {dataDetail.fullName}</p>
            <p>Email : {dataDetail.email}</p>
            <p>Phone : {dataDetail.phone}</p>
            </>:
            <p>Không có dử liệu</p>
        }
        
      </Drawer>
    </>
  );
}
export default ViewUserDetail