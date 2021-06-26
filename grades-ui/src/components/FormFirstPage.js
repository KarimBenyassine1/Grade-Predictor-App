import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"
import TextField from '@material-ui/core/TextField';
import  RaisedButton from "material-ui/RaisedButton"
import './FormFirstPage.css'

export class FormFirstPage extends Component {
    continue = e =>{
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        const {formData, handleChange,confirm} = this.props;

        var yesOrNo = []
        for(var i = 0; i<=1; i++){
            yesOrNo.push(<option key = {i} value = {i}>{i===0 ? "No" : "Yes"}</option>)
        }

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Final Grade Predictor" style={{textAlign:"center"}}/>
                    <div className="form">
                        <TextField
                        required
                        className="field"
                        select
                        label="Sex"
                        value = {formData.sex}
                        onChange={handleChange}
                        disabled={(confirm)? true : false}
                        name = "sex"
                        helperText="What is your sex?"
                        >
                        <option value = {0}> Male </option>
                        <option value = {1}> Female </option>
                        </TextField>
                        <br />
                        <br />
                        <TextField
                        required
                        className="field"
                        select
                        label="Internet"
                        value = {formData.internet}
                        onChange={handleChange}
                        disabled={(confirm)? true : false}
                        name = "internet"
                        helperText="Do you have access to internet at home?"
                        >
                        {yesOrNo}
                        </TextField>
                        <br />
                        <br />
                        <TextField
                        required
                        className="field"
                        select
                        label="Higher Education"
                        value = {formData.higher}
                        onChange={handleChange}
                        disabled={(confirm)? true : false}
                        name = "higher"
                        helperText="Are you in higher education or plan to go?"
                        >
                        {yesOrNo}
                        </TextField>
                        <br />
                        <br />
                        <TextField
                        required
                        className="field"
                        select
                        label="Activities"
                        value = {formData.activities}
                        onChange={handleChange}
                        disabled={(confirm)? true : false}
                        name = "activities"
                        helperText="Are you in any extra-curricular activities?"
                        >
                        {yesOrNo}
                        </TextField>
                        <br />
                        <br />
                        <TextField
                        required
                        className="field"
                        select
                        label="Extra Educational Support"
                        value = {formData.schoolsup}
                        onChange={handleChange}
                        disabled={(confirm)? true : false}
                        name = "schoolsup"
                        helperText="Do you require extra educational support?"
                        >
                        {yesOrNo}
                        </TextField>
                        <br />
                        <RaisedButton label="Continue" 
                        primary={true} 
                        style={{margin: "15"}}
                        onClick = {this.continue}/>
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default FormFirstPage
