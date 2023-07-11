import React, {useContext, useRef, useEffect, useCallback} from 'react';
import {FlatList} from 'react-native';
import {GlobalDataContext} from '../../contexts/context';
import Message from './Message';

const Chat = () => {
    const { messages } = useContext(GlobalDataContext);
    const user = useRef(0);
    const flatListRef = useRef();

    const renderItem = useCallback(({ item, index }) => (
      <Message
        key={index}
        isLeft={item.user !== user.current}
        message={item.message}
      />
    ), []);

      useEffect(() => {
        flatListRef.current.scrollToEnd({ animated: true });
      }, [messages]);
    
    return (
     <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        onContentSizeChange={() =>
          flatListRef.current.scrollToEnd({ animated: true })
        }
      />
    )
}

export default React.memo(Chat);