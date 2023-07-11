import {createContext, useState} from 'react';
import settings from '../data/settings';
import messagesInitialData from '../data/initialMessages';

export const GlobalDataContext = createContext(undefined);

function GlobalData({children}) {
  const [messages, setMessages] = useState([...messagesInitialData]);
  const [feeds, setFeeds] = useState([]);
  const [arrayImages, setArrayImages] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [isChangeStatusBar, setChangeStatusBar] = useState(false);
  const [creditCardData, setCreditCardData] = useState([]);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    isChecked: false,
  });

  return (
    <GlobalDataContext.Provider
      value={{
        feeds,
        setFeeds,
        setMessages,
        messages,
        settings,
        arrayImages,
        setArrayImages,
        imageUrl,
        setImageUrl,
        userData,
        setUserData,
        loggedIn,
        setLoggedIn,
        setChangeStatusBar,
        isChangeStatusBar,
        creditCardData,
        setCreditCardData,
      }}>
      {typeof children === 'function' ? children() : children}
    </GlobalDataContext.Provider>
  );
}

export default GlobalData;
