import styled from "styled-components";

const CartContainer = styled.div`
  
    width: 95%;
    height: 500px ;
    margin:20px auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background-color: #F5F5F5;
    border-radius: 10px;
   
    .superior{
        height: 70px; 
        width: 100% ;
        background-color: #27AE60;; ;
        display: flex;
        align-items: center;
        color: white ;
        font-size: 25px;
        border-radius: 10px;
    }

    .superior h1{
        padding-left: 15px;
    }

    ul{
        overflow: auto;
        height: 450px;
        border-bottom: 2px solid #E0E0E0;
    }

    ul li {
        display: flex;
        justify-content: space-between;
        margin: 15px;
    }

    ul li img {
        width: 100px;
        height: 100px;
        background:#F5F5F5;
    }

    ul li div{
        display: flex;
    }

    .flex{
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-left: 20px
    }

    ul li div h3 {
        padding-top:17px;
        font-size: 20px;
    }

    ul li div p {
        font-size: 17px;
    }

    .trash{
        padding-top: 20px;
        transform: scale(1.3);
    }

    .inferior{
        margin: 20px;
        display: flex;
        justify-content: space-between;
    }

    .inferior p {
        font-size: 25px;
    }

    .inferior span {
        font-size: 25px;
    }

    button{
        border: none;
        height: 45px;
        width: 90%;
        margin:auto;
        margin-bottom: 10px;
        font-size: 16px;
        border-radius: 10px;
        color:#828282;
    }

    .divDireita{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .qnt{
        display: flex;
        margin-top: 10px;
    }
    .qnt p{
        
        padding: 3px 10px 0px 10px;
    }

    .qnt button{
        color: black;
        background-color: #dee1e6;
        height: 25px;
    }

    @media(min-width:768px){
        width:600px;
        min-width:400px;
    }

`

export default CartContainer;