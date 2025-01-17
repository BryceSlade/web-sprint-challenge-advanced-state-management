import React, { useState } from 'react';
import { connect } from 'react-redux';
import {setError, addSmurf} from './../actions';

const initialState = {
    name:"",
    position:"",
    nickname:"",
    description:"",
}

const AddForm = (props) => {

    // My application is working as expected, but it is not passing the codegrade test.

    const [state, setState] = useState(initialState)

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.setError('')
        if (state.name === "" || state.position === "" || state.nickname === "") {
            props.setError('Please fill out all forms')
        } else {
            props.addSmurf();
        }
        setState(initialState)
    }

    return(<section>
        <h2>Add Smurf</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label><br/>
                <input onChange={handleChange} value={state.name} name="name" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="position">Position:</label><br/>
                <input onChange={handleChange} value={state.position} name="position" id="position" />
            </div>
            <div className="form-group">
                <label htmlFor="nickname">Nickname:</label><br/>
                <input onChange={handleChange} value={state.nickname} name="nickname" id="nickname" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label><br/>
                <textarea onChange={handleChange} value={state.description} name="description" id="description" />
            </div>
            {
                props.errorMessage && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {props.errorMessage}</div>
            }
            <button>Submit Smurf</button>
        </form>
    </section>);
}

const mapStateToProps = state => {
    return {
        errorMessage: state.errorMessage
    }
}

export default connect(mapStateToProps, {setError, addSmurf})(AddForm);