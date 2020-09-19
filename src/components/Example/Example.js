import React from 'react';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import Example4 from './Example4';
import './Example.scss';

const Example = () => {
    return (
        <div className="card example-component-wrapper shadow--md">
            <div className="card__body py-5">
                <Example1/>
                <Example2/>
                <Example3/>
                <Example4/>
            </div>
        </div>
    );
};

export default Example;