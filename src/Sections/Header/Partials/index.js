import styled from 'styled-components'

const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 98vh;
    padding: 100px 0;
    background-color: black;

    @media only screen and (max-width: 975px) {
        flex-direction: column;
    }
`


export default Head;