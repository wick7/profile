import styled from 'styled-components'


const Wrapper = styled.div`
  width: auto;
  padding: 40px;
  display: flex;
  flex-direction: row;
  
  @media screen and (max-width: 975px) {
    flex-direction: column;
}
`

const Title = styled.div`
    font-size: 4rem;
    padding: 0 40px;
    color: white;
    font-weight: 800;
    margin: 0 20px 40px 20px;

    @media screen and (max-width: 975px) {
     margin: 40px 0px;
}
`

export default { Wrapper, Title };


