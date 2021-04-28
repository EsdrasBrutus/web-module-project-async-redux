import React, { useEffect } from "react";
import Digimon from "./Digimon";

import { connect } from "react-redux";
import { fetchDigimon } from "../actions"

const logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Digimon_Logo.svg/1280px-Digimon_Logo.svg.png'

const DigimonList = (props)=>{

    useEffect(()=>{
        props.fetchDigimon();
    }, [])


    return(
        <div className='container'>
            <img src={logo} />
            <div className='digimon-container'>
                {props.digimon.map(item => (
                    <Digimon key={Date. now()} digimon ={item} />
                ))}
            </div>
        </div>
    )
    
}

const mapStateToProps =(state) => {
    return {
        digimon: state.digimon
    }
}

const mapDispatchToProps = {fetchDigimon}

export default connect(mapStateToProps, mapDispatchToProps)(DigimonList);