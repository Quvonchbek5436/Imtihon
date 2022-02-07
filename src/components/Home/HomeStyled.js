import styled from 'styled-components'

const HomeStyle = styled.div` 
    *{
        font-family: 'Montserrat', sans-serif;
    }
    .h1{
        font-size:100px;
    }
    .addBtn{
        color:black ;
    }
    .row{ .col-xl-3
     {
     
    .img{
        position:relative;
        img{
        width:100%;
        height:350px;
        object-fit:cover;
        transition:all 0.3s;
        }
        
    
    
    .buttons{
    padding:15px 20px;
    transition:all 0.3;
        width:100%;
        position:absolute;
        bottom:0;
        left:0;
        display:flex;
        justify-content:center;
        align-items:center;
        opacity:0;
     .btn{
                border-radius:10px ;
      }
      }
    }
    &:hover{
        .img{
            img{
                // filter:blur(3px);
                opacity:0.7;
            }
        }
      .buttons{
        opacity:1;
      }  
     }
    }
    }
    .chiziq{
        width:100%;
        height:2px;
        background-color:#143043;
    }
    .footer{
    
    height:200px;
    background-color:#143043;
    border-radius:10px;
    
        img{
            width:350px;
        }
    }
`

export default HomeStyle;