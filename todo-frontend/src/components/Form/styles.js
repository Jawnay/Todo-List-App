import styled from "styled-components";

export const FormContainer = styled.form`
display: flex;
align-items:center;
justify-content: center;
padding: 5px 0px;
@media (max-width: 420px){
    flex-direction: column;
}
`;

export const Input = styled.input`
background-color: white;
width: 100%;
padding: 8px;
border: 1px solid #FFD580;
border-radius: 8px;

&:focus {
    border: 3px solid #FFD580;
    outline: none;
}
`;

export const Button = styled.button`

background: #FFD580;
border-radius: 18px;
border: 2px solid #FFD580;
color: white;
margin-left: 1em;
padding: 8px 20px;
cursor: pointer;
font-size: 0.8rem;
font-weight:600;
@media (max-width: 420px){
    margin-top: 10px;
    margin-left: 0;
    width: 100%;
}
`;