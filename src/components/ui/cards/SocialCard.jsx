import styled from "styled-components"

const Wrapper = styled.a`
 flex:1;
 padding:15px 5px;
 background-color:#fff;
 border-radius:10px;
 text-align:center;
`

const SocialCard = ({children})=>{
    return <Wrapper href="#">
        {children}
    </Wrapper>
}
export default SocialCard