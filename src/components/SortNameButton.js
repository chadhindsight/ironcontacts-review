import React from 'react';
import Button from 'react-bootstrap/Button';

const SortNameButton = (props) => {
    return (
        <>
            <Button variant="secondary" onClick={() => props.sortName()}>Sort By Name</Button>
        </>
    );
};

export default SortNameButton;