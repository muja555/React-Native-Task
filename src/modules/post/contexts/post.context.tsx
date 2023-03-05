import React, {createContext, useEffect, useState} from "react";
import {IPost, IPostContextType} from "modules/post/types/post.type";
import postList from "modules/post/requests/post-list.request";

export const PostContext = createContext<IPostContextType | null>(null);

type PostProviderProps = {
    children: React.ReactNode;
}

export const PostProvider: React.FC<PostProviderProps> = ({children}) => {
    const [list, listSet] = useState<IPost[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const _list = await postList();
                listSet(_list);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    const addPost = (post: IPost) => {
        listSet([...list, post]);
    };

    return (
        <PostContext.Provider value={{list, listSet, addPost}}>
            {children}
        </PostContext.Provider>
    );
};





