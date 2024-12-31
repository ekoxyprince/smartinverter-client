import { Outlet } from "react-router-dom";
import styled from "styled-components";
import DashboardSidebar from "../ui/Sidebars/DashboardSidebar";
import Navbar from "../ui/header/Navbar";
import socket from "../../services/socket";

const Wrapper = styled.section`
width:100%;
height:100%;
display:grid;
grid-template-columns:6rem auto;
`
const DashboardContainer = styled.div`
 padding:0.5rem 1rem;
 display:flex;
 flex-direction:column;
`
const DashboardLayout = ()=>{
    socket.on("connect",()=>{
        console.log("connected to socketID ",socket.id)
    })
    return <Wrapper>
        <DashboardSidebar/>
        <DashboardContainer>
        <Navbar/>
        <Outlet/>
        </DashboardContainer>
    </Wrapper>
}
export default DashboardLayout