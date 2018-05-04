import React, { Component } from 'react';
import Dummy from './dummy.component.js';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const dummyMessageQuery = gql`
{
    dummy{
        message
    }
}`;

class DummyQuery extends Component {
    render(){
        return(
            <Query query={dummyMessageQuery}>
                {({ loading, error, data }) => {
                    if(loading) return (<p>Loading...</p>)
                    if(error) return (<p>Error :( </p>)
                        
                    return (<Dummy loading={loading} error={error} dummy={data.dummy} />);
                }}
            </Query>
        )}
};

export default DummyQuery;