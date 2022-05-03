import React,{useEffect, useState} from 'react';
import { View, Text, Button,TouchableHighlight, StyleSheet, FlatList } from 'react-native';
import ActionButton from 'react-native-action-button';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { db } from './firebase';
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

const Messages = [
  {
    id: '1',
    userName: 'Harmandeep Singh',
    userImg: require('../../assets/splash.png'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'Paaras',
    userImg: require('../../assets/splash.png'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Abhinav Shrivastav',
    userImg: require('../../assets/splash.png'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Ritika Bhardwaj',
    userImg: require('../../assets/splash.png'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Khitij ohri',
    userImg: require('../../assets/splash.png'),
    messageTime: '2 days ago',
    messageText:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining',
  },
  {
    id: '6',
    userName: 'Khitij ohri',
    userImg: require('../../assets/splash.png'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '7',
    userName: 'Khitij ohri',
    userImg: require('../../assets/splash.png'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

const Message = ({navigation}) => {

    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [post, setPost] = useState(null);

    useEffect(() =>{
      const unsubscribe = db.collection("questions").onSnapshot(snapshot => (
        setPost(snapshot.docs.map(doc =>({
          id:doc.id,
          data:doc.data()
        })))
      ))
      return unsubscribe

    },[])
 
    return (
      <Container>
        <FlatList 
          data={Messages}
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
            // </Card>
            
          )}
          
        />
        <ActionButton buttonColor="#E23737">
        <ActionButton.Item
          buttonColor="#E23737"
          title="Upload Question"
          // onPress={choosePhotoFromLibrary}>
        >
          <Icon name="md-images-outline" style={styles.actionButtonIcon} onPress={() => navigation.navigate("AddPost")} />
        </ActionButton.Item>
      </ActionButton>
      </Container>
    );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  newPost:{
    backgroundColor:"#E23737",
    paddingBottom:10
  },  
  post:{
    marginLeft:15,
    fontSize:18,
    fontWeight:"bold",
    color:"white"
  },
  plus:{
    fontSize:26,
    marginRight:15,
    fontWeight:"bold",
    color:"white"
  }
});