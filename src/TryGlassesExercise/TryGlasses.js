import React, { Component } from 'react'
import dataGlasses from '../Data/dataGlasses.json'
import './TryGlasses.css'

export default class TryGlasses extends Component {


    state = {
        glassesCurrent: {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    renderGlassesList = () => {
        return dataGlasses.map((item, index) => {
            return <img  onClick={()=>{this.changeGlasses(item)}} className="ml-3 border border-color-width-1" style={{ width: '100px', cursor: 'pointer' }} key={index} src={item.url} alt='glasses'/>
        })
    }

    changeGlasses = (newGlasses) => {
        this.setState({
            glassesCurrent: newGlasses
        })
    }

    render() {

        const keyFrame =  ` @keyframes animChangeGlasses${Date.now()} {

            from {
                width: 0;
                transform: rotate(45deg);
                opacity: 0;
            }
            to {
                width: 150px;
                transform: rotate(0deg);
                opacity: 0.8;
            }
            
        }`;
        

        const styleGlasses = {
            opacity: '0.8',
            width: '150px',
            top: '74px',
            left: '211px',
            transform: 'rotate(0deg)',
            animation: `animChangeGlasses${Date.now()} 1s`,
        }
        const descGlasses = {
            backgroundColor: 'rgba(255,127,0,.5)',
            width: '44%',
            bottom: '-1px',
            right: '159px',
            textAlign: 'left',
        }


        return (
            <div style={{ backgroundImage: "url(./glassesImage/background.jpg)", minHeight: "2000px" }}>
                <div style={{ backgroundColor: 'rgba(0,0,0,.7)', minHeight: "2000px" }}>
                    <style>
                        {keyFrame}
                    </style>

                    <h3 style={{ backgroundColor: 'rgba(148,0,211,.3)' }} className="text-center p-5 text-light">TRY GLASSES APP ONLINE</h3>

                    <div className="container">
                        <div className="row mt-5">

                            <div className="col-6">
                                {/* <div className="position-relative"> */}
                                <img className="position-relative" style={{ width: '250px' }} src="./glassesImage/model.jpg" alt="model" />
                                <img style={styleGlasses} className="position-absolute glassesStyle" src={this.state.glassesCurrent.url} alt="glasses" />
                                {/* </div> */}
                                <div style={descGlasses} className="position-absolute font-weight-bold ">
                                    <span style={{ color: '#AB82FF', fontSize: '17px' }}>{this.state.glassesCurrent.name}</span>
                                    <p style={{ fontSize: '13px', fontWeight: "400" }}>{this.state.glassesCurrent.desc}</p>

                                </div>
                            </div>
                            <div className="col-6">
                                <img style={{ width: '250px' }} src="./glassesImage/model.jpg" alt="model" />
                            </div>

                        </div>

                        {/* <div className="col-12">


                        </div> */}
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-12 bg-light container text-center d-flex justify-content-center mt-5 p-5">
                                {this.renderGlassesList()}
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        )
    }
}
