import react,{useState} from 'react'
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import {db} from './firebase'
import {firestore} from './firebase'

import {
    InputField,
    InputWrapper,
    AddImage,
    SubmitBtn,
    SubmitBtnText,
    StatusWrapper,
  } from './AddStyle';

const AddPost = ({navigation}) => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [question, setQuestion] = useState(null);


    const createQustion = async() =>{
        await db.collection("questions").add({
            question:question,
            postTime:  new Date().getHours()
        }).then(() =>{
            setUploading(true)
            navigation.navigate("Message")
        })
    }

  return (
    <View style={styles.container}>
      <InputWrapper>
        <InputField
          placeholder="Type your Question"
          multiline
          numberOfLines={4}
          value={question}
          onChangeText={(content) => setQuestion(content)}
        />
        {uploading ? (
          <StatusWrapper>
            <Text>{transferred} % Completed!</Text>
            <ActivityIndicator size="large" color="#0000ff" />
          </StatusWrapper>
        ) : (
          <SubmitBtn 
              >
            <SubmitBtnText onPress={() => createQustion()}>Post</SubmitBtnText>
          </SubmitBtn>
        )}
      </InputWrapper>
      </View>
  )
}

export default AddPost

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
  });