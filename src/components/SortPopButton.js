import React from 'react';

const SortPopButton = (props) => {

    return <button onClick={() => props.sortByPop()}>Sort By Popularity</button>
};

export default SortPopButton;