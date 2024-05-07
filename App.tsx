import * as React from 'react';
import { Text, View, Image, TextInput, Button, Alert, ViewComponent, ScrollView } from 'react-native';


const App = () => {
  // const items = [
  //   { id: 1, name: 'KATA ' },
  //   { id: 2, name: 'KATA ' },
  //   { id: 3, name: 'KATA ' },
  //   { id: 4, name: 'KATA ' },
  //   { id: 5, name: 'KATA ' },
  //   { id: 6, name: 'KATA ' },
  // ]
  // const renderitems = (item: { id: number, name: string }) => {
  //   return <Text style={{
  //     fontSize: 50,
  //     color: "white",
  //     borderRadius: 10,
  //     borderColor: "black", 
  //     backgroundColor: "red", 
  //     margin: 10, 
  //     padding: 10,
  //     shadowRadius: 10,
  //   }}>{item.name}{item.id}</Text>
  // }
  const [inputUsers, setInputusers] = React.useState("");
  const validation = () => {
    const splitted = inputUsers.split("");
    const reverseLetters = splitted.reverse();
    const reverseWords = reverseLetters.join("");

    if (inputUsers.toLowerCase() === reverseWords.toLowerCase()) {
      Alert.alert('Ini adalah palindrome text')
    } else {
      Alert.alert('Ini bukan palindrome text')
    }
  }
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{
        fontSize: 30
      }}>Palindrome Validation</Text>
      <Image source={{ uri: 'https://i.pinimg.com/564x/cb/3e/01/cb3e014d6122af3b43933bb571859ae7.jpg' }}
        style={{
          width: 200,
          height: 200,
          borderRadius: 10,
        }} />
      <TextInput value={inputUsers} style={{
        borderWidth: 1,
        borderColor: 'black',
        width: 250,
        height: 50,
        padding: 10,
        margin: 10,
        borderRadius: 10,
      }}
        placeholder="Masukkan Text Palindrome"
        onChangeText={(value) => setInputusers(value)}
      />
      <Button color="green" title="Validasi" onPress={validation} />
    </View>


    // <View>
    //   <ScrollView>
    //     {items.map((item) => renderitems(item))}
    //   </ScrollView>
    // </View>
  )
}

export default App;
