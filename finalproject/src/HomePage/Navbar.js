import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";


function Navbar() {

  return (
    <div className="Navbar">
      <Image
        width={50}
        src="./logo.jpg"
      ></Image>
      <h2 className="adminName">Admin's Dashboard</h2>
    </div>
  );
}
export default Navbar;
