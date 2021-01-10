import axios from 'axios';

const getAllNewStories = () => {
    return axios({
        method: 'get',
        url: 'https://hacker-news.firebaseio.com/v0/newstories.json',
        params: {},
        responseType: 'json'
      })
}

export const HackerNewsAPI = {
    getAllNewStories,
}