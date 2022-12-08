import styled from 'styled-components'

const StyledHeader = styled.div`

  width: 100% ;
  background-color: #F5F5F5;
  display: flex ;
  align-items: center ;

  section{
    padding: 13px;
    display: flex;
    flex-direction: column ;
    align-items: center ;
    gap:10px;
    width: 90% ;
    max-width:1300px;
    margin: 0 auto ;
  }

  p {
    font-size: 30px ;
    font-weight: 700;
    color:#EB5757 ;
  }

  .divInput{
    width: 100% ;
    display: flex ;
    justify-content:center ;
    gap:5px;
  }

  input{
    height: 35px ;
    border-radius: 5px ;
    border:1px solid black
  }

  button{
    border-radius:5px;
    height: 40px ;
    background-color:#27AE60 ;
    border: none ;
    color:white;
    font-size:16px;
  }

  @media(min-width:768px){

    section{
      padding: 20px ;
      flex-direction: row ;
      justify-content: space-between;
    }

    .divInput{
      width: 290px;
      justify-content: right ;
    }
  }
`

export default StyledHeader;