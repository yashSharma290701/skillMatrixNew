import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";

function Navbar() {
  const [role, setRole] = useState('');

  useEffect(() => {
    // Fetch the role from localStorage when the component mounts
    setRole(localStorage.getItem('role'));
  }, []);

  return (
    <div className="Navbar">
      <Image width={50} src="./logo.jpg" />
      <h2 className="adminName">{role}'s DashBoard</h2>
      {/* Conditionally render based on the role */}
      {role === 'admin' && (
        <Badge count={5} offset={[10, 0]}>
          <Drawer />
        </Badge>
      )}
    </div>
  );
}

export default Navbar;
