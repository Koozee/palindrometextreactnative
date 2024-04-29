import * as React from 'react';
import { Text, View, Image, TextInput, Button } from 'react-native';

const App = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{
        fontSize: 40
      }}>Hello, World!</Text>
      <TextInput style={{
        borderWidth: 1,
        borderColor: 'black',
        width: 200,
        height: 40,
        padding: 10,
        margin: 10,
        borderRadius: 10,
      }}
        placeholder="Email Address"
      />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'black',
          width: 200,
          height: 40,
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}
        secureTextEntry={true}
        placeholder="Password" />
      <Button title="Login" />
      <Text>Belum punya akun? Daftar Sekarang</Text>
      <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcIC1rQ_T5baB82XPWbTKzmmkgwYwCOa3hFDCkaeZC4Q&s' }}
        style={{
          width: 200,
          height: 200,
          borderRadius: 10,
        }} />
    </View>
  )
}

export default App;
