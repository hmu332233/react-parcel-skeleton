import React from 'react';
import styles from '../styles/styles.scss';
import { connect } from 'react-redux';
import { CountView } from '../components';
import App from '../containers/App';
import { increment } from '../actions';
import { Menus } from '../components';

class Count  extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Menus />
        <div>path: /count</div>
        <App />
      </div>
    );
  }
}

export default Count;