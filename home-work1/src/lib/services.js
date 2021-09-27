import axios from "axios"

async function getData(userId) {
    const user = await axios("https://jsonplaceholder.typicode.com/users/" + userId);
    const post = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
    const userPost = [];
    await userPost.push(user.data);
    await userPost.push(post.data);
    return userPost;
};

export default getData;