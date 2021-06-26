// import axios from 'axios';

// Develop server URL
// const postBaseUrl = 'http://localhost:3000/api';

// Staging server URL
// const postBaseUrl = 'http://weathermood-staging.us-west-2.elasticbeanstalk.com/api';

// Production server URL
// const postBaseUrl = 'http://weathermood-production.us-west-2.elasticbeanstalk.com/api';
// const postBaseUrl = 'http://weathermood-2021-27.us-east-1.elasticbeanstalk.com/api';

const user_foo_json = {
    
    "id": 0,
    "name": "foooooo",
    "current_animal": "dino",
    "createday": '1624357600',
    "todaysscore": 10,
    "weeklyscore": 90,
    "monthlyscore": 990,
    "historyscore": 22220,
    "dailynote": 3,
    "today_3_things": [1, 2, 3],
    "cannewanimal": "breeding"
    
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
