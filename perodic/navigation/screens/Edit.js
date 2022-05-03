import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import {
    InputField,
    InputFields,
    InputWrapper,
    AddImage,
    SubmitBtn,
    SubmitBtnText,
    StatusWrapper,
  } from './AddStyle';

const Edit = () => {
    const [start, setStart] = useState('');
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [long, setLong] = useState("");
    const [cycle, setCycle] = useState("");

  return (
          <View style={styles.container}>
      <InputWrapper>
        <InputFields
          placeholder="WHEN DID YOUR LAST PERIOD START?"
          multiline
          numberOfLines={1}
        //   value={question}
        //   onChangeText={(content) => setQuestion(content)}
        />
        <InputFields
          placeholder="HOW LONG DOES A PERIOD LAST?"
          multiline
          numberOfLines={1}
        //   value={question}
        //   onChangeText={(content) => setQuestion(content)}
        />
        <InputFields
          placeholder="HOW LONG IS YOUR CYCLE?"
          multiline
          numberOfLines={1}
        //   value={question}
        //   onChangeText={(content) => setQuestion(content)}
        />
        {uploading ? (
          <StatusWrapper>
            <Text>{transferred} % Completed!</Text>
            <ActivityIndicator size="large" color="#0000ff" />
          </StatusWrapper>
        ) : (
          <SubmitBtn 
              >
            <SubmitBtnText onPress={() => createQustion()}>Upload</SubmitBtnText>
          </SubmitBtn>
        )}
      </InputWrapper>
      </View>
  )
}

export default Edit

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
})