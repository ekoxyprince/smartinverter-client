import styled,{keyframes} from "styled-components"
import logo from '../../../assets/images/logo.png'

const Wrapper = styled.div`
 width:100%;
 height:100%;
 position:fixed;
 top:0;
 left:0;
 bottom:0;
 right:0;
 background-color:#0003;
 display:flex;
 align-items:center;
 justify-content:center;
 z-index:100000;
`
const pulsate = keyframes`
  0%{
   transform:scale(1);
  }
   50%{
   transform:scale(2);
  }
   100%{
    transform:scale(1);
   }
`
const Image = styled.img`
 width:5rem;
 height:5rem;
 animation:${pulsate} 1s ease infinite;
`

const Loader = ()=>{
    return <Wrapper>
    <Image src={logo}/>
    </Wrapper>
}
export default Loader