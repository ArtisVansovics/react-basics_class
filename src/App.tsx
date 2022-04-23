import React from 'react';
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

// Jāuztaisa masīvs, kurš sastāv no 10 objektiem, kuros ir:
// krāsa
// apaļš/kantains
// rādīt/nerādīt
// teksts ja teksts ir rādīt to pa vidu
// ja nav tad rādīt "empty" un emty ir slīprakstā
const shapesArr = [
  {
    color: 'red',
    round: true,
    visible: true,
    text: '',
  },
  {
    color: 'blue',
    round: false,
    visible: true,
    text: 'Hello',
  },
  {
    color: 'gold',
    round: false,
    visible: true,
    text: 'Yes',
  },
  {
    color: 'green',
    round: true,
    visible: false,
    text: '',
  },
  {
    color: 'pink',
    round: true,
    visible: true,
    text: 'Maybe',
  },
  {
    color: 'lightblue',
    round: false,
    visible: true,
    text: '',
  },
  {
    color: 'gray',
    round: true,
    visible: false,
    text: 'So',
  },
  {
    color: 'lightgreen',
    round: true,
    visible: true,
    text: 'Im',
  },
  {
    color: 'coral',
    round: false,
    visible: false,
    text: '',
  },
  {
    color: 'cyan',
    round: true,
    visible: true,
    text: '',
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
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            {shapesArr
              // filter out all visible ('true') shapes
              .filter(({ visible }) => visible)
              .map(({
                color, round, text,
              }) => (
                <div
                  // React requires each list child element to have a unique key
                  key={Math.random()}
                  // add .round class, if round is 'true'
                  className={`shape ${round ? 'round' : ''}`}
                  style={{ backgroundColor: color }}
                >
                  {/* if text is not empty, add text value, otherwise add 'empty' */}
                  {text && text ? text : <em>Empty</em>}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
