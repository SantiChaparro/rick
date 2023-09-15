import styled from "styled-components";
import loginImage from "../images/login.jpg";


const LoginImage = styled.img`
    width: 18em;
    height: 17em;
    border-radius: 50%;
    border: 3px solid green;
`
const FormDiv = styled.div`
    margin-top: 5em ;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 18em;
    height: auto;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    label {
        margin-top: 1em;
        font-weight: bold;
    }

    input {
        margin-top: 0.5em;
        padding: 0.5em;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        margin-top: 1em;
        padding: 0.5em 1em;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
`;


export default function Form(){

    return (


     <FormDiv>
        <FormStyled>
            <LoginImage src={loginImage} alt="rickandmorty img"/>
            <label>Email</label>
            <input type="email" required />

            <label>Password</label>
            <input type="password" required />

            <button type="submit">Login</button>
        </FormStyled>
     </FormDiv>
 
    )

}

