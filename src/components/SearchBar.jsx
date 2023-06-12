import { styled } from 'styled-components';

const Search = styled.div`
width: 40%;
height: 2em;
background-color: #a7a4a4;
padding: 0.40em 0.75em;
display: flex;
align-items: center;
justify-content: space-around;
margin-left: 60%;
margin-bottom: 0.45em;
`
const Input = styled.input`
   width: 60%;
   height: 70%;
   border-style: none;
   border-radius: 0.2em;
  

`

const SearchButton = styled.button`
   height: 70%;
   width: 12%;
   background-color: #fafa74;
   border-style: none;
   border-radius: 0.2em;
   padding: 0 1em;
   box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
   
   margin-right: 2em;
`


export default function SearchBar({onSearch}) {
   return (
      <Search>
          <Input type='search' />
         <SearchButton onClick={onSearch}>Agregar</SearchButton> 
      </Search>
   );
}
