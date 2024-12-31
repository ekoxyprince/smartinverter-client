import styled, { keyframes } from "styled-components"
import DisplayCard from "../../components/ui/cards/DisplayCard"
import InfoCard from "../../components/ui/cards/InfoCard"
import { MdBattery50 } from "react-icons/md";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { TbCircuitVoltmeter } from "react-icons/tb";
import { GiLightningFrequency } from "react-icons/gi";
import Loader from "../../components/ui/activity/Loader";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../../services/api";
import notification from "../../constants/notification";
import { MdNotificationsActive } from "react-icons/md";
import socket from "../../services/socket";

const anim = keyframes`
100%{
 stroke-dasharray:0;
}
`
const Wrapper = styled.div`
 display:grid;
 grid-template-columns:auto 25rem;
 @media (max-width:768px){
  grid-template-columns:repeat(1,1fr);
 }
`
const MainContainer = styled.div`
display:flex;
flex-direction:column;
gap:20px;
padding:20px;
`
const MainContainerWrapper = styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
gap:20px;
`
const NotificationSection = styled.div`
display:flex;
flex-direction:column;
gap:2rem;
padding:20px;
`
const NotificationWrapper = styled.div`
width:100%;
height:max-content;
min-height:10rem;
max-height:100vh;
overflow-y:scroll;
background-color:#D6CBFF;
border-radius:10px;
display:flex;
flex-direction:column;
gap:10px;
padding:5px 10px;
`
const Text = styled.p`
font-size:2rem;
font-weight:500;
`
const Title = styled.h2`
font-size:14px;
font-weight:500;
text-align:center;
margin-top:5px;
`
const OuterCircle = styled.div`
 width:10rem;
 height:10rem;
 border-radius:50%;
 box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
-6px -6px 10px -1px rgba(0,0,0,0.15);
display:grid;
place-items:center;
position:relative;
`
const InnerCircle = styled.div`
 width:8rem;
 height:8rem;
 border-radius:50%;
box-shadow:inset 4px 4px 6px -1px rgba(0,0,0,0.2),
inset -4px -4px 6px -1px rgba(255,255,255,0.6),
 -0.5px -0.5px 0px rgba(255,255,255,0.6),
 0.5px 0.5px 0px rgba(0,0,0,0.2),
 0px 12px 10px -10px rgba(0,0,0,0.2);
display:grid;
place-items:center;
`
const Svg = styled.svg`
position:absolute;
width:12rem,
height:12rem;
`
const Circle = styled.circle`
 fill: none;
 stroke: url(#GradientColor);
 stroke-width: 1rem;
 stroke-dasharray: ${(props) => 440 - props.temp}; // Circumference of the circle (2 * π * r)
 stroke-dashoffset: 200; // Adjust based on temp
 animation: ${anim} 2s linear forwards;
`
const InfoSection = styled.div`
 display:flex;
 justify-content:space-between;
`
const IconWrapper = styled.div`
 width:2.8rem;
 height:2.8rem;
 border-radius:50%;
 background-color:#f052;
 display:flex;
 align-items:center;
 justify-content:center;
 box-shadow:inset 4px 4px 6px -1px rgba(0,0,0,0.2),
inset -4px -4px 6px -1px rgba(255,255,255,0.6),
 -0.5px -0.5px 0px rgba(255,255,255,0.6),
 0.5px 0.5px 0px rgba(0,0,0,0.2),
 0px 12px 10px -10px rgba(0,0,0,0.2);
`
const IWrapper = styled.div`
 width:2.8rem;
 height:2.8rem;
 border-radius:50%;
 background-color:#f052;
 display:flex;
 align-items:center;
 justify-content:center;
 box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
-6px -6px 10px -1px rgba(0,0,0,0.15);
`
const InfoTitle = styled.h1`
font-size:18px;
font-weight:500;
`
const NotificationList = styled.div`
 display:flex;
 flex-direction:row;
 align-items:center;
 justify-content:space-between;
`
const NotificationText = styled.p`
font-size:14px;
font-weight:500;
text-align:center;
`
const NotificationTime = styled.p`
font-size:16px;
font-weight:300;
text-align:center;
`
const Dashboard = ()=>{
   const [sum,setSum] = useState(true)
   const {data:summary,isPending:isPendingSummary} = useQuery({
      queryKey:['summary'],
      queryFn:()=>{
         return api.get("/sensor/summary").then(resp=>resp.data)
      }
   })
   const {data:notifications} = useQuery({
      queryKey:['notifications'],
      queryFn:()=>{
         return api.get("/user/notification").then(resp=>resp.data)
      }
   })
   useEffect(()=>{
      socket.on("summary-update",(e)=>{
         setSum(e)
      })
    setSum(summary)
   },[summary])
   if(isPendingSummary){
      return <Loader/>
   }
    return <Wrapper>
       <MainContainer>
        <DisplayCard>
         <OuterCircle>
          <Svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="" height="">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <Circle temp={`200`} cx="80" cy="80" r="70" stroke-linecap="round" />

 </Svg>
          <InnerCircle>
            <Text>{sum?.inverterTemp} °C</Text>
          </InnerCircle>
         </OuterCircle>
        </DisplayCard>
        <MainContainerWrapper>
        <InfoCard>
        <InfoSection>
         <InfoTitle>SOC</InfoTitle>
         <IWrapper>
         <Title>{sum?.batterySoc}%</Title>
         </IWrapper>
        </InfoSection>
        <InfoSection>
         <IconWrapper>
         <MdBattery50 size={28}/>
         </IconWrapper>
         <InfoTitle>Percentage</InfoTitle>
        </InfoSection>
        </InfoCard>
        <InfoCard>
        <InfoSection>
         <InfoTitle>Load</InfoTitle>
         <IWrapper>
         <Title>{sum?.load}W</Title>
         </IWrapper>
        </InfoSection>
        <InfoSection>
         <IconWrapper>
         <CgSmartHomeWashMachine size={28}/>
         </IconWrapper>
         <InfoTitle>Wattz</InfoTitle>
        </InfoSection>
        </InfoCard>
        <InfoCard>
        <InfoSection>
         <InfoTitle>Voltage</InfoTitle>
         <IWrapper>
         <Title>{sum?.inverterOutputVoltage}V</Title>
         </IWrapper>
        </InfoSection>
        <InfoSection>
         <IconWrapper>
         <TbCircuitVoltmeter size={28}/>
         </IconWrapper>
         <InfoTitle>Volts</InfoTitle>
        </InfoSection>
        </InfoCard>
        <InfoCard>
        <InfoSection>
         <InfoTitle>Frequency</InfoTitle>
         <IWrapper>
         <Title>{sum?.frequency}Hz</Title>
         </IWrapper>
        </InfoSection>
        <InfoSection>
         <IconWrapper>
         <GiLightningFrequency size={28}/>
         </IconWrapper>
         <InfoTitle>Hertz</InfoTitle>
        </InfoSection>
        </InfoCard>
        </MainContainerWrapper>
       </MainContainer>
        <NotificationSection>
        <NotificationWrapper>
         <Title>Notifications</Title>
         {notifications?.map(n=>{
            return <NotificationList>
                    <IconWrapper>
         <MdNotificationsActive size={28}/>
         </IconWrapper>
         <NotificationText>{n.title}</NotificationText>
         <NotificationTime>{new Date(n.createdAt).toLocaleTimeString()}</NotificationTime>
            </NotificationList>
         })}
        </NotificationWrapper>
        </NotificationSection>
    </Wrapper>
    
}

export default Dashboard