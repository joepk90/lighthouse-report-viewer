import React, { Component } from 'react';
import getData from './../../service/getData';

class Table extends Component {

    componentDidMount = () => {

        (async() => {
            const data = await getData();
            console.log(data);
        })()
        
    }

    state = {  } 
    render() { 
        return (
            <p>test</p>
        );
    }
}


 
export default Table;