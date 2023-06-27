import {createContext, useState} from 'react';
import settings from '../data/settings';

export const GlobalDataContext = createContext(undefined);

function GlobalData({children}) {
  const [messages, setMessages] = useState([
    {
      user: 1,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis. ',
    },
    {
      user: 0,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      user: 0,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      user: 1,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis. ',
    },
  ]);

  const [feeds, setFeeds] = useState([]);
  const [arrayImages, setArrayImage] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [loggedIn, setLoggedIn] = useState(true);
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
      }}>
      {typeof children === 'function' ? children() : children}
    </GlobalDataContext.Provider>
  );
}

export default GlobalData;
