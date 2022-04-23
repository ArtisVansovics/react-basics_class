import React, { FC } from 'react';
import './Hero.scss';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import Button from '../Button/Button';

type HeroProps = {
  title: string,
  description: string,
  buttonText: string
  onButtonClick: () => void;
}

const Hero:FC<HeroProps> = ({
  title, description, buttonText, onButtonClick,
}) => (
  <div className="hero">
    <Heading title={title} />
    <Paragraph text={description} />
    <Button
      text={buttonText}
      onClick={onButtonClick}
    />
  </div>
);

export default Hero;
