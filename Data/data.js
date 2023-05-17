import React, {createContext, useState} from 'react';

export const DNAdataContext = createContext(undefined);

function DNAdata({children}) {
  const [feedData, setFeedData] = useState([
    {
      title: 'GAZELLE SHOES',
      message:
        'With their classic suede design and plethora of effortless yet elevated styling options, Gazelle shoes feel more relevant today than ever. This iteration takes their inspiration from the 1991 version in an exact replica, featuring authentic materials, a T-toe design and a molded tongue. Step out in time-honored style.',
      imageUri:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b0fd05cae60a48a6bd20c800cb0b8636_9366/Gazelle_Shoes_Blue_IG0666_HM1.jpg',
      createdData: new Date('2022-01-01'),
      id: 1,
    },
    {
      title: 'ULTRABOOST',
      message:
        'Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date and boasts a 10% lower carbon footprint than previous models (for more information see FAQs below). With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
      imageUri:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0fbed4646c1d46e0aae0af6901301ff4_9366/Ultraboost_Light_Running_Shoes_White_HQ6351_01_standard.jpg',
      createdData: new Date('2020-08-14'),
      id: 2,
    },
    {
      title: 'FORUM LOW CL X',
      message:
        'Clearly retro and undeniably fresh. Make an impression in these adidas Forum shoes that mix `80s hoops heritage with modern energy. They may have roots on the hardwood, but these sneakers are poised to make new moves. So lace in and look good while you get after your day.',

      imageUri:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/94c39d2867404df293a7af5b0105eef2_9366/Forum_Low_CL_x_Indigo_Herz_Shoes_White_IE1855_HM1.jpg',
      createdData: new Date('2012-07-01'),
      id: 3,
    },
    {
      title: 'FORUM LOW SHOES',
      message:
        'Welcome to a new age of originality. Inspired by the adidas Originals-owned NFT, the Indigo Herz Drop is an invitation to self-express without limitations. No matter which world you`re in.Step into the Metaverse in the Forum Low CL x Indigo Herz Shoes. Cloaked in the signature colors of Indigo Herz, the court-inspired shoes nod to OG with a classic silhouette and iconic layering. A translucent yellow outsole and inverted Trefoil logo bring the bold, optimistic vibes from an alternative reality. ',
      imageUri:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2547ff40b3f47818118aed2015e64c6_9366/Forum_Low_Shoes_Black_FZ5891_01_standard.jpg',
      createdData: new Date('2023-04-20'),
      id: 4,
    },
  ]);

  const [marketData, setMarketData] = useState([
    {
      title: 'GAZELLE SHOES',
      imageUri:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b0fd05cae60a48a6bd20c800cb0b8636_9366/Gazelle_Shoes_Blue_IG0666_HM1.jpg',
      price: '$19.99',
      id: '1',
    },
    {
      title: 'ULTRABOOST',
      imageUri:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0fbed4646c1d46e0aae0af6901301ff4_9366/Ultraboost_Light_Running_Shoes_White_HQ6351_01_standard.jpg',
      price: '$19.99',
      id: '2',
    },
    {
      title: 'FORUM LOW CL X',
      imageUri:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/94c39d2867404df293a7af5b0105eef2_9366/Forum_Low_CL_x_Indigo_Herz_Shoes_White_IE1855_HM1.jpg',
      price: '$19.99',
      id: '3',
    },
  ]);

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

  const expensesData = [
    {
      title: 'item1',
      price: 15,
    },
    {
      title: 'item2',
      price: 30,
    },
    {
      title: 'item3',
      price: 28,
    },
    {
      title: 'item4',
      price: 35,
    },
    {
      title: 'item5',
      price: 12,
    },
    {
      title: 'item6',
      price: 48,
    },
    {
      title: 'item7',
      price: 32,
    },
    {
      title: 'item8',
      price: 25,
    },
  ];

  return (
    <DNAdataContext.Provider
      value={{
        feedData,
        setFeedData,
        marketData,
        setMarketData,
        setMessages,
        messages,
        expensesData,
      }}>
      {typeof children === 'function' ? children() : children}
    </DNAdataContext.Provider>
  );
}

export default DNAdata;
