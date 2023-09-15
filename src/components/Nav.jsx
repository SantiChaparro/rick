import React from "react";
import { NavLink, useLocation} from "react-router-dom";
import SearchBar from "./SearchBar";
import  styled  from 'styled-components';

const NavButton = styled.button`
    

`
    



export default function Nav ({onSearch }){

    const location = useLocation();
    console.log(location);

    if (location.pathname === "/"){
        return null;
    }

    return(
     <div>
        <SearchBar onSearch={onSearch} />
            <NavLink to={"/home"}>
                <NavButton>Home</NavButton>
            </NavLink>
            <NavLink to={"/about"}>
                <NavButton>About</NavButton>
        </NavLink>
     </div>
    )

}