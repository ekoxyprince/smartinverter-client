import styled from "styled-components"
import { TbDotsVertical } from "react-icons/tb";
import { FaSearchengin } from "react-icons/fa";
import pfp from "../../../assets/images/black-myth-wukong-ancient-gods-8k-wallpaper-uhdpaper.com-521@2@a.jpg"
import { useQuery } from "@tanstack/react-query";
import api from "../../../services/api";
import { useAuth } from "../../../contexts/AuthContext";
import { useState } from "react";

const NavbarContainer = styled.div`
width:40rem;
height:3.8rem;
padding:0.7rem 0.9rem;
display:flex;
align-items:center;
gap:1.8rem;
align-self:center;
box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
-6px -6px 10px -1px rgba(0,0,0,0.15);
border-radius:30px;
position:relative;
`
const SearchContainer = styled.div`
 flex:1;
 position:relative;
`
const Search = styled.input`
width:100%;
height:3rem;
border-radius:1.5rem;
background:#EDEDED;
padding:2px 2.6rem;
border:none;
outline:none;
box-shadow:inset 4px 4px 6px -1px rgba(0,0,0,0.2),
inset -4px -4px 6px -1px rgba(255,255,255,0.6),
 -0.5px -0.5px 0px rgba(255,255,255,0.6),
 0.5px 0.5px 0px rgba(0,0,0,0.2),
 0px 12px 10px -10px rgba(0,0,0,0.2)
`
const ProfileContainer = styled.div`
display:flex;
gap:20px;
align-items:center;
`
const ImageContainer = styled.div`
width:3rem;
height:3rem;
`
const Image = styled.img`
width:100%;
height:100%;
border-radius:50%;
`
const SearchIcon = styled(FaSearchengin)`
position:absolute;
left:10px;
top:50%;
transform:translateY(-50%);
color:#0005;
`
const DropDownWrapper = styled.div`
 padding:10px 20px;
 box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.15);
 position:absolute;
 top:100%;
 right:1.7rem;
 background-color:#fff;
 border-radius:15px;
`
const LogoutBtn = styled.button`
 width:7rem;
 height:2.5rem;
 padding:4px 8px;
 border-radius;20px;
 border:1px solid #ccc;
 font-size:14px;
 outline:none;
 cursor:pointer;
box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.25);
 :active{
  transform:scale(20);
  color:red;
 }
`
const Navbar = ()=>{
   const {data} = useQuery({
      queryKey:['userdetails'],
      queryFn:()=>{
         return api.get("/user/details").then(resp=>resp.data)
      }
   })
   const [isActive,setActive]= useState(false)
   const {logout} = useAuth()
    return <NavbarContainer>
     <SearchContainer>
        <SearchIcon size={28}/>
        <Search placeholder="Search for any keyword here!"/>
     </SearchContainer>
     <ProfileContainer>
        <ImageContainer>
         <Image src={pfp}/>
        </ImageContainer>
        <p>{data?.username}</p>
        <TbDotsVertical onClick={()=>setActive(prev=>!prev)} size={28}/>
     </ProfileContainer>
    {isActive?<DropDownWrapper>
      <LogoutBtn onClick={logout.bind(this,logout)}>Logout</LogoutBtn>
     </DropDownWrapper>:null} 
    </NavbarContainer>
}
export default Navbar