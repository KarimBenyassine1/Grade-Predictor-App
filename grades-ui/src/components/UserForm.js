import React, { Component } from 'react'
import FormFirstPage from "./FormFirstPage"
import FormSecondPage from "./FormSecondPage"
import Success from "./Success"
import axios from "axios"

export class UserForm extends Component {
    state = {
        step:1,
        formData : {activities: 0,
        current: 0,
        fedu: 0,
        higher: 0,
        internet: 0,
        medu: 0,
        schoolsup: 0,
        sex: 0,
        studytime: 1},
        result: "",
        isLoading: false,
        confirm : false,
    }
    
    nextStep = () =>{
        const {step} = this.state;
        this.setState({step: step+1})
    }

    prevStep = () =>{
        const {step} = this.state;
        this.setState({step: step-1})
    }

    confirmSubmit = () =>{
        const {formData,step, isLoading, result} = this.state
        const newCurrent = Math.ceil(formData.current/5)-3
        var someForm = {...formData}
        someForm.current = newCurrent
        console.log(someForm)
        this.setState({formData: someForm, confirm: true})
    }

    submitForm = () =>{
        const {formData,step, isLoading, result} = this.state
        this.setState({isLoading:true, step: step+1})
        axios.post('http://127.0.0.1:5000/grades', formData)
        .then(response => {
            console.log(response.data.status)
            this.setState({
                result: response.data.result,
                isLoading: false
            });
        }).catch(err =>{
            this.setState({
                result: "Does not work",
                isLoading: false
              });
        });
    }

    handleChange = (e) =>{
        const value = parseFloat(e.target.value);
        const name = e.target.name;
        var formData = this.state.formData;
        formData[name] = value;
        this.setState({
            formData
        });
        console.log(formData)
    }

    render() {
        const { step,result, isLoading, confirm} = this.state;
        const { formData } =  this.state;

        switch(step){
            
            case 1:
                return(
                    <FormFirstPage
                        nextStep = { this.nextStep }
                        handleChange = {this.handleChange}
                        confirm = {confirm}
                        formData = {formData}
                    />
                );
            case 2:
                return(
                    <FormSecondPage 
                        prevStep = { this.prevStep }
                        handleChange = {this.handleChange}
                        submitForm = {this.submitForm}
                        confirmSubmit = {this.confirmSubmit}
                        confirm = {confirm}
                        formData = {formData}
                    />
                )
            case 3:
                return(
                    <Success 
                    result = {result}
                    isLoading = {isLoading}/>
                )
        }
    }
}

export default UserForm
