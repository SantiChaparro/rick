import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { styled } from "styled-components";


const DivContainer =styled.div`
        display: flex;
        justify-content: space-between;
        margin-top: 7em;
        

     `
     const CharacterDiv = styled.div`
     width: 50% 


     `

     const ImgDiv = styled.div`
     width: 50%;
     margin-left: 5em;

     `

     const SubTitle = styled.h2`
        
        text-align: center;
        color: black;
     `

     const CharacterImg = styled.img`
        border-radius: 50%;
     `
    

export default function Detail(){

    const params = useParams();
    const id = params.id;

    const [character,setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
     
     console.log(character)

     
     //const {name,status,species,gender,origin:{name:originName},image} = character;
     
   

        return(
            <div>
              {
                character.name ? (
                   <DivContainer>
                        <CharacterDiv>
                            <SubTitle>{character.name}</SubTitle>
                            <SubTitle>Status || {character.status}</SubTitle>
                            <SubTitle>Species || {character.species}</SubTitle>
                            <SubTitle>Gender || {character.gender}</SubTitle>
                            <SubTitle>Origin || {character.origin.name}</SubTitle>
                        </CharacterDiv>
                        <ImgDiv>
                            <CharacterImg src={character.image} alt={character.name}/>
                        </ImgDiv>
                        
                   </DivContainer>
                ):(
                    <div>Cargando...</div>
                )
              }
            </div>
        )
     
   
    

}