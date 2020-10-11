import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div `
min-height: 692px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: linear-gradient(
    108deg,
    rgba(150, 40, 27, 1) 0%,
    rgba(118, 93, 105, 1) 100%
);
`;

export const FormWrap = styled.div `
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;


@media screen and (max-width: 400px){
    height: 80%;
}
`;

export const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: #fff;
font-weight: 700;
font-size: 32px;

@media screen and (max-width: 480px){
    margin-left: 16px;
    margin-top: 8px;
}
`;

export const FormContent = styled.div `
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 480px){
    padding: 10px;
}
`;


export const Form = styled.form `
background: #010101;
max-width: 800px;
height: auto;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 80px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0,0,0,0.9);

@media screen and (max-width: 400px){
    padding: 32px 32px;
}
`;

export const FormH1 = styled.h1 `
font-size: 20px;
color: #fff;
margin-bottom: 40px;
font-weight: 400;
text-align: center;
`;

export const FormLabel = styled.label `
font-size: 14px;
color: #fff;
margin-bottom: 8px;
`;

export const FormInput = styled.input `
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;
`;

export const FormButton = styled.button `
background: #8C2729;
padding: 16px 0;
font-size: 20px;
border: none;
color: #fff;
cursor: pointer;
border-radius: 4px;
`;

export const Text = styled.span `
text-align: center;
margin-top: 24px;
color: #8C2729;
font-size: 14px;
cursor: pointer;

&:hover {
    color:#fff;
    font-weight: 700;
    text-decoration: underline;
}
`;






