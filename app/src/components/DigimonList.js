import React, { useEffect } from "react";
import Digimon from "./Digimon";

import { connect } from "react-redux";
import { fetchDigimon } from "../actions"

const DigimonList = (props)=>{

    useEffect(()=>{
        props.fetchDigimon();
    }, [])


    return(
        <div>
            <h1>Digimon, Digital Monsters! App</h1>
            <div className='container'>
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