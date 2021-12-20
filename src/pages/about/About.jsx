import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="container">
      <div className="about__container">
        <img
          src="https://scontent.flim19-1.fna.fbcdn.net/v/t1.6435-9/97064433_10222786013588766_3925447160463622144_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHpffQEcUwlaeubfrw35GRVuR65ZYgwK1e5HrlliDArV2LRSBy9ZhwZb2PCk7_OyFo&_nc_ohc=k37YIfXobsQAX8odFGF&tn=suglAIaarO9sWgnD&_nc_ht=scontent.flim19-1.fna&oh=00_AT9e5q-uIMohx7aL22iwAGKZoCGnP6g6TeMkdkI1QFCGAw&oe=61E3BFFD"
          alt=""
          className="about__image"
        />
        <div className="about__body">
          <h2 className="about__name">Hi ! My name is Walther Vergaray</h2>
          <p className="about__description">
            I am a student at <b>MakeItReal</b> Bootcamp, currently i am
            studying to be a <i>Full Stacker JS developer </i> . I like to
            discover new things about programming, i want to absorb all the
            knowledge from my teachers. I like to dance salsa and bachata, play
            some sports like futbol and play videogames like World of Warcraft,
            Dota 2, New Word and more...
          </p>
          <p className="about__things">Things i learn in this program:</p>
          <ul className="about__list">
            <li>Work with a team</li>
            <li>Do research to solve problems</li>
            <li>Implementing best practices in my code</li>
          </ul>
          <div className="about__email">
            <img src="./envelope-regular.svg" alt="" className="email__icon" />
            <p>walther.vergaray@gmail.com</p>
          </div>
          <div className="about__github">
            <img src="./github-brands.svg" alt="" className="github__icon" />
            <a href="https://github.com/worerxd">https://github.com/worerxd</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
