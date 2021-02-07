import React from 'react'
import './Projects.css'
import { MDBAnimation } from 'mdbreact'
import SpaceInvaderThumbnail from '../../Assets/Images/projectthumbnails/invaderthumbnail.png'
import PokemonThumbnail from '../../Assets/Images/projectthumbnails/pokemonthumbnail.png'
import JotterThumbnail from '../../Assets/Images/projectthumbnails/jotterthumbnail.png'
import NetFlixThumbnail from '../../Assets/Images/projectthumbnails/netflixthumbnail.png'
import FishNETThumbnail from '../../Assets/Images/projectthumbnails/fishnetthumbnail.png'
import PremierThumbnail from '../../Assets/Images/projectthumbnails/premierthumbnail.png'
const Projects = () => {
    return (
        <>


            <h1 style={{ textShadow: '2px 2px 1px black', marginTop: '2%' }}>Projects</h1>
            {/* <MDBAnimation type='fadeInUp' duration='1s' style={{ pointerEvents: 'none' }}> */}
                <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', marginBottom: '2%', marginTop: '2%' }}>



                    {/* FishNET Project */}
                    <div >
                        <div className="projectWrap" style={{ zIndex: 15, opacity: 1 }}>
                            <div className="projectImageContent">
                                <a href="https://www.fishnetworld.com">
                                    <img className="projectImage" src={FishNETThumbnail} id="" alt="" />
                                    <div className="overlay">
                                        <h1 className='projectTitle'>FishNET</h1>
                                        <p className="projectAbout">Commercial social media web application for aquarists. </p>
                                    </div>
                                </a>
                            </div>

                        </div>

                        <h3 className='figure-caption' style={{ color: 'white', fontSize: '1.2em', opacity: '.8', textShadow: '1px 1px 1px black' }}>FishNET</h3>
                        <figcaption className="figure-caption text-center">
                            PERN full stack application, created and managed by me.
                    </figcaption>

                    </div>






                    {/* NetFlix Project */}
                    <div>
                        <div className="projectWrap" style={{ zIndex: 5, opacity: 1 }}>
                            <div className="projectImageContent">
                                <a href="https://u4ik.github.io/StaticLayout/">
                                    <img className="projectImage" src={NetFlixThumbnail} id="" alt="" />
                                    <div className="overlay">
                                        <h1 className='projectTitle'>Netflix Static</h1>
                                        <p className="projectAbout">Netflix home page static layout, HTML/CSS.</p>
                                    </div>
                                </a>
                            </div>

                        </div>

                        <h3 className='figure-caption' style={{ color: 'white', fontSize: '1.2em', opacity: '.8', textShadow: '1px 1px 1px black' }}>Netflix Static</h3>
                        <figcaption className="figure-caption text-center">
                            Netflix home page static layout, HTML/CSS.
                    </figcaption>

                    </div>

                    {/* Space Invader */}
                    <div>
                        <div className="projectWrap" style={{ zIndex: 5, opacity: 1 }}>
                            <div className="projectImageContent">
                                <a href="https://u4ik.github.io/Space-Invader/">
                                    <img className="projectImage" src={SpaceInvaderThumbnail} id="" alt="" />
                                    <div className="overlay">
                                        <h1 class='projectTitle'>Space Invader</h1>
                                        <p class="projectAbout">A space invader animated with CSS.</p>
                                    </div>
                                </a>
                            </div>

                        </div>

                        <h3 className='figure-caption' style={{ color: 'white', fontSize: '1.2em', opacity: '.8', textShadow: '1px 1px 1px black' }}>Space Invader CSS</h3>
                        <figcaption className="figure-caption text-center">
                            A space invader animated with CSS.
                    </figcaption>

                    </div>

                    {/* Pokemon API */}
                    <div>
                        <div className="projectWrap" style={{ zIndex: 5, opacity: 1 }}>
                            <div className="projectImageContent">
                                <a href="https://u4ik.github.io/PokemonAPIReact/">
                                    <img className="projectImage" src={PokemonThumbnail} id="" alt="" />
                                    <div className="overlay">
                                        <h1 class='projectTitle'>Pokemon</h1>
                                        <p class="projectAbout">Pokemon API web app built with React.</p>
                                    </div>
                                </a>
                            </div>

                        </div>

                        <h3 className='figure-caption' style={{ color: 'white', fontSize: '1.2em', opacity: '.8', textShadow: '1px 1px 1px black' }}>Pokemon API</h3>
                        <figcaption className="figure-caption text-center">
                            Pokemon API web app built with React.
                    </figcaption>

                    </div>

                    {/* Jotter */}
                    <div>
                        <div className="projectWrap" style={{ zIndex: 5, opacity: 1 }}>
                            <div className="projectImageContent">
                                <a href="https://jotter-app-client.herokuapp.com/">
                                    <img className="projectImage" src={JotterThumbnail} id="" alt="" />
                                    <div className="overlay">
                                        <h1 class='projectTitle'>Jotter</h1>
                                        <p class="projectAbout">Personal notes client/server PERN web app.</p>
                                    </div>
                                </a>
                            </div>

                        </div>

                        <h3 className='figure-caption' style={{ color: 'white', fontSize: '1.2em', opacity: '.8', textShadow: '1px 1px 1px black' }}>Jotter</h3>
                        <figcaption className="figure-caption text-center">
                            Personal notes client/server PERN web app.
                    </figcaption>

                    </div>

                    {/* Premier */}
                    <div>
                        <div className="projectWrap" style={{ zIndex: 5, opacity: 1 }}>
                            <div className="projectImageContent">
                                <a href="https://premier-client.herokuapp.com/">
                                    <img className="projectImage" src={PremierThumbnail} id="" alt="" />
                                    <div className="overlay">
                                        <h1 class='projectTitle'>Premier Commercial Services</h1>
                                        <p class="projectAbout">PERN web app. Client/Server for a cleaning company. User Signup-Login/Admin Account/Database Encryption/Testimonials/Orders/. </p>
                                    </div>
                                </a>
                            </div>

                        </div>

                        <h3 className='figure-caption' style={{ color: 'white', fontSize: '1.2em', opacity: '.8', textShadow: '1px 1px 1px black' }}>Premier Commercial Services</h3>
                        <figcaption className="figure-caption text-center">
                            PERN web app, for a cleaning company.
                    </figcaption>

                    </div>








                </div>
            {/* </MDBAnimation> */}


        </>
    )
}


export default Projects;