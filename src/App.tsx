import { useSelector } from "react-redux";
import { IntlProvider } from "react-intl";

import Pages from "./components/Pages";
import Header from "./components/Header";
import { isAuthorizedSelector, localLanguageSelector } from "./redux/selectors";
import { Language } from "./interfaces";
import { messages } from "./intl/messages";

import "./app.style.scss";

const App: React.FC = () => {
  const isAuthorized = useSelector(isAuthorizedSelector);
  const localLanguage : Language = useSelector(localLanguageSelector);

  return (
    <IntlProvider messages={messages[localLanguage.value]} locale={localLanguage.value}>
      <div className="App">
        {isAuthorized && <Header />}
        <Pages />
      </div>
    </IntlProvider>
  );
};

export default App;
