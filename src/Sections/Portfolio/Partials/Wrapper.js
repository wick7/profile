import styled from 'styled-components'


const Wrapper = styled.div`
  width: 100%;
  height: 60%;
  padding: 0 40px;
  display: flex;
  flex-direction: row;
  
  @media screen and (max-width: 975px) {
    flex-direction: column;
    padding: 0 80px;
}
`

export default Wrapper