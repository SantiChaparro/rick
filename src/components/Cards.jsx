import { styled } from 'styled-components';
import Card from './Card';


const CardsDiv = styled.div`
   width: 100vw;
   
   display: flex;
   justify-content: center;
   gap: 20px;
   align-items: center;
   

`

export default function Cards({characters}) {
   return(
      <CardsDiv>
         {characters.map(character => {
            return (
               <Card key = {character.id}
                     name = {character.name}
                     status = {character.status}
                     species = {character.species}
                     gender = {character.gender}
                     origin = {character.origin.name}
                     image={character.image} 
               />
            )
         })}
      </CardsDiv>
   ) 
};
