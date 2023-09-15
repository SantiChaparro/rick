
import styled from "styled-components";
import { Link } from "react-router-dom";



const CardDiv = styled.div`
    width: 15em;
    height: 25em;
    position: relative;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: beige;
    border: 2px solid black;
    box-shadow: 0px 3px 14px 6px rgba(0,0,0,0.49);
   -webkit-box-shadow: 0px 3px 14px 6px rgba(0,0,0,0.49);
   -moz-box-shadow: 0px 3px 14px 6px rgba(0,0,0,0.49);
    
`;

const DetailDiv = styled.div`
    position: absolute;
    top: 6em;
    width: 8em;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
      font-size: large;
      font-weight: 700;
    }
    
`

const XButton = styled.button`
    width: 2em;
    height: 2em;
    border-radius: 50%;
    background-color: transparent;
    position: relative;
    top: 3%;
    left: 45%;
`

const CharImage = styled.img`
   width: 12em;
   height: 15em;
   border-radius: 5px;
   position: absolute;
   top: 5.3em;
   left: 60%;
   box-shadow: -7px 10px 13px 2px rgba(0,0,0,0.49);
-webkit-box-shadow: -7px 10px 13px 2px rgba(0,0,0,0.49);
-moz-box-shadow: -7px 10px 13px 2px rgba(0,0,0,0.49);
`


export default function Card({name,status, species,gender,origin,image,onClose,id }) {
   return (
      <CardDiv>
        <XButton onClick={onClose}>X</XButton>
        <DetailDiv>
            <h2>{id}</h2>
            <Link to={`/detail/${id}`}>
               <h2>{name}</h2>
            </Link>
            <h2>{gender}</h2>

        </DetailDiv>
        <CharImage src={image} alt={name}/>
         
      </CardDiv>
   );
}


/*

export default function Card({name,status, species,gender,origin,image,onClose }) {
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>         
         <img src={image} alt='img' /> 
         <div>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         </div>
      </div>
   );
}




*/



