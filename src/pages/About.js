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
            </p>
            <br />

            <p>
                So I made this project following a video on Youtube made by (From Scratch - Développement Web)
                a french youtuber. I highly recommend those who begins in React like me to watch his videos and do some project like I did,
                because he explains very well and help us understanding better how everything in React works.
            </p>
            <br />
            <p>
                <h3>Details :</h3>
                Basically here you can notice that I used an API to get all world countries (key: name, capital, flag and the population).
                Thanks to that I displayed them in an input range with wich you can control how much of countries
                you want to see and from wich continent also, that it be Africa, America, Asia, Europe or Oceania.
            </p>
            <br />
            <p>
                Thanks for reading, Take care :)
                </p>
        </div>
    );
};

export default About;