import styled from 'styled-components'

const Container = styled.li`

    height: 320px ;
    border:1px solid #E0E0E0;; ;
    border-radius: 3px;
    min-width: 240px;
   
    img{
        background-color: #F5F5F5; ;
        object-fit:scale-down ;
        width: 100%;
        height:160px ;
    }

    h3{
        font-size:24px ;
        font-weight:bold ;
        padding: 10px;
        white-space: nowrap;
        width: 100%;
        overflow: hidden;   
        text-overflow:    ellipsis;
    }

    span{
        padding:10px;
        color: #828282;;
    }

    p{
        color:#27AE60; 
        font-weight:600;
        font-size:20px ;
        padding:10px ;
    }

    button{
        border:none ;
        height: 40px;
        width:100px ;
        background-color: #27AE60;
        color:white ;
        border-radius:5px ;
        margin:10px ;
    }

    @media(min-width:768px){
    
            width:250px ;
    
    }

`

export default Container;