import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ComputerIcon from '@mui/icons-material/Computer';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import WorkIcon from '@mui/icons-material/Work';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssistantIcon from '@mui/icons-material/Assistant';
function SideMenu() {
    const theme = useTheme();
    const { collapseSidebar } = useProSidebar();

    const [role, setRole] = useState('');

    useEffect(() => {
        setRole(localStorage.getItem('role'));
    }, []);

    const isAdmin = () => role === 'Admin' || role==='Approval';

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        if (isMobile) {
            collapseSidebar();
        }
    }, [isMobile, collapseSidebar]);

    return (
        <div style={{ height: "100vh",  display: "flex"}}>
            <Sidebar style={{ maxWidth:"50px", minHeight: "100%"}}>
                <Menu>
                    <MenuItem
                        icon={<MenuOutlinedIcon />}
                        onClick={() => {
                            collapseSidebar();
                        }}
                        style={{ textAlign: "center" }}
                    >
                        <h2>Admin</h2>
                    </MenuItem >
                    <Link to="/profile" className="sidebarList">
                        <MenuItem icon={<AccountCircleIcon />} >
                            Profile
                        </MenuItem>
                    </Link>
                    {isAdmin() && (
                        <Link to="/signup" className="sidebarList">
                            <MenuItem icon={<PersonAddIcon />}>
                                Create User
                            </MenuItem>
                        </Link>
                    )}
                    {isAdmin() && (
                        <Link to="/dashboard" className="sidebarList">
                            <MenuItem icon={<DashboardIcon />}>
                                Dashboard
                            </MenuItem>
                        </Link>
                    )}
                    <Link to="/skills" className="sidebarList">
                        <MenuItem icon={<ComputerIcon />}>
                            Skills
                        </MenuItem>
                    </Link>
                    <Link to="/certificates" className="sidebarList">
                        <MenuItem icon={<DocumentScannerIcon />}>
                            Certificates
                        </MenuItem>
                    </Link>
                    {isAdmin() && (
                        <Link to="/viewData" className="sidebarList">
                            <MenuItem icon={<ContentPasteSearchIcon />}>
                                View Data
                            </MenuItem>
                        </Link>
                    )}
                    {isAdmin() && (
                        <Link to="/approve" className="sidebarList">
                            <MenuItem icon={<CheckCircleIcon />}>
                                Approval
                            </MenuItem>
                        </Link>
                    )}
                    <Link to="/project" className="sidebarList">
                        <MenuItem icon={<WorkIcon />}>
                            Projects
                        </MenuItem>
                    </Link>
                    {isAdmin() && (
                        <Link to="/recommend" className="sidebarList">
                            <MenuItem icon={<AssistantIcon />}>
                                Recommend
                            </MenuItem>
                        </Link>
                    )}
                </Menu>
            </Sidebar>
        </div>
    );
}

export default SideMenu;
