import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Context} from '../context/BlogContext';


const EditScreen = ({navigation}) => {
    const {state} = useContext(Context)

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    const [title, setTitle] = useState(blogPost.title); //captures the title of content and brings the edit function
    const [content, setContent] = useState(blogPost.content); //ditto

    return (
        <View>
            <Text>Edit Title: </Text>
            <TextInput value={title} onChangeText={(newTitle) => setTitle(newTitle)} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default EditScreen;