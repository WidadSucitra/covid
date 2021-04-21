import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './WorldStats.css'

const WorldStats = props => {
    return(
        <div className="worldStats-box">
            <div className="card box box-global">
                <div className="card-title c-title">
                <h1 className="about">{props.about}</h1>
                </div>
                <div className="card-body c-body text-center">
                <h1 className="totalNumbers">{props.total}</h1>
                </div>
            </div>
            
        </div>
    )
}

export default WorldStats;