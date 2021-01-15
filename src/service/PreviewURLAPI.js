import axios from 'axios';
// import _ from 'lodash';

const previewImageURL = url => {
    return axios({
        method: 'get',
        url: 'https://api.linkpreview.net',
        params: {
            key: '8d61b73e211b4819a8483225dd249420',
            q: url,
            fields: 'image',
        },
        responseType: 'json'
    });
}

const PreviewURLAPI = {
    previewImageURL,
}
export default PreviewURLAPI;