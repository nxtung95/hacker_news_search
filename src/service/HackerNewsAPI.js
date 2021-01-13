import axios from 'axios';

const getAllIdNewStories = () => {
    return axios({
        method: 'get',
        url: 'https://hacker-news.firebaseio.com/v0/newstories.json',
        params: {
            orderBy: JSON.stringify("$key"),
            limitToFirst: 30,
        },
        responseType: 'json'
      })
}

const getStoryById = (id) => {
    return axios({
        method: 'get',
        url: `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
        params: {},
        responseType: 'json'
      })
}

const HackerNewsAPI = {
    getAllIdNewStories,
    getStoryById,
}

export default HackerNewsAPI;