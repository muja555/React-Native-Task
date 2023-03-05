import React, {FC, PropsWithChildren} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import MainStackNavigator from "modules/navigator/components/main-stack-navigator/main-stack-navigator.component";
import {PostProvider} from "modules/post/contexts/post.context";

type RootProps = {};

const Root: FC<PropsWithChildren<RootProps>> = (props) => {

    return (
        <PostProvider>
            <NavigationContainer>
                <MainStackNavigator/>
            </NavigationContainer>
        </PostProvider>
    );
};

export default Root;