import React from 'react';

const styles = {
  container: {
    width: '100%',
    height: '92%'
  }
};

export default class Main extends React.Component {

  render() {
    return (
      <div style={styles.container}>
        <h1>Main.JS Header</h1>
        {this.props.children}
      </div>
    );
  }
}
