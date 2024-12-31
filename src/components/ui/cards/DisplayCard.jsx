import styled from "styled-components"

const Wrapper = styled.div`
 width:100%;
 height:100%;
 padding:2rem 1.5rem;
 background-color:#E7D5FF;
 border-radius:20px;
 box-shadow:0px 0px 15px #0004;
 display:flex;
 justify-content:center;
 align-items:center;
`

const DisplayCard = ({children})=>{
    return <Wrapper>
        {children}
    </Wrapper>
}
export default DisplayCard