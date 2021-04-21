import React, {Component} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import CountUp from 'react-countup'
import PickCountries from './PickCountries'

import'./Countries.css'


export default class Countries extends Component{
    constructor(props){
        super(props);
        this.state={
            confirm : null,
            deaths: null,
            recovered : null,
            lastupdate: null,
            country: null
        }
    }
    handleCountryChange=(country)=>{
        axios.get("https://covid19.mathdro.id/api/countries/" + country)
        .then(response=>{
            this.setState({
                confirm: response.data.confirmed.value,
                recovered: response.data.recovered.value,
                deaths: response.data.deaths.value,
                lastupdate: response.data.lastUpdate
            })
        })
    }
    componentDidMount(){
        this.getData();
    }

    getData=()=>{
        axios.get('https://covid19.mathdro.id/api/countries/ID')
        .then(response=>{
            this.setState({
                confirm: response.data.confirmed.value,
                recovered: response.data.recovered.value,
                deaths: response.data.deaths.value,
                lastupdate: response.data.lastUpdate
            })
        })
        .catch(error=>{
            console.log(console.error.response)
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="corona-body">
                    <center>
                        <p className="lastupdate">
                                last update: {new Date(this.state.lastupdate).toDateString()}
                        </p>
                    </center>
                    <PickCountries handleCountryChange={this.handleCountryChange} className="search" />
                    <div className= "container">
                        <div className="card-deck card-decks">
                            <div className="card confirm box">
                                <div className="card-title c-title">
                                    <center>Confirmed</center>
                                </div>
                                <div className="card-body c-body text-center">
                                    <CountUp
                                        start={0}
                                        end={this.state.confirm}
                                        duration={1}
                                        separator=","
                                        className="number"
                                    />
                                </div>
                            </div>
                            <div className="card recovered box">
                                <div className="card-title c-title">
                                    <center>Recovered</center>
                                </div>
                                <div className="card-body c-body text-center">
                                    <CountUp
                                        start={0}
                                        end={this.state.recovered}
                                        duration={1}
                                        separator=","
                                        className="number"
                                    />
                                </div>
                            </div>
                            <div className="card deaths box">
                                <div className="card-title c-title">
                                    <center>Deaths</center>
                                </div>
                                <div className="card-body c-body text-center">
                                    <CountUp
                                        start={0}
                                        end={this.state.deaths}
                                        duration={1}
                                        separator=","
                                        className="number"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}