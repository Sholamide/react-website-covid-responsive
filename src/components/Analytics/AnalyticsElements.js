import styled from 'styled-components'

export const AnalyticsContainer = styled.div `
display: flex;
height: 340px;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;
border: 2px solid white;

@media screen and (max-width: 768px){
    height: 1100px;
}

@media screen and (max-width: 480px){
    height: 1300px;
}
`


export const AnalyticsWrapper = styled.div `
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width:768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`
export const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
}
`


export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
`

export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`


export const AnalyticsCard = styled.div `
background: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover {
    transition: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`

export const AnalyticsH1 = styled.h1 `
font-size: 1.5rem;
color: #fff;
margin-bottom: 10px;

@media screen and (max-width: 480px){
    font-size: 2rem;
}
`

export const AnalyticsH2 = styled.h2 `
font-size: 1rem;
margin-bottom: 10px;
`

export const AnalyticsP = styled.p `
font-size: 1rem;
margin-bottom: 10px;
`

