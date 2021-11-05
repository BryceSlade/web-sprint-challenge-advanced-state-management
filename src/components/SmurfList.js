import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';

const SmurfList = (props)=> {

    const {smurfs, isLoading} = props;

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(
    <div className="listContainer">
        {
            smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf}/>)
        }  
    </div>);
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(SmurfList);