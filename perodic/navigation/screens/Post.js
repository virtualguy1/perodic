import React,{useId, useState} from 'react';
import { View, Text, Button, StyleSheet,TouchableHighlight, FlatList } from 'react-native';
import { TextInput } from 'react-native-paper';
import {db} from './firebase'
import {
  SubmitBtn,
  SubmitBtnText,
} from './AddStyle';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from './Styles';

const Post = ({navigation}) => {

  const [comment, setComment] = useState([])


  const createComment = async() =>{

    const post =  db.collection('questions').doc()
      post.collection("comments")
      .add({
          comment:comment
        })
      .then(() => {
        // callBackFunction()
        alert("Commented")
      })
      .catch((err) => {
        console.error(err)
      })
    // await db.collection("question").add({
    //    comments:comment
    // }).then(() =>{
    //   alert("Comment successfully uploaded")
    // }).catch((err) =>{
    //   console.log(error.message)
    // })
    }

  
//     const postId = "y7FN13SKWUDsWdKsGJiT" // example id of a post document
// firestore()
//   .collection('comments')
//   // Filter results
//   .where('postId', '==', postId)
//   .get()
//   .then(querySnapshot => {
//     if (querySnapshot.exists) {
//       // Do something with the data
//     }
//   });

  const post = [
    {
      id: '1',
      userName: 'Harmandeep Singh',
      userImg: require('../../assets/splash.png'),
      messageTime: '4 mins ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    }
  ]

  const submitPost =() =>{
    
  }
    return (
      <View>
       <FlatList 
          data={post}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            // <Card>
              <UserInfo>
                <UserImgWrapper  >
                <TouchableHighlight  onPress={() => navigation.navigate('Profile')}>
                  <UserImg source={item.userImg}  />
                  </TouchableHighlight>
                </UserImgWrapper>
                <TextSection>
                  <Card onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </Card>
                  <Card onPress={() => navigation.navigate('Post')}>
                   <MessageText>{item.messageText}</MessageText>
                  </Card> 
                </TextSection>
              </UserInfo>
          )}
        />
          <Text style={styles.comment}>Your Comment</Text>
          <TextInput placeholder='type something...' value={comment} onChange={(text) => setComment([text])} />
          <SubmitBtn 
           
                >
              <SubmitBtnText  onPress={createComment} >Post</SubmitBtnText>
          </SubmitBtn>
      </View>
    );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  comment:{
    marginTop:10,
    fontWeight:"bold",
    marginBottom:10,
    fontSize:22
  },
  postBtn:{
    marginTop:10
  }
});