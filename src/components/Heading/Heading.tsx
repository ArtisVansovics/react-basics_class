import React, { FC } from 'react';
import './Heading.scss';

type HeadingProps = {
  title: string
}

const Heading:FC<HeadingProps> = ({ title }) => (
  <h2 className="heading">
    {title}
  </h2>
);

export default Heading;
