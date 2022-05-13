import styled from "styled-components";

export const BodyContainer = styled.div `
    display: flex;
    justify-content: space-between;
`

export const LeftAside = styled.div `
        width: 30%;

        display: flex;
        flex-direction: column;
        gap: 30px;

        @media (max-width:768px) {
            border: solid red;
        }
`

export const UserCard = styled.div `
    height: 27%;

    justify-content: center;
    align-items: center;

    background-color: var(--card-color);

    border-radius: 10px;

    padding: 30px 50px 170px 55px;
    
    h1 {
        font-weight: bold;
        margin-bottom: 5%;
    }

`

export const Redirects = styled.div `
    display: flex;

    flex-direction: column;

    height: 12%;

    background-color: var(--card-color);

    border-radius: 10px;

    padding: 20px 35px;

    font-size: 12px;

    ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    li {
        display: flex;
        gap: 10px;
    }
`

export const Tecs = styled.div `
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 10%;

    background-color: var(--card-color);

    border-radius: 10px;

    padding-top: 30px;
    padding-bottom: 30px;

    ul {
        display: flex;
        flex-wrap: wrap;
        
        gap: 20px;

        justify-content: center;

        li {
            background-color: var(--techs-color);

            border-radius: 5px;
            color: #000;

            font-weight: 700;

            padding: 5px;
        }
    }
`   

export const Experiences = styled.div `
    display: flex;

    flex-direction: column;

    height: 15%;

    background-color: var(--card-color);

    border-radius: 10px;

    ul {
        padding: 0 35px;

    }

    li {
        list-style: disc;
    }

    h1 {
        padding: 15px 35px;
        font-weight: 700;
    }

    h4 {
        font-size: small;
        font-weight: 700;
    }


    p {
        font-size: smaller;

        :nth-child(3) {
            font-size: small;
            font-weight:700 ;
        }
    }

    footer {
        margin-top: 10px;
        text-decoration: double;
        padding: 10px 10px 10px 35px;
    }
`


export const Education = styled.div `
    display: flex;

    flex-direction: column;

    height: 21%;

    background-color: var(--card-color);

    border-radius: 10px;

    padding: 35px;
    padding-top: 20px;

    h1 {
        font-weight: 700;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 15px
    }

    li {
        list-style: disc;
    }

    h4 {
        font-size: small;
        font-weight: 700;
    }


    p {
        font-size: smaller;

        :nth-child(3) {
            font-weight:700;
        }
    }
`


export const PageContent = styled.div `
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const HorizonCard = styled.div `
    display: flex;
    justify-content: space-between;

    width: 100%;
    
    padding: 30px;

    border-radius: 10px;

    background-color: var(--card-color);

    h1{
        font-weight: 700;
    }

    a {
        font-size: small;
    }

    :nth-child(3) {
        justify-content: center;
    }
`

export const MainProjects = styled.div `
    display: flex;

    width: 100%;

    /* justify-content: space-between; */
    gap: 30px;
`

export const PLeft = styled.div `
    background-color: var(--card-color);


    width: 50%;

    border-radius: 10px;

    padding: 30px;
`

export const MiniHeader = styled.div `
    display: flex;
    gap: 15px;
    margin-bottom: 20px;

`

export const PRight = styled.div `
    background-color: var(--card-color);


    width: 50%;

    border-radius: 10px;

    padding: 30px;

`

export const AboutMe = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: fit-content;
    
    padding: 30px;

    border-radius: 10px;

    background-color: var(--card-color);

    h1 {
        font-weight: 700;
        margin-bottom: 10px;
    }
`