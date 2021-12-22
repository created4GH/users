import { useSelector } from "react-redux";
import { IntlProvider } from "react-intl";

import Pages from "./components/Pages";
import Header from "./components/Header";
import { IsAuthorizedSelector, localLanguageSelector } from "./redux/selectors";
import { Language } from "./interfaces";
import { messages } from "./intl/messages";

import "./app.style.scss";

const App : React.FC = () => {
  const isAuthorized = useSelector(IsAuthorizedSelector);
  const localLanguage = useSelector(localLanguageSelector);
  const language: Language = localLanguage;
  
  return (
    <IntlProvider messages={messages[language.value]} locale={language.value}>
      <div className="App">
        {isAuthorized && <Header />}
        <Pages />
      </div>
    </IntlProvider>
  );
}

export default App;
