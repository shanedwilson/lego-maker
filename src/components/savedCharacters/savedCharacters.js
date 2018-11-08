import 'bootstrap';
import $ from 'jquery';
import './savedCharacters.scss';
import partsData from '../data/partsData';

const savedHeadView = (head) => {
  let newString = '';
  newString += `
      <div class="saved-head"><img src="${head.imageUrl}"></div>
  `;
  $('#saved-heads-div').append(newString);
};

const savedTorsoView = (torso) => {
  let newString = '';
  newString += `
      <div class="saved-torso"><img src="${torso.imageUrl}"></div>
  `;
  $('#saved-torsos-div').append(newString);
};

const savedLegView = (leg) => {
  let newString = '';
  newString += `
      <div class="saved-leg"><img src="${leg.imageUrl}"></div>
  `;
  $('#saved-legs-div').append(newString);
};

const savedHeadData = (savedHeadId) => {
  console.log(savedHeadId);
  partsData.loadHeads()
    .then((heads) => {
      heads.data.forEach((savedHead) => {
        if (savedHeadId === savedHead.id) {
          savedHeadView(savedHead);
          console.log(savedHead);
        }
      });
    });
};

const savedTorsoData = (savedTorsoId) => {
  partsData.loadTorsos()
    .then((torsos) => {
      torsos.data.forEach((savedTorso) => {
        if (savedTorsoId === savedTorso.id) {
          savedTorsoView(savedTorso);
        }
      });
    });
};

const savededLegData = (savedLegId) => {
  partsData.loadLegs()
    .then((legs) => {
      legs.data.forEach((savedLeg) => {
        if (savedLegId === savedLeg.id) {
          savedLegView(savedLeg);
        }
      });
    });
};

export default {
  savedHeadData, savedTorsoData, savededLegData,
};
