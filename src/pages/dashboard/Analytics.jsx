import styled from "styled-components"
import InfoCard from "../../components/ui/cards/InfoCard"
import { LineChart,Line,CartesianGrid,XAxis,YAxis,Tooltip,ResponsiveContainer } from "recharts"
import ChartCard from "../../components/ui/cards/ChartCard"
import socket from "../../services/socket"
import { useQuery } from "@tanstack/react-query"
import { useEffect,useState } from "react"
import Loader from "../../components/ui/activity/Loader"
import api from "../../services/api"

const Wrapper = styled.div`
 display:grid;
 grid-template-columns:repeat(2,1fr);
 width:100%;
 height:100%;
 grid-gap:10px;
 padding:15px;
  @media (max-width:768px){
  grid-template-columns:repeat(1,1fr);
 }
`

const Analytics = ()=>{
    const [sum,setSum] = useState(null)
    const {data:analysis,isPending:isPendingAnalysis,error} = useQuery({
        queryKey:['analysis'],
        queryFn:()=>{
           return api.get("/sensor/analysis").then(resp=>resp.data)
        }
     })
     console.log(analysis,error)
     useEffect(()=>{
        socket.on("analysis-update",(e)=>{
           setSum(e)
        })
      setSum(analysis)
     },[analysis])
    const data = [{name:"4:00pm",uv:30},{name:"5:00pm",uv:37},{name:"6:00pm",uv:40},{name:"7:00pm",uv:50},{name:"8:00pm",uv:60}]
    if(isPendingAnalysis) return <Loader/>
    return <Wrapper>
       <ChartCard>
        <ResponsiveContainer height={220}>
        <LineChart width={600} height={200} data={sum?.temperatures}>
        <Line type={'monotone'} dataKey={'temp'} stroke={"#8884d8"}/>
        <CartesianGrid/>
        <XAxis dataKey={'name'}/>
        <YAxis/>
        <Tooltip/>
        </LineChart>
        </ResponsiveContainer>
       </ChartCard>
       <ChartCard>
       <ResponsiveContainer height={220}>
        <LineChart width={600} height={200} data={sum?.load}>
        <Line type={'monotone'} dataKey={'load'} stroke={"#8884d8"}/>
        <CartesianGrid/>
        <XAxis dataKey={'name'}/>
        <YAxis/>
        <Tooltip/>
        </LineChart>
        </ResponsiveContainer>
       </ChartCard>
       <ChartCard>
       <ResponsiveContainer height={220}>
        <LineChart width={600} height={200} data={sum?.batterySoc}>
        <Line type={'monotone'} dataKey={'soc'} stroke={"#8884d8"}/>
        <CartesianGrid/>
        <XAxis dataKey={'name'}/>
        <YAxis/>
        <Tooltip/>
        </LineChart>
        </ResponsiveContainer>
       </ChartCard>
    </Wrapper>
}
export default Analytics