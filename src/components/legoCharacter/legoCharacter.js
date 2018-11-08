import 'bootstrap';
import $ from 'jquery';
import './legoCharacter.scss';
import partsData from '../data/partsData';
import dropdown from '../dropdown/dropdown';

const initHeadView = (heads) => {
  let newString = '';
  const randomize = Math.floor(Math.random() * heads.length);
  newString += `
      <div class="head" id="${heads[randomize].id}"><img src="${heads[randomize].imageUrl}"></div>
    `;
  $('#heads-div').html(newString);
  $('#name-div').append(`<span>${heads[randomize].name}</span>`);
};

const initTorsoView = (torsos) => {
  let newString = '';
  const randomize = Math.floor(Math.random() * torsos.length);
  newString += `
      <div class="torso" id="${torsos[randomize].id}"><img src="${torsos[randomize].imageUrl}"></div>
    `;
  $('#torsos-div').html(newString);
  $('#name-div').append(`<span>${torsos[randomize].name}</span>`);
};

const initLegView = (legs) => {
  let newString = '';
  const randomize = Math.floor(Math.random() * legs.length);
  newString += `
      <div class="leg" id="${legs[randomize].id}"><img src="${legs[randomize].imageUrl}"></div>
    `;
  $('#legs-div').html(newString);
  $('#name-div').append(`<span>${legs[randomize].name}</span>`);
};

const getHeads = () => {
  partsData.loadHeads()
    .then((heads) => {
      dropdown.printHeads(heads.data);
      initHeadView(heads.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

const getTorsos = () => {
  partsData.loadTorsos()
    .then((torsos) => {
      dropdown.printTorsos(torsos.data);
      initTorsoView(torsos.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

const getLegs = () => {
  partsData.loadLegs()
    .then((legs) => {
      dropdown.printLegs(legs.data);
      initLegView(legs.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

export default {
  getHeads, getTorsos, getLegs,
};
