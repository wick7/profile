import styled from 'styled-components'


const Wrapper = styled.div`
  width: auto;
  height: auto;
  padding: 0 40px;
  display: flex;
  flex-direction: row;
  
  @media screen and (max-width: 975px) {
    flex-direction: column;
    
}
`

const Title = styled.div`
    font-size: 4rem;
    color: white;
    font-weight: 800;
    width: 100%;
    height: auto;
    margin-bottom: 60px;
    text-align: center;
    /* margin: 0 20px 40px 20px;

    @media screen and (max-width: 975px) {
     margin: 40px 0px;
} */
`

const Container = styled.div`
  height: 100%;
  width: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  
`

export default { Wrapper, Title, Container };


