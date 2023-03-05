import {IPost} from "modules/post/types/post.type";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

async function postList(): Promise<IPost[]> {
    const response = await fetch(BASE_URL);
    return response.json();
}


export default postList;
