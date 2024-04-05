
import { Menu } from "antd";
import {  useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";


function SideMenu() {
    const [selectedKeys, setSelectedKeys] = useState("/");
    const [role,setRole]=useState('')
    useEffect(()=>{
        setRole(localStorage.getItem('role'))
        console.log("role:",localStorage.getItem('role'))
    },[])

    const navigate = useNavigate();
    return (
        <div className="SideMenu sidebar">
            <Menu
                className="SideMenuVertical"
                mode="vertical"
                onClick={(item) => {
                    navigate(item.key); 
                }}
                selectedKeys={[selectedKeys]}
                items={[
                    {
                        label: "Profile",
                        key: "/profile",
                    },
                    role === 'Admin'?
                    {
                        label: "Create User",
                        key: "/signup",
                    }: '',
                    role === 'Admin'?
                    {
                        label: "View Data",
                        key: "/viewData",
                    }: '',
                    {
                        label: "Certificates",
                        key: "/certificates",
                    },
                    {
                        label: "Skills",
                        key: "/skills",
                    }  ,
                        role === 'Admin' ? {
                          label: "Approval",
                          key: "/approve",
                        } : '',
                        {
                            label: "Projects",
                            key: "/project",
                        }  
                      
                ]}
            ></Menu>
        </div>
    );
}
export default SideMenu;
