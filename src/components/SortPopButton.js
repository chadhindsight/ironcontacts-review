import React from 'react';
import Button from 'react-bootstrap/Button';

const SortPopButton = (props) => {

    return <Button onClick={() => props.sortByPop()}>Sort By Popularity</Button>
};

export default SortPopButton;