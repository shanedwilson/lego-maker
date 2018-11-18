import axios from 'axios';
import apiKeys from '../../../db/apiKeys';

const baseUrl = apiKeys.firebaseKeys.databaseURL;


const loadHeads = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/heads.json`)
    .then((result) => {
      const allHeadsObject = result.data;
      const allHeadsArray = [];
      if (allHeadsObject !== null) {
        Object.keys(allHeadsObject).forEach((headId) => {
          const newHead = allHeadsObject[headId];
          newHead.id = headId;
          allHeadsArray.push(newHead);
        });
      }
      resolve(allHeadsArray);
    })
    .catch((err) => {
      reject(err);
    });
});

const loadTorsos = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/torsos.json`)
    .then((result) => {
      const allTorsosObject = result.data;
      const allTorsosArray = [];
      if (allTorsosObject !== null) {
        Object.keys(allTorsosObject).forEach((torsoId) => {
          const newTorso = allTorsosObject[torsoId];
          newTorso.id = torsoId;
          allTorsosArray.push(newTorso);
        });
      }
      resolve(allTorsosArray);
    })
    .catch((err) => {
      reject(err);
    });
});

const loadLegs = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/legs.json`)
    .then((result) => {
      const allLegsObject = result.data;
      const allLegsArray = [];
      if (allLegsObject !== null) {
        Object.keys(allLegsObject).forEach((legId) => {
          const newLeg = allLegsObject[legId];
          newLeg.id = legId;
          allLegsArray.push(newLeg);
        });
      }
      resolve(allLegsArray);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { loadHeads, loadTorsos, loadLegs };
