import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Article from './components/Article/Article';
import Hero from './components/Hero/Hero';

const articles = [
  {
    title: 'Heading',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    buttonText: 'Click me',
    onButtonClick: () => {
      console.log(1234);
    },
  },
  {
    title: 'Heading 2',
    description: 'Lorem ipsum dolor sit amet.',
    buttonText: 'Click me too',
    onButtonClick: () => {
      console.log(4321);
    },
  },
  {
    title: 'Heading 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit.',
    buttonText: 'Click me also',
    onButtonClick: () => {
      console.log(56789);
    },
  },
];

const App = () => (
  <div className="App">
    <div className="container">
      <div className="row center-xs">
        <div className="col-xs-12 col-sm-6">
          <div className="box">
            <Article
              title="Heading"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              buttonText="Click me"
              onButtonClick={() => {
                console.log(1234);
              }}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <Hero
              title="Heading 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              buttonText="Click me too"
              onButtonClick={() => {
                console.log(1234);
              }}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            {articles.map(({
              title, description, buttonText, onButtonClick,
            }) => (
              <Article
                title={title}
                description={description}
                buttonText={buttonText}
                onButtonClick={onButtonClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
