import React from 'react';
import Search from './search';
import Quicksearch from '../quicksearch/quicksearch';

const home = ()=>{
    return(
        <>
            <Search />
            <Quicksearch />
        </>
    )
}
export default home;