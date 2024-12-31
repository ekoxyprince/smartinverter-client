import styled from "styled-components";

const Input = styled.input`
width:100%;
height:100%;
border-radius:10px;
outline:none;
border:none;
padding:10px 20px;
`
const FormGroup = styled.div`
display:flex;
flex-direction:column;
gap:5px;
`
const InputWrapper = styled.div`
height:45px;
width:100%;
`
const InputLabel = styled.label`
font-size:17px;
font-weight:400;
text-transform:capitalize;
`
const InputField = ({type,placeholder,field,register})=>{
    return <FormGroup>
    <InputLabel>{field}</InputLabel>
    <InputWrapper>
     <Input type={type} placeholder={placeholder} {...register(field)}/>
    </InputWrapper>
    </FormGroup>
}

export default InputField