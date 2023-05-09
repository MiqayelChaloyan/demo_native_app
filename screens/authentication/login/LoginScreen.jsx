import React from 'react';
import { StyleSheet, Text,TextInput,TouchableOpacity,View} from 'react-native';

const LoginScreen = () => {

  
  return (
    <View style={{flex:1,alignItems:'center',}}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Log In</Text>
      </View>

      <View style={styles.textInputContainer}> 

        <TextInput style={styles.input}
                        placeholder="Email"
                        multiline={false}/>

        <TextInput style={styles.input}
                        placeholder="Password"
                        editable={true}
                        multiline={false} />

      </View>
    
      <View style={styles.button}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.forgotTextontainer}>
        <Text style={styles.forgotText}>
          Forgot ypur password ?
        </Text>
      </View>
        
    </View>
    
  )

};

const styles = StyleSheet.create({
  headerContainer:{
    width:'23.5%',
    height:'4.5%',
    marginTop:'4%',
  },
  headerText:{
    fontSize:30,
    fontWeight:600,
    textAlign:'center',
    color:'black'

  },
  textInputContainer:{
    marginTop:'4%',
    height:'15%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  input: {
    width: 343,
    height: 50,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
  },
  button:{
    marginTop:'21%',
    width:'90%',
    height:'6.5%',
    backgroundColor:'#5DB075',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:100
  },
  buttonText:{
    textAlign:'center',
    fontSize:16,
    color:"white"
  },
  forgotTextontainer:{
    width:'50%',
    height:'2.5%',
    marginTop:'2%',
   

  },
  forgotText:{
    fontSize:16,
    fontWeight:600,
    color:'#5DB075',
    textAlign:'center'
  },
 
    
  

});

export default LoginScreen;
