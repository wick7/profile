import styled from 'styled-components'


const Wrapper = styled.div`
  width: 100%;
  padding: 0 40px;
  display: flex;
  flex-direction: row;
  margin: auto;
  
  @media screen and (max-width: 975px) {
    flex-direction: column;
    padding: 0 80px;
}
`

export default Wrapper