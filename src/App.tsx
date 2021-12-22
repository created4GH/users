import { useDispatch, useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';

import Pages from './components/Pages';
import Header from './components/Header';
import { IsAuthorizedSelector } from './redux/selectors';
import { Language } from './interfaces';
import { messages } from './intl/messages';
import { LOCALES } from './intl/locales';

import "./app.style.scss";
import { setLocalLanguage } from './redux/actions';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(IsAuthorizedSelector);
  const storedLanguage: Language = JSON.parse(localStorage.getItem("intl-lang")!);
  const language: Language = storedLanguage || LOCALES.ENGLISH;

  useEffect(() => { dispatch(setLocalLanguage(language)) }, [])

  return (
    <IntlProvider
      messages={messages[language.value]}
      locale={language.value}>
      <div className="App">
        {isAuthorized && <Header />}
        <Pages />
      </div>
    </IntlProvider>
  );
}

export default App;
