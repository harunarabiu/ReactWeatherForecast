import React, { Component } from 'react';
import { Container, Control, Label, Field } from 'bloomer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from './../actions';

class Search extends Component {

    constructor(props){
        super(props);
        this.state={
            term: '',
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e){
        e.preventDefault();
        
        this.props.fetchWeather(this.state.term)
        console.log(this.searchText.value)
    }

    handleChange (e){
        this.setState ({
            term: e.target.value
        })
        console.log(e.target.value);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} action="#">
                    <Field>
                        <Label>Name</Label>
                        <Control>
                            <input type="text" className="input" placeholder='Enter City' ref={(input) => { this.searchText = input; }} onChange={this.handleChange} />
                        </Control>
                    </Field>
                </form>
            </div>
            
        );

    }


}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}


export default connect(null, mapDispatchToProps)(Search);