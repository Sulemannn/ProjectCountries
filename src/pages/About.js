import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <h1>About us</h1>
            <br />

            <p>
                Hello, my name is Suleman. Currently beginning in React,
                I wanted to make a little project to learn more about it and understand better the way it works.
                <br/>
                So I made this project following a video on Youtube :)
            </p>

        </div >
    );
};

export default About;