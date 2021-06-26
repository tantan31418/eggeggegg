const axios = require('axios');

// Develop server URL
const baseurl = 'http://happy-monster-dev.ap-northeast-1.elasticbeanstalk.com/api/posts';

// Staging server URL
// const postBaseUrl = 'http://weathermood-staging.us-west-2.elasticbeanstalk.com/api';

// Production server URL
// const postBaseUrl = 'http://brook-ichibang.ap-northeast-1.elasticbeanstalk.com/api';


function list(id, whose = '') {
    let url = baseurl;
    let query = [];
    if (id) query.push(`id=${id}`);
    if (whose) query.push(`whose=${whose}`);
    if (query.length) url += '?' + query.join('&');

    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then(function (res) {
    if (res.status !== 200)
        throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}


function update(postid, text){
    console.log(`Making POST request to: ${baseurl + "/update"}`);

    return axios
    .post(baseurl + "/update", {
        postid,
        text,
    })
    .then(function (res) {
        if (res.status !== 200)
        throw new Error(`Unexpected response code: ${res.status}`);

        console.log(res.data);
    });
}

function create(uid, score, text){
    console.log(`Making POST request to: ${baseurl}`);

    return axios
    .post(baseurl, {
        uid,
        score,
        text,
    })
    .then(function (res) {
        if (res.status !== 200)
        throw new Error(`Unexpected response code: ${res.status}`);

        console.log(res.data);
    });
}

module.exports = {
    create,
    update,
    list
}