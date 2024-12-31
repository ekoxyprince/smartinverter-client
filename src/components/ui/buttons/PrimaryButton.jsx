import styled from "styled-components";

const Button = styled.button`
padding:5px 10px;
background-color:#003465;
color:#ffffff;
height:45px;
border:none;
outline:none;
cursor:pointer;
box-shadow:1px 2px #0001;
font-size:16px;
font-weight:500;
margin-top:10px;
border-radius:10px;
transition:all .53s ease;

&:hover{
background-color:#336699;
}
&:active{
 box-shadow:none;
 transform:scale(0.95);
}
`

const PrimaryButton = ({handleClick,children,type})=>{
    return <Button type={type} onClick={handleClick}>
        {children}
    </Button>
}

export default PrimaryButton