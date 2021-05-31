import { useState } from "react";
import { Drawer } from "antd";
import NavItem from "./NavItem";
import HamMenu from "./HamMenu";

export default function NavBar() {
    const [isOnTouch,setIsOnTouch]= useState(false);
    const handleCloseDrawer = () => setIsOnTouch(false);
    return (
        <div>
            <HamMenu
                onClick={() => setIsOnTouch(!isOnTouch)}
                isOnTouch={isOnTouch}
            />
            <div className="nav-bar collapse-mobile">
                <NavItem to="/tableware" className="nav-item" activeClassName="nav-item--active">
                    香水系列
                </NavItem>
                <NavItem to="/cookware" className="nav-item" activeClassName="nav-item--active">
                    沐浴系列
                </NavItem>
                <NavItem to="/home-accessories" className="nav-item" activeClassName="nav-item--active">
                    香氛系列
                </NavItem>
                <NavItem to="/lighting" className="nav-item" activeClassName="nav-item--active">
                    居室系列
                </NavItem>
                
            </div>
            <Drawer
                title=" "
                placement={"left"}
                closable={false}
                onClose={handleCloseDrawer}
                visible={isOnTouch}
                key={"left"}
                width={350}
                zIndex={99}
                bodyStyle={{ backgroundColor: "#fff" }}
                /*headerStyle={{ backgroundColor: "#ECE4AC", color: "#4D4D4D" }}*/
            >
                <NavItem onClose={handleCloseDrawer} to="/Perfume" className="nav-item" activeClassName="nav-item--active">
                    PERFUME
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/Fixweb" className="nav-item" activeClassName="nav-item--active">
                    BATH/BODY
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/Fixweb" className="nav-item" activeClassName="nav-item--active">
                    CANDLES
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/Fixweb" className="nav-item" activeClassName="nav-item--active">
                    DIFFUSER
                </NavItem>
            </Drawer>
        </div>
    );
}