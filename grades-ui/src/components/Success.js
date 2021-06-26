import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"
import "./Success.css"


export class FormSecondPage extends Component {
    back = e =>{ 
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const {result,isLoading} = this.props;
        if(isLoading){
            return(
                <MuiThemeProvider>
                    <React.Fragment>
                    <AppBar title = "Final Grade Predictor" style={{textAlign:"center"}}/>
                    <div className="form">
                        <div className="loader"></div>
                    </div>
                    </React.Fragment>
                </MuiThemeProvider>
                
            )
        }
        else{
            return (
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title = "Final Grade Predictor" style={{textAlign:"center"}}/>
                        <div className="form">
                            <h1>Thank you for your submission!</h1>
                            <p>Your final grade is predicted to be: {result}</p>
                        </div>
                    </React.Fragment>
                </MuiThemeProvider>
            )
        }
    }
}

export default FormSecondPage
