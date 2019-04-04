import React from 'react'

// adding the props parameter you get access to a lot of methods and properties of the user action performed usign react-router
const Contact = (props) => {
    // setTimeout(() => {
    //     //  below is a progrmmatic redirect. waits three seconds than redirects to the about component
    //     props.history.push('/about');
    // }, 3000);
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Materialize comes in two different forms. You can select which version you want depending on your preference and expertise. To start using Materialize, all you have to do is download one of the options below.</p>
        </div>
        );
};

export default Contact;