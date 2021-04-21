import React, {Component} from 'react'
import './Global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import NumberFormat from 'react-number-format'

import WorldStats from '../../Components/WorldStats/WorldStats'

export default class Global extends Component{
    
    state={
        result: {
            "confirmed" : 0,
            "recovered" : 0,
            "deaths" : 0
        }
    }

    async componentDidMount(){
        var globalData = await axios.get("https://covid19.mathdro.id/api")
        let covid = globalData.data
        console.log("Data: ",covid)

        this.setState({
            result: {
                "Confirmed" : covid.confirmed.value,
                "Recovered" : covid.recovered.value,
                "Deaths" : covid.deaths.value
            },
            "lastUpdate": covid.lastUpdate
        })
    }

    
    render(){

        var Stats = Object.keys(this.state.result).map((key, index) => {
            return <WorldStats
                        key={index}
                        about={key}
                        total={<NumberFormat value={this.state.result[key]} thousandSeparator={true} displayType="text" />}
                        last= {this.state.lastUpdate}/>
        })

        const Date = Object.keys(this.state.result).map((key, index) => {
            return console.log(this.state.result.lastUpdate)
        })

        

        return(
            <div className='Global'>
                <h1 className='judul-besar'> Perkembangan Covid 19 </h1>
                <h3 className='judul-global' >Global</h3>
                <div className= "world-stats">
                    {Stats}
                </div>
            </div>
        )
    }

}