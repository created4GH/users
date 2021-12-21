import React from 'react';

import Pages from './components/Pages';

import "./app.style.scss";
import Header from './components/Header';
import { useSelector } from 'react-redux';
import { IsAuthorizedSelector } from './redux/selectors';

function App() {
  const isAuthorized = useSelector(IsAuthorizedSelector);

  return (
    <div className="App">
      {isAuthorized && <Header />}
      <Pages />
    </div>
  );
}

export default App;
