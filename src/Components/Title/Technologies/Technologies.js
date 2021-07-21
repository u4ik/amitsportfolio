import React from 'react';

import ReactIcon from '../../../Assets/Images/react.svg'
import Nodejs from '../../../Assets/Images/nodejs.svg'
import ScriptIcons from '../../../Assets/Images/ScriptIcons.png'
import PostgresIcon from '../../../Assets/Images/postgres.svg';
import SequelizeIcon from '../../../Assets/Images/sequelize.svg'
import BootstrapIcon from '../../../Assets/Images/bootstrap.svg'
import PythonIcon from '../../../Assets/Images/python.svg'
import MaterialUIIcon from '../../../Assets/Images/materialui.png'

const Technologies = () => {

    const icon1 = {
        minWidth: '100px',
        maxWidth: '200px',
        width: '100%',
        opacity: '.5',
        marginBottom: '',
        filter: 'drop-shadow(5px 5px 5px black)'
    }
    const icon2 = {
        minWidth: '60px',
        maxWidth: '200px',
        marginTop: '0%',
        width: '3.5%',
        opacity: '.5',
        marginBottom: '',
        filter: 'drop-shadow(5px 5px 5px black)'
    }

    const row2 = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 'fit-content',
        flexWrap:'wrap'
    }

    const row2icons = {
        width: '100%',
        minWidth: '40px',
        maxWidth: '70px',
        minHeight: '60px',
        maxHeight: '60px',
        margin:'1em',
        opacity: '.5',
        marginBottom: '.5em',
        filter: 'drop-shadow(5px 5px 5px black)'
    }

    return (
        <>
            <div style={{ marginBottom: '-1%' }}>

                <img className='icons' style={icon1} draggable='false' src={ScriptIcons} ></img>
                <img className='icons' style={icon2} draggable='false' src={PythonIcon} ></img>
            </div>

            <div style={row2}>
                <div >
                    <img className='icons' style={row2icons} draggable='false' src={Nodejs}></img>
                    <p>NodeJS</p>
                </div>

                <div >
                    <img className='icons' style={row2icons} draggable='false' src={BootstrapIcon}></img>
                    <p>Bootstrap</p>
                </div>

                <div >
                    <img className='icons' style={row2icons} draggable='false' src={MaterialUIIcon} ></img>
                    <p>MaterialUI</p>
                </div>

                <div >
                    <img className='icons' style={row2icons} draggable='false' src={ReactIcon}></img>
                    <p>React</p>
                </div>

                <div >
                    <img className='icons' style={row2icons} draggable='false' src={SequelizeIcon} ></img>
                    <p>Sequelize</p>
                </div>

                <div >
                    <img className='icons' style={row2icons} draggable='false' src={PostgresIcon} ></img>
                    <p>Postgres</p>
                </div>

            </div>
        </>
    )
}

export default Technologies