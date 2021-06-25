// import axios from 'axios';

// Develop server URL
// const postBaseUrl = 'http://localhost:3000/api';

// Staging server URL
// const postBaseUrl = 'http://weathermood-staging.us-west-2.elasticbeanstalk.com/api';

// Production server URL
// const postBaseUrl = 'http://weathermood-production.us-west-2.elasticbeanstalk.com/api';
// const postBaseUrl = 'http://weathermood-2021-27.us-east-1.elasticbeanstalk.com/api';

const user_foo_json = {
    
    "uid": 1,
    "username": "api",
    "current_animal": "dino",
    "score" :{
        "today_score":10,
        "week_score":90,
        "month_score":990,
        "history_score":77888
    },
    "today_recorded":3,
    "today_3_things":[
        {
            "post_id":1,
            "post_content":"JS is so hard",
            "post_score":0
        },
        {
            "post_id":2,
            "post_content":"JS is so difficult",
            "post_score":0
        },
        {
            "post_id":3,
            "post_content":"JS is so frustrating",
            "post_score":0
        }
    ],
    "status":"breeding"
    
};

export function getUser() {
//   let url = `${postBaseUrl}/posts`;
//   let query = [];
//   if (searchText) query.push(`searchText=${searchText}`);
//   if (start) query.push(`start=${start}`);
//   if (query.length) url += '?' + query.join('&');

//   console.log(`Making GET request to: foo`);

//   return axios.get('./api/userapi.json').then(function (res) {
//     // if (res.status !== 200)
//     //   throw new Error(`Unexpected response code: ${res.status}`);

//     return res.data;
//   });
    return user_foo_json;
}

// export function createPost(mood, text) {
//   let url = `${postBaseUrl}/posts`;

//   console.log(`Making POST request to: ${url}`);

//   return axios
//     .post(url, {
//       mood,
//       text,
//     })
//     .then(function (res) {
//       if (res.status !== 200)
//         throw new Error(`Unexpected response code: ${res.status}`);

//       return res.data;
//     });
// }

// export function createVote(id, mood) {
//   let url = `${postBaseUrl}/posts/${id}/${mood.toLowerCase()}Votes`;

//   console.log(`Making POST request to: ${url}`);

//   return axios.post(url).then(function (res) {
//     if (res.status !== 200)
//       throw new Error(`Unexpected response code: ${res.status}`);

//     return res.data;
//   });
// }
