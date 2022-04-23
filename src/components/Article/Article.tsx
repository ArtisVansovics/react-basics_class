import React, { FC } from 'react';
import './Article.scss';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import Button from '../Button/Button';

type ArticleProps = {
  title: string,
  description: string,
  buttonText: string
  onButtonClick: () => void;
}

const Article:FC<ArticleProps> = ({
  title, description, buttonText, onButtonClick,
}) => (
  <div className="article">
    <img
      className="article__picture"
      src="https://picsum.photos/200"
      alt="article"
    />
    <Heading title={title} />
    <Paragraph text={description} />
    <Button
      text={buttonText}
      onClick={onButtonClick}
    />
  </div>
);

export default Article;
