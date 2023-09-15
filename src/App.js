//import './App.css';
import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import {useState} from "react";
import About from './components/About';
import Cards from './components/Cards.jsx';
import Nav from "./components/Nav";
import Detail from './components/Detail';
import Error404 from './components/Error404';
import VistaError404 from './vistas/VistaError404';
import Form from './components/Form';

//import SearchBar from './components/SearchBar.jsx';
//import data from './data.js'



function App() {
   

   const [characters,setCharacters] = useState([]);
   /*
   function onSearch(id) {

      const numId = parseInt(id)
      
      axios(`https://rickandmortyapi.com/api/character/${numId}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   */

   function onSearch(id) {
 
   fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => {
         //console.log(data)
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      })
      .catch(error => {
         console.error('Error fetching data:', error);
         window.alert('¡Hubo un error al obtener los datos!');
      });
}

   const closeCard = (id) => {
      const filteredCharacter = characters.filter(character => character.id !== id);
      setCharacters(filteredCharacter);
   }

   //console.log(characters)
   

   return (
      <div className='App'>
         <Nav  onSearch={onSearch} />
         <Routes>

            <Route path='/' element={<Form/>} />

            <Route path='/home' element={<Cards characters={characters} closeCard={closeCard}/> }/>
            
            <Route path='/about' element={<About/>}/>

            <Route path='/detail/:id' element={<Detail/>}/>

            <Route path='*' element={<VistaError404/>} />

         </Routes>
         
        
      </div>
   );
}

export default App;
