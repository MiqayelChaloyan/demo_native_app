import {createContext, useState} from 'react';
import settings from '../data/settings';
import messagesInitialData from '../data/initialMessages';

export const GlobalDataContext = createContext(undefined);

function GlobalData({ children }) {
  const [messages, setMessages] = useState([...messagesInitialData]);
  const [feeds, setFeeds] = useState([]);
  const [arrayImages, setArrayImage] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [loggedIn, setLoggedIn] = useState(true);
  const [isChangeStatusBar, setChangeStatusBar] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
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
        setArrayImage,
        imageUrl,
        setImageUrl,
        userData,
        setUserData,
        loggedIn,
        setLoggedIn,
        setChangeStatusBar,
        isChangeStatusBar
      }}>
      {typeof children === 'function' ? children() : children}
    </GlobalDataContext.Provider>
  );
}

export default GlobalData;
