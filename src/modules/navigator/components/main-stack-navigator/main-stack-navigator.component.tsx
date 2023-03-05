import {FC, PropsWithChildren} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MainStackNavs} from "modules/navigator/types/navigator.module.types";
import PostListContainer from "modules/post/containers/post-list/post-list.container";
import PostUpdateContainer from "modules/post/containers/post-update/post-update.container";
import {IPost} from "modules/post/types/post.type";

export type MainStackNavigatorParamList = {
    [MainStackNavs.POST_LIST]: undefined;
    [MainStackNavs.POST_UPDATE]: { post: IPost };
}
const Stack = createNativeStackNavigator<MainStackNavigatorParamList>();

type MainStackNavigatorProps = {

};

const MainStackNavigator: FC<PropsWithChildren<MainStackNavigatorProps>> = (props) => {

    return (
        <Stack.Navigator>

            <Stack.Screen
                options={{headerShown: false}}
                name={MainStackNavs.POST_LIST}
                component={PostListContainer} />

            <Stack.Screen
                options={{headerShown: false}}
                name={MainStackNavs.POST_UPDATE}
                component={PostUpdateContainer} />

        </Stack.Navigator>
    );
};{}

export default MainStackNavigator;
