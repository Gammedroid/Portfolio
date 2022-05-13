import React, { useEffect } from "react";

//Imagens
import Github from '../../assets/icons/Portfolio/github.svg'
import Linkedin from '../../assets/icons/Portfolio/linkedin.svg'
import Email from '../../assets/icons/Portfolio/mail.svg'
import Folder from '../../assets/icons/Portfolio/folder.svg'

//Styles
import {
    BodyContainer,
    LeftAside,
    UserCard,
    Redirects,
    Tecs,
    Experiences,
    Education,
    PageContent,
    HorizonCard,
    MainProjects,
    PLeft,
    MiniHeader,
    PRight,
    AboutMe
} from './styles'


const User = {
    name: 'Gustavo de Medeiros Gomes',
    img: <img src= 'https://avatars.githubusercontent.com/u/51789731?v=4' className=" rounded-full w-44 h-44 border-solid border-4 border-border-user mb-6 ml-10 max-w-3xl  "/>,
    descp: 'Iniciante em Desenvolvimento Front-End'
}

export function Home() {
    return (
        <BodyContainer>
            <LeftAside>
               <UserCard>
                    <span>{User.img}</span>
                    <h1>{User.name}</h1>
                    <p>{User.descp}</p> 
               </UserCard>

                <Redirects>
                    <nav>
                        <ul>
                            <li><img src={Github}/><a href='https://github.com/Gammedroid' target={"_blank"}>Gammedroid</a></li>
                            <li><img src={Linkedin}/><a href='https://www.linkedin.com/in/gustavo-de-medeiros-gomes-13579a1a2/' target={"_blank"}>Gustavo de Medeiros Gomes</a></li>
                            <li><img src={Email}/>gustavodemedeirosgomes@gmail.com</li>
                        </ul>
                    </nav>
                </Redirects>

                <Tecs>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JAVASCRIPT</li>
                        <li>REACTJS</li>
                    </ul>
                </Tecs>

                <Experiences>
                    <h1>Experiências</h1>

                    <ul>
                        <li>
                            <h4>Ada lovelace Software House</h4>
                            <p>Fevereiro - Maio (2022)</p>
                            <p>Bolsista em Desenvolvimento</p>
                        </li>
                    </ul>

                    <footer>
                    <p><em>Para ver as experiências fora da área de tecnologia clique aqui = <a href="#" className="underline p-0">em breve</a></em></p>
                    </footer>
                </Experiences>

                <Education>
                    <h1>Educação</h1>

                    <ul>
                        <li>
                            <h4>UNISATC</h4>
                            <p>2022 - Atualmente</p>
                            <p>Engenharia de Software</p>
                        </li>

                        <li>
                            <h4>E.E.B. Salete Scotti dos Santos</h4>
                            <p>2018 - 2020</p>
                            <p>Ensino Médio</p>
                        </li>


                        <li>
                            <h4>E.M.E.F Tranquilo Pissetti</h4>
                            <p>2009 - 2017</p>
                            <p>Ensino Fundamental</p>
                        </li>
                    </ul>
                </Education>
            </LeftAside>

            <PageContent>
                <HorizonCard>
                    <h1>Meus projetos</h1>
                    <a href="https://github.com/Gammedroid?tab=repositories" className="underline" target={"_blank"}>Veja todos</a>
                </HorizonCard>

                <MainProjects>
                    <PLeft>
                        <MiniHeader>
                            <img src={Folder}></img>
                            <h1><a href="https://github.com/Gammedroid/Latte-Coffee" target={'_blank'}>Latte Coffee</a></h1>
                            </MiniHeader>

                            <p>Projeto desafio nascido do Projeto Aula do curso Origins, proveniente da Rocketseat.</p>
                    </PLeft>

                    <PRight>
                        <MiniHeader>
                            <img src={Folder}></img>
                            <h1><a href="https://github.com/Gammedroid/React-Blog" target={"_blank"}>React Blog</a></h1>
                        </MiniHeader>
                        <p>Projeto de Blog fictício construído em HTML e CSS com o framework ReactJS em base TypeScript.</p>
                    </PRight>
                </MainProjects>

                <AboutMe>
                    <h1>Um pequeno resumo sobre mim</h1>

                    <p>Sempre gostei muito de codar. Tive a primeira experiência aproximadamente entre os 14 a 15 anos. Na época fiz parte do curso de Front-end no Alura onde obtive conhecimentos básicos sobre HTML5 e CSS3. Anos depois ingressei na faculdade de Engenharia de Software pelo fato dessa ser uma área da qual sempre gostei e tive interesse, porém poucas oportunidade.</p>

                    <p>Já na faculdade, fui convidado a trabalhar na empresa <a href="https://www.adalovelace.com.br/" target={"_blank"}>Ada Lovelace Software House</a> e foi lá onde tive um contato mais próximo e vívido com as linguagens de programção.</p>
                    
                    <h1 className="mt-6">O que estou estudando e tenho interesse?</h1>

                    <p>Estou estudando as linguagens HTML5, CSS3, JavaScript, Typescript e o framework React. Tenho interesse pela área de Front-End, e busco por novos desafios além de aprendizado constantes. </p>
                </AboutMe>

            </PageContent>
        </BodyContainer>
    )
}

function data(data: any) {
    throw new Error("Function not implemented.");
}