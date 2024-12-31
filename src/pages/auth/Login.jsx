import styled from "styled-components"
import img1 from '../../assets/images/Group (1).png';
import img2 from '../../assets/images/Group (2).png';
import img3 from '../../assets/images/Group.png';
import img4 from '../../assets/images/Group (3).png';
import img5 from '../../assets/images/Group (4).png';
import img6 from '../../assets/images/Group (5).png';
import img7 from '../../assets/images/Group (6).png';
import InputField from "../../components/ui/form/InputField";
import PrimaryButton from "../../components/ui/buttons/PrimaryButton";
import SocialCard from "../../components/ui/cards/SocialCard";
import { FaGithub,FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/images/logo.png"
import { useNavigate } from "react-router-dom";
import Loader from "../../components/ui/activity/Loader";
import { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";


const Wrapper = styled.section`
width:100%;
height:100vh;
background-image:radial-gradient(#0085FF,#003465);
display:flex;
align-items:center;
justify-content:center;
color:#ffffff;
position:relative;
`
const Container = styled.div`
width:25rem;
height:32rem;
background-color:rgba(255,255,255,0.1);
border-radius:30px;
backdrop-filter:blur(10px);
-webkit-backdrop-filter:blur(10px);
box-shadow:0px 0px 20px rgba(227,228,237,0.37);
padding:20px 10px;
@media (max-width:768px){
width:22rem;
height:30rem;
}
`
const FormWrapper = styled.form`
margin-top:20px;
display:flex;
flex-direction:column;
gap:15px;
padding:10px 25px;
`
const Title= styled.h2`
font-size:20px;
font-weight:500;
letter-spacing:1.2px;
text-align:center;
`
const FormTitle = styled.h2`
font-size:20px;
font-weight:500;
letter-spacing:1px;
`
const ImageOverlay = styled.img`
position:absolute;
top:${(props)=>props.top};
left:${(props)=>props.left};
right:${(props)=>props.right};
bottom:${(props)=>props.bottom};
@media (max-width:768px){
 width:20%;
 height:20%;
}
`
const SocialWrapper = styled.div`
display:flex;
gap:20px
`
const Text = styled.p`
font-size:18px;
font-weight:400;
text-align:center;
`
const Logo = styled.img`
width:100%;
height:100%;
`
const Login = ()=>{
  const [isLoading,setIsLoading] = useState(false)
  const {register,handleSubmit} = useForm()
  const {login} = useAuth()
  const navigate = useNavigate()
  async function handleLogin(data){
    setIsLoading(true)
    try {
     const resp = await api.post("/auth/signin",data)
     login(resp.token);
     navigate("/")
    } catch (error) {
      setIsLoading(false)
    }
  }
    return <Wrapper>
      {isLoading?<Loader/>:null}
        <ImageOverlay top="15%" left="20%" src={img1}/>
        <ImageOverlay top="30%" left="18%" src={img2}/>
        <ImageOverlay top="60px" right="200px" src={img3}/>
        <ImageOverlay bottom="160px" right="350px" src={img4}/>
        <ImageOverlay bottom="120px" right="310px" src={img5}/>
        <ImageOverlay bottom="120px" left="310px" src={img6}/>
        <ImageOverlay bottom="160px" left="290px" src={img7}/>
        <Container>
        <Title>
        <img src={logo}/>
        </Title>
        <FormWrapper onSubmit={handleSubmit(handleLogin)}>
            <FormTitle>Welcome Back!</FormTitle>
        <InputField register={register} type={"text"} placeholder={"Enter your username"} field={"username"}/>
        <InputField register={register}  type={"password"} placeholder={"Enter your password"} field={"password"}/>
        <PrimaryButton>Signin</PrimaryButton>
        <Text>Or continue with</Text>
        <SocialWrapper>
            <SocialCard>
              <FcGoogle size={20}/>
            </SocialCard>
            <SocialCard>
              <FaGithub color="black" size={20}/>
            </SocialCard>
            <SocialCard>
              <FaFacebook size={20} color="#0085FF"/>
            </SocialCard>
        </SocialWrapper>
        </FormWrapper>
        </Container>
    </Wrapper>
}

export default Login