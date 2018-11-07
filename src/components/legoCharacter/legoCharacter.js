import 'bootstrap';
import $ from 'jquery';
import partsData from '../data/partsData';

const printHeads = (heads) => {
  let newString = '';
  heads.forEach((head) => {
    newString += `
      <a class="dropdown-item" id="${head.id}"><img src="${head.imageUrl}"></a>
    `;
  });
  $('#head-links').html(newString);
};

const printTorsos = (torsos) => {
  let newString = '';
  torsos.forEach((torso) => {
    newString += `
      <a class="dropdown-item" id="${torso.id}"><img src="${torso.imageUrl}"></a>
    `;
  });
  $('#torso-links').html(newString);
};

const printLegs = (legs) => {
  let newString = '';
  legs.forEach((leg) => {
    newString += `
      <a class="dropdown-item" id="${leg.id}"><img src="${leg.imageUrl}"></a>
    `;
  });
  $('#leg-links').html(newString);
};

const getHeads = () => {
  partsData.loadHeads()
    .then((heads) => {
      printHeads(heads.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

const getTorsos = () => {
  partsData.loadTorsos()
    .then((torsos) => {
      printTorsos(torsos.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

const getLegs = () => {
  partsData.loadLegs()
    .then((legs) => {
      printLegs(legs.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

export default { getHeads, getTorsos, getLegs };
