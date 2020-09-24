import React from 'react';

const SortNameButton = (props) => {
    return (
        <>
            <button onClick={() => props.sortName()}>Sort By Name</button>
        </>
    );
};

export default SortNameButton;