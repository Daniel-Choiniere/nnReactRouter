import React from 'react';
import Rainbow from '../hoc/rainbow';

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Materialize comes in two different forms. You can select which version you want depending on your preference and expertise. To start using Materialize, all you have to do is download one of the options below.</p>
        </div>
    );
};

// wrap the About component in the Rainbow higher order component (HOC) so that functionality/style is applied to it
export default Rainbow(About);