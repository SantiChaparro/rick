import styled from "styled-components";



const CardDiv = styled.div`
   width: 200px;
   position: relative;
   display: flex;
   align-items: center;
   flex-direction: column;
  
`;

const BottomDiv = styled.div`
   width: 100%;
   height: auto;
   
   border-bottom-left-radius: 10px;
   border-bottom-right-radius: 10px;
   background-color: #c6c6c6;
   display: flex;
   justify-content: space-around;
   align-items: center;
 
`;

const SubTitles = styled.h2`
   font-size: medium;
`

const Yellow = styled.h2`
   font-size: small;
   background-color: yellow;
   padding: 0px 15px;
   position: absolute;
   bottom: 40px;
   left: 0;
   margin-left: 5px;
   
   
`

const XButton = styled.button`
   background-color: red;
   border: none;
   position: absolute;
   top: 0;
   right: 0;
   
   
  
`

const BackImage = styled.img`
   max-width: 100%;
`




export default function Card({name,status, species,gender,origin,image,onClose }) {
   return (
      <CardDiv>
         <XButton onClick={onClose}>X</XButton>
         <Yellow>{name}</Yellow>
         {/*<h2>{status}</h2>*/}
         {/*<h2>{origin}</h2>*/}
         <BackImage src={image} alt='img' /> 
         <BottomDiv>
         <SubTitles>{species}</SubTitles>
         <SubTitles>{gender}</SubTitles>
         </BottomDiv>
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



