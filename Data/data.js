import React, { useState,createContext } from "react";

export const DNAdataContext = createContext (undefined);



function DNAdata({children}){




    const [feedData , setFeedData] = useState([
        {
            title:'GAZELLE SHOES',
            message:'This product is excluded from all promotional discounts and offers.',
            imageUri:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b0fd05cae60a48a6bd20c800cb0b8636_9366/Gazelle_Shoes_Blue_IG0666_HM1.jpg',
            createdData: new Date(),
            id:"1"
        },
        {
            title:'ULTRABOOST',
            message:'You can try any of our performance running shoes for 30 days and return hassle-free.',
            imageUri:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0fbed4646c1d46e0aae0af6901301ff4_9366/Ultraboost_Light_Running_Shoes_White_HQ6351_01_standard.jpg',
            createdData: new Date(),
            id:"2"
        },
        {
            title:'FORUM LOW CL X',
            message:'Great catch! This exclusive product is only available at adidas and can`t be found anywhere else. ',
            imageUri:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/94c39d2867404df293a7af5b0105eef2_9366/Forum_Low_CL_x_Indigo_Herz_Shoes_White_IE1855_HM1.jpg',
            createdData: new Date(),
            id:"3"
        },
        {
            title:'FORUM LOW SHOES',
            message:'Make an impression in these adidas Forum shoes that mix `80s hoops heritage with modern energy. ',
            imageUri:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2547ff40b3f47818118aed2015e64c6_9366/Forum_Low_Shoes_Black_FZ5891_01_standard.jpg',
            createdData: new Date(),
            id:"4"
        },
    ]);



return (

    <DNAdataContext.Provider 
        value={{
            feedData
        }}
    >
        {typeof children === 'function' ? children() : children}


    </DNAdataContext.Provider>
)

}



export default DNAdata;