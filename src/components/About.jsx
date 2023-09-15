import React from "react"
import styled from "styled-components";


const Titulo = styled.h1`
    text-align: center;
    color: darkgray;

`
const Parrafos = styled.p`
    text-align: center;
    color: blue;
`



export default function AboutText(){

    return(
        <div>
            <Titulo>Aplicación creada por: Santi chaparro</Titulo>
            <Parrafos>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos expedita obcaecati adipisci impedit delectus quod quidem quia recusandae atque. Laborum unde sed modi exercitationem dicta quis quibusdam fugiat voluptatem blanditiis.</Parrafos>
            <Parrafos>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos expedita obcaecati adipisci impedit delectus quod quidem quia recusandae atque. Laborum unde sed modi exercitationem dicta quis quibusdam fugiat voluptatem blanditiis.</Parrafos>
        </div>
    )
}