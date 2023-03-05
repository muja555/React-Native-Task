export type IPost = {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export type IPostContextType = {
    list: IPost[];
    listSet: (list: IPost[]) => void;
    addPost: (post: IPost) => void;
};