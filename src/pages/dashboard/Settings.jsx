import styled from "styled-components"
import { useQuery } from "@tanstack/react-query"
import api from "../../services/api"
import image from '../../assets/images/black-myth-wukong-ancient-gods-8k-wallpaper-uhdpaper.com-521@2@a.jpg'
import InputField from "../../components/ui/form/InputField"
import { useForm } from "react-hook-form"
import PrimaryButton from "../../components/ui/buttons/PrimaryButton"
import { useRef, useState } from "react"
import Swal from "sweetalert2"
import { useEffect } from "react"

const Wrapper = styled.div`
 width:100%;
 height:100%;
 display:flex;
 padding:15px 30px;
`
const Container =styled.div`
 width:100%;
 background-color:#eee;
 padding:20px 30px;
 border-radius:20px;
  box-shadow: 6px 6px 10px 1px rgba(0,0,0,0.15),
  display:flex;
  flex-direction:column;
`
 const ProfileContainer = styled.div`
  display:flex;
  gap:18px;
  align-items:center;
 `
 const ImageContainer = styled.div`
  width:8rem;
  height:8rem;
 `
 const Image = styled.img`
 width:100%;
 height:100%;
 border-radius:50%;
 `
 const TextContainer = styled.div`
  display:flex;
  flex-direction:column;
  gap:5px;
 `
 const Title = styled.h2`
 font-size:18px;
 font-weight:500;
 `
 const Text = styled.p`
  font-size:16px;
  font-weight:400;
  color:#ccc;
 `
const Form = styled.form`
width:100%;
`
const FormContainer = styled.div`
 display:grid;
 grid-template-columns:repeat(2,1fr);
 padding:15px 0px;
 gap:20px;`

const Settings = ()=>{
    const {data,isFetched,refetch} = useQuery({
        queryKey:['userdetails'],
        queryFn:()=>{
           return api.get("/user/details").then(resp=>resp.data)
        }
     })
     
     const {register, handleSubmit} = useForm({
        defaultValues:data
     })
     useEffect(()=>{
     refetch()
     },[data])
     const formRef = useRef()
     async function onSubmit(data){
      try {
        await api.patch('/user/details',data)
        Swal.fire({icon:'success',text:'Updated'})
        refetch()
      } catch (error) {
        Swal.fire({icon:'error',text:error.message})
      }
     }
    return <Wrapper>
         <Container>
        <ProfileContainer>
            <ImageContainer>
                <Image src={image}/>
            </ImageContainer>
            <TextContainer>
                <Title>{data?.username}</Title>
                <Text>{data?.email}</Text>
            </TextContainer>
        </ProfileContainer>
        <Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
        <InputField placeholder={'Enter your fullname'} register={register} field={'fullname'}/>
        <InputField placeholder={'Enter your username'} register={register} field={'username'}/>
        <InputField placeholder={'Enter your email'} register={register} field={'email'}/>
        <InputField placeholder={'Enter your location'} register={register} field={'location'}/>
        <InputField placeholder={'Enter your sensorId'} register={register} field={'sensorId'}/>
        </FormContainer>
        <PrimaryButton >Update</PrimaryButton>
        </Form>
         </Container>
    </Wrapper>
}

export default Settings