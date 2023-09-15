import styled from "styled-components";
import { Link } from "react-router-dom";



const CardDiv = styled.div`
    width: 8em;
    height: 10em;
    position: relative;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border: 1px solid black;
    position: relative;
    background-color: beige;
`;

const DetailDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const XButton = styled.button`
    width: 2em;
    height: 2em;
    border-radius: 50%;
    background-color: transparent;
`




export default function Card({name,status, species,gender,origin,image,onClose,id }) {
   return (
      <CardDiv>
        <XButton onClick={onClose}>X</XButton>
        <DetailDiv>
            <h2>{id}</h2>
            <h2>{name}</h2>
            <h2>{species}</h2>

        </DetailDiv>
        <img src={image} />
         
      </CardDiv>
   );
}



