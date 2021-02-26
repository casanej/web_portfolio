import { faAt, faCheck, fas } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components';
import { Container } from './components/container';

interface Props { }

export const Resume = (props: Props) => {
    return (
        <Container>
            <Content>
                <PersonalInfo>
                    <PersonalInfoPersonal>
                        <div> <h4>Rafael Casanje</h4> </div>
                        <div> <h5>Front-end Developer</h5> </div>
                    </PersonalInfoPersonal>
                    <PersonalInfoSkills>
                        <div>
                            <div>
                                <div>Residência:</div>
                                <div>Brasil</div>
                            </div>
                            <div>
                                <div>Cidade:</div>
                                <div>Rio de Janeiro</div>
                            </div>
                            <div>
                                <div>Idade:</div>
                                <div>22</div>
                            </div>
                        </div>
                        <Divider />
                        <div>
                            <div>
                                <div>Português:</div>
                                <div>Nativo</div>
                            </div>
                            <div>
                                <div>Inglês:</div>
                                <div>Intermediário</div>
                            </div>
                            <div>
                                <div>Espanhol:</div>
                                <div>Básico</div>
                            </div>
                        </div>
                        <Divider />
                        <div>
                            <h4>Hard Skills</h4>
                            <div>
                                <div>React</div>
                                <div>React Native</div>
                                <div>NodeJS</div>
                                <div>PHP</div>
                                <div>GIT</div>
                                <div>SASS</div>
                                <div>Typescript</div>
                                <div>Javascript</div>
                                <div>Django</div>
                                <div>Firebase</div>
                                <div>MongoDB</div>
                                <div>PostgreSQL</div>
                                <div>jQuery</div>
                            </div>
                        </div>
                        <Divider />
                        <div>
                            <h4>Soft Skills</h4>
                            <div>
                                <div>Boa comunicação</div>
                                <div>Colaboração</div>
                                <div>Relacionamento Interpessoal</div>
                                <div>Proativo</div>
                                <div>Autodidata</div>
                                <div>Concentrado</div>
                                <div>Atencioso</div>
                                <div>Engraçado</div>
                                <div>Autodisciplina</div>
                            </div>
                        </div>
                        <Divider />
                        <div>
                            <div>
                                <div> <FontAwesomeIcon icon={faCheck} /> Bootstrap</div>
                                <div> Materialize</div>
                            </div>
                            <div>
                                <div> <FontAwesomeIcon icon={faCheck} /> Sass</div>
                                <div> Styled Component</div>
                            </div>
                            <div>
                                <div> <FontAwesomeIcon icon={faCheck} /> Parcel</div>
                                <div> Webpack</div>
                                <div> Rollup</div>
                            </div>
                            <div>
                                <div> <FontAwesomeIcon icon={faCheck} /> Conhecimento em GIT </div>
                            </div>
                        </div>
                    </PersonalInfoSkills>
                    <PersonalInfoSocial>
                        <div> <a href="https://www.linkedin.com/in/rafael-casanje/" target='_blank' ><FontAwesomeIcon icon={faLinkedin} /></a> </div>
                        <div> <a href="https://github.com/casanej" target='_blank' ><FontAwesomeIcon icon={faGithub} /></a> </div>
                        <div> <a href="https://facebook.com/rafael.casanje" target='_blank' ><FontAwesomeIcon icon={faFacebook} /></a> </div>
                        <div> <a href="https://casanje.com" target='_blank' ><FontAwesomeIcon icon={faAt} /></a> </div>
                    </PersonalInfoSocial>
                </PersonalInfo>
                <PublicInfo>

                </PublicInfo>
            </Content>
        </Container>
    );
};

const Content = styled.div`
    display: flex;
    flex-wrap: nowrap;
`

const Divider = styled.div`
    background: #8c8c8e;
    width: 100%;
    height: 1px;
    opacity: .33;
    margin: 10px 0;
`

const PersonalInfo = styled.div`
    background-color: #20202a;
    width: 290px;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    line-height: 1.4em;
`

const PersonalInfoPersonal = styled.div`
    background: linear-gradient(159deg,rgba(37,37,50,.98) 0%,rgba(35,35,45,.98) 100%);
    height: 23%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #8c8c8e;
`

const PersonalInfoSkills = styled.div`
    height: 68%;
    padding: 20px;

    div:nth-child(1) {
        div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            div:nth-child(2) {
                color: #8c8c8e;
            }
        }
    }

    div:nth-child(3) {
        div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            div:nth-child(2) {
                color: #8c8c8e;
            }
        }
    }

    div:nth-child(5) {
        div {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            div {
                background-color: #8c8c8e;
                margin: 2.5px;
                padding: 0 5px;
                border-radius: 5px;
                font-size: 1em;
                line-height: 1.5em
            }
        }
    }

    div:nth-child(7) {
        div {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            div {
                background-color: #8c8c8e;
                margin: 2.5px;
                padding: 0 5px;
                border-radius: 5px;
                font-size: 1em;
                line-height: 1.5em
            }
        }
    }

    div:nth-child(9) {
        div {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            div {
                margin: 2.5px;
                padding: 0 5px;
                border-radius: 5px;
                font-size: 0.9em;
                line-height: 1.2em;
                color: #8c8c8e;

                svg {
                    margin-right: 10px;
                    color: #ffc107;
                }
            }
        }
    }
`

const PersonalInfoSocial = styled.div`
    background: linear-gradient(159deg,rgba(37,37,50,.98) 0%,rgba(35,35,45,.98) 100%);
    height: 5%;

    display: flex;
    justify-content: center;
    align-items: center;


    div {
        font-size: 1.5em;
        margin: 0 10px;
    }
`

const PublicInfo = styled.div`
    width: 80%;
`