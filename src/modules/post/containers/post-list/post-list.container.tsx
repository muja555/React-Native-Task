import React, {FC, type PropsWithChildren, useContext} from 'react';
import {postListContainerStyle as style} from "./post-list.container.style";
import {IPost, IPostContextType} from "modules/post/types/post.type";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {
    MainStackNavigatorParamList
} from "modules/navigator/components/main-stack-navigator/main-stack-navigator.component";
import {MainStackNavs} from "modules/navigator/types/navigator.module.types";
import {PostContext} from "modules/post/contexts/post.context";

type PostListProps = {

};

const PostListContainer: FC<PropsWithChildren<PostListProps>> = (props) => {

    const insets = useSafeAreaInsets();
    const navigation = useNavigation<NativeStackNavigationProp<MainStackNavigatorParamList>>();
    const {list} = useContext(PostContext) as IPostContextType;

    const renderItem = (renderItemProps: { item: IPost }) => {
        const {
            item
        } = renderItemProps;

        const onPress = () => {
            navigation.push(MainStackNavs.POST_UPDATE, { post: item});
        }

        return (
            <TouchableOpacity onPress={onPress} style={style.item}>
                <Text style={style.itemTitle}>
                    {item.title}
                </Text>
                <View style={{height: 5}} />
                <Text style={style.itemBody}>
                    {item.body}
                </Text>
            </TouchableOpacity>
        )
    }

    const separator = () => {
        return (
            <View style={style.separator}/>
        )
    }


    const header = () => {
        return (
            <View style={{height: insets.top}} />
        )
    }

    const keyExtractor = (item: IPost, index: number) => item.id + '';

    return (
        <View style={style.container}>
            <FlatList data={list}
                      renderItem={renderItem}
                      keyExtractor={keyExtractor}
                      ItemSeparatorComponent={separator}
                      showsVerticalScrollIndicator={false}
                      contentContainerStyle={style.list}
                      ListHeaderComponent={header} />
        </View>
    )
}

export default PostListContainer;
