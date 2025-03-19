import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <h1 className="about-title">Welcome to Toy Kingdom!</h1>
        <h2 className="about-subtitle">Where Imagination Runs Wild!</h2>

        <p className="about-text">
          At Toy Kingdom, we believe in the magic of play. Our kingdom is filled with a wondrous assortment of toys that spark creativity, ignite imaginations, and bring joy to children of all ages.
        </p>

        <p className="about-text">
          We are more than just a toy store; we are a kingdom of fun! We scour the globe to bring you the most unique and exciting toys, from classic board games and cuddly stuffed animals to the latest tech-savvy gadgets and thrilling outdoor adventures.
        </p>

        <h3 className="about-mission-title">Our Mission:</h3>
        <ul className="about-mission-list">
          <li className="about-mission-item">To create a magical experience for every child and their family.</li>
          <li className="about-mission-item">To provide a wide selection of high-quality toys.</li>
          <li className="about-mission-item">To offer exceptional customer service.</li>
          <li className="about-mission-item">To create a fun and engaging shopping experience.</li>
        </ul>

        <h3 className="about-more-than-toys-title">More Than Just Toys:</h3>
        <ul className="about-more-than-toys-list">
          <li className="about-more-than-toys-item">
            <strong>Foster creativity and imagination:</strong> Let your child's mind wander and explore new worlds through the magic of play.
          </li>
          <li className="about-more-than-toys-item">
            <strong>Develop social and emotional skills:</strong> Playing with others helps children learn to share, cooperate, and build friendships.
          </li>
          <li className="about-more-than-toys-item">
            <strong>Encourage physical activity:</strong> From outdoor toys to interactive games, we offer plenty of opportunities for active play.
          </li>
        </ul>

        <h4 className="about-call-to-action">So come explore the kingdom and discover the joy of play!</h4>
        <h5 className="about-call-to-action">Visit us today and let the adventures begin!</h5>

        <h5>WWW.TOYKINGDOM.COM</h5>
      </div>
    </div>
  );
};

export default About;