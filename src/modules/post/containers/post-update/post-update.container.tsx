import React, {FC, type PropsWithChildren, useContext, useState} from 'react';
import {postUpdateContainerStyle as style} from "./post-update.container.style";
import BackIcon from 'assets/svgs/BackIcon.svg';
import {SafeAreaView} from "react-native-safe-area-context";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {
    MainStackNavigatorParamList
} from "modules/navigator/components/main-stack-navigator/main-stack-navigator.component";
import {MainStackNavs} from "modules/navigator/types/navigator.module.types";
import TextField from "core/inputs/text-field/text-field.component";
import {TouchableOpacity, View, Text, ScrollView} from "react-native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {PostContext} from "modules/post/contexts/post.context";
import {IPost, IPostContextType} from "modules/post/types/post.type";


type PostUpdateProps = {};

const PostUpdateContainer: FC<PropsWithChildren<PostUpdateProps>> = (props) => {

    const navigation = useNavigation<NativeStackNavigationProp<MainStackNavigatorParamList>>();
    const route = useRoute<RouteProp<MainStackNavigatorParamList, MainStackNavs.POST_UPDATE>>();
    const {list, addPost} = useContext(PostContext) as IPostContextType;
    const {
        post
    } = route?.params || {};

    const [title, titleSet] = useState(post.title);
    const [body, bodySet] = useState(post.body);

    const onPress = () => {
        const _post: IPost = {
            id: Math.max(...list.map(item => item.id)) + 1,
            userId: 1,
            title: title,
            body: body,
        }
        addPost(_post);
        navigation.goBack();
    }

    const disableButton = !title || !body;

    return (
        <SafeAreaView style={style.container}>
            <View style={style.header}>
                <TouchableOpacity style={style.backBtn} onPress={navigation.goBack}>
                    <BackIcon/>
                </TouchableOpacity>
            </View>
            <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={style.scrollView}>
                <TextField label={'Title'}
                           value={title}
                           errorMessage={!title ? 'required' : ''}
                           onChangeText={(text) => titleSet(text)}/>
                <View style={{height: 20}}/>
                <TextField label={'Body'}
                           value={body}
                           errorMessage={!body ? 'required' : ''}
                           multiline={true}
                           onChangeText={(text) => bodySet(text)}/>

                <View style={{flex: 1}}/>
                <TouchableOpacity activeOpacity={0.8}
                                  onPress={onPress}
                                  disabled={disableButton}
                                  style={[style.saveBtn, disableButton && style.btnDisabled]}>
                    <Text style={style.buttonLabel}>
                        {'Save'}
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PostUpdateContainer;
