import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"
import TextField from '@material-ui/core/TextField';
import  RaisedButton from "material-ui/RaisedButton"

export class FormSecondPage extends Component {
    back = e =>{
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const {formData, handleChange, submitForm, confirmSubmit, confirm} = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Final Grade Predictor" style={{textAlign:"center"}}/>
                    <div className="form">
                        <TextField
                            required
                            className="field"
                            select
                            label="Mother's education"
                            value = {formData.medu}
                            onChange={handleChange}
                            name = "medu"
                            disabled={(confirm)? true : false}
                            helperText="Select highest mother education"
                        >
                            <option value = {0}> None </option>
                            <option value = {1}> elementary school </option>
                            <option value = {2}> middle school </option>
                            <option value = {3}> high school </option>
                            <option value = {4}> higher education </option>
                        </TextField>
                        <br />
                        <br />
                        <TextField
                            required
                            className="field"
                            select
                            label="Father's education"
                            value = {formData.fedu}
                            onChange={handleChange}
                            name = "fedu"
                            disabled={(confirm)? true : false}
                            helperText="Select highest father education"
                        >
                            <option value = {0}> None </option>
                            <option value = {1}> elementary school </option>
                            <option value = {2}> middle school </option>
                            <option value = {3}> high school </option>
                            <option value = {4}> higher education </option>
                        </TextField>
                        <br />
                        <br />
                        <TextField
                            required
                            className="field"
                            select
                            label="Study Time"
                            value = {formData.studytime}
                            onChange={handleChange}
                            name = "studytime"
                            disabled={(confirm)? true : false}
                            helperText="How long do you study each week?"
                        >
                            <option value = {1}> 0 to 2 hours </option>
                            <option value = {2}> 2 to 5 hours </option>
                            <option value = {3}> 5 to 10 hours </option>
                            <option value = {4}> more than 10 hours </option>
                        </TextField>
                        <br />
                        <br />
                        <TextField
                            required
                            className="field"
                            label="Current Grade"
                            value = {formData.current}
                            onChange={handleChange}
                            name = "current"
                            type="number"
                            min={0}
                            max={100}
                            disabled={(confirm)? true : false}
                            helperText="Current grade percent in class? (0-100)"
                        />
                        <br />
                        <div style={{display:"flex"}}>
                            <RaisedButton label="Back" 
                            primary={false} 
                            style={{margin: "15", marginRight:"20px"}}
                            onClick = {this.back}/>
                            <RaisedButton label="Confirm" 
                            primary={true} 
                            style={{margin: "15", marginRight:"20px"}}
                            onClick = {confirmSubmit}/>
                            <RaisedButton label="Submit" 
                            primary={true} 
                            disabled={(0<=formData.current &&formData.current<=100 && confirm)? false : true}
                            style={{margin: "15"}}
                            onClick = {submitForm}/>
                        </div>
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormSecondPage
