import styled from "styled-components"
import { NavLink } from "react-router-dom"
import logo from '../../../assets/images/logo.png'
import { MdDashboard,MdAnalytics } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = styled.aside`
 width:100%;
 height:100vh;
 background-color:#09006F;
 padding:25px 5px;
 display:flex;
 flex-direction:column;
 align-items:center;
 gap:3.8rem;
 box-shadow:0px 2px 10px rgba(0,0,0,0.47);
`
const SidebarHeader = styled.div`
 display:flex;
 flex-direction:column;
 gap:10px;
 align-items:center;
 justify-content:center;
`
const LinkWrapper = styled.div`
 display:flex;
 flex-direction:column;
 gap:2.8rem;
`
const LinkContainer = styled(NavLink)`
 display:flex;
 flex-direction:column;
 gap:5px;
  align-items:center;
 justify-content:center;
  text-decoration:none;
  padding:5px 6px;
  border-radius:10px;
  transition: all .53s ease;
`
const Image = styled.img`
width:40px;
height:40px;
`
const HeaderText = styled.h2`
 font-size:12px;
 font-weight:400;
 text-align:center;
 color:#ffffff;
`
const LinkText = styled.p`
 font-size:12px;
 font-weight:300;
 text-align:center;
 color:#ffffff;
`
const DashboardSidebar = ()=>{
    return <Sidebar>
     <SidebarHeader>
     <Image src={logo}/>
     <HeaderText>Smart Energy</HeaderText>
     </SidebarHeader>
     <LinkWrapper>
     <LinkContainer to="/" activeClassname="active">
     <MdDashboard size={32} color="#8F00FF"/>
     <LinkText>Dashboard</LinkText>
     </LinkContainer>
     <LinkContainer to={"/analytics"}>
     <MdAnalytics size={32} color="#8F00FF"/>
     <LinkText>analytics</LinkText>
     </LinkContainer>
     <LinkContainer to={"/settings"}>
     <IoSettingsOutline size={32} color="#8F00FF"/>
     <LinkText>Settings</LinkText>
     </LinkContainer>
     </LinkWrapper>
    </Sidebar>
}

export default DashboardSidebar