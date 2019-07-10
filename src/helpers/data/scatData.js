import axios from 'axios';
import firebaseKeys from '../apiKeys.json';

const baseUrl = firebaseKeys.apiKeys.databaseURL;

const getMyScats = uid => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/scats.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const scats = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((fbKey) => {
          res.data[fbKey].id = fbKey;
          scats.push(res.data[fbKey]);
        });
      }
      resolve(scats);
    })
    .catch(err => reject(err));
});

const deleteScats = scatId => axios.delete(`${baseUrl}/scats/${scatId}.json`);

const getSingleScat = scatId => axios.get(`${baseUrl}/scats/${scatId}.json`);

const postScat = newScat => axios.post(`${baseUrl}/scats.json`, newScat);

export default {
  getMyScats,
  deleteScats,
  getSingleScat,
  postScat,
};
