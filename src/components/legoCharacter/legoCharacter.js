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
  $('#head-name').html();
  $('#head-name').html(heads[randomize].name);
};

const initTorsoView = (torsos) => {
  let newString = '';
  const randomize = Math.floor(Math.random() * torsos.length);
  newString += `
      <div class="torso" id="${torsos[randomize].id}"><img src="${torsos[randomize].imageUrl}"></div>
    `;
  $('#torsos-div').html(newString);
  $('#torso-name').html();
  $('#torso-name').html(torsos[randomize].name);
};

const initLegView = (legs) => {
  let newString = '';
  const randomize = Math.floor(Math.random() * legs.length);
  newString += `
      <div class="leg" id="${legs[randomize].id}"><img src="${legs[randomize].imageUrl}"></div>
    `;
  $('#legs-div').html(newString);
  $('#leg-name').html();
  $('#leg-name').html(legs[randomize].name);
};

const customHeadView = (head) => {
  let newString = '';
  newString += `
      <div class="head" id="${head.id}"><img src="${head.imageUrl}"></div>
  `;
  $('#heads-div').html(newString);
  $('#head-name').html();
  $('#head-name').html(head.name);
  $('#heads-div').slideDown(500);
};

const customTorsoView = (torso) => {
  let newString = '';
  newString += `
      <div class="torso" id="${torso.id}"><img src="${torso.imageUrl}"></div>
  `;
  $('#torsos-div').html(newString);
  $('#torso-name').html();
  $('#torso-name').html(torso.name);
  $('#torsos-div').slideDown(500);
};

const customLegView = (leg) => {
  let newString = '';
  newString += `
      <div class="leg" id="${leg.id}"><img src="${leg.imageUrl}"></div>
  `;
  $('#legs-div').html(newString);
  $('#leg-name').html();
  $('#leg-name').html(leg.name);
  $('#legs-div').slideDown(500);
};

const selectedHead = (clickedHead) => {
  $('#heads-div').fadeOut(10);
  partsData.loadHeads()
    .then((heads) => {
      heads.forEach((customHead) => {
        if (clickedHead === customHead.id) {
          customHeadView(customHead);
        }
      });
    });
};

const selectedTorso = (clickedTorso) => {
  $('#torsos-div').fadeOut(10);
  partsData.loadTorsos()
    .then((torsos) => {
      torsos.forEach((customTorso) => {
        if (clickedTorso === customTorso.id) {
          customTorsoView(customTorso);
        }
      });
    });
};

const selectedLeg = (clickedLeg) => {
  $('#legs-div').fadeOut(10);
  partsData.loadLegs()
    .then((legs) => {
      legs.forEach((customLeg) => {
        if (clickedLeg === customLeg.id) {
          customLegView(customLeg);
        }
      });
    });
};

const getHeads = () => {
  partsData.loadHeads()
    .then((heads) => {
      dropdown.printHeads(heads);
      initHeadView(heads);
    })
    .catch((error) => {
      console.error({ error });
    });
};

const getTorsos = () => {
  partsData.loadTorsos()
    .then((torsos) => {
      dropdown.printTorsos(torsos);
      initTorsoView(torsos);
    })
    .catch((error) => {
      console.error({ error });
    });
};

const getLegs = () => {
  partsData.loadLegs()
    .then((legs) => {
      dropdown.printLegs(legs);
      initLegView(legs);
    })
    .catch((error) => {
      console.error({ error });
    });
};

export default {
  getHeads, getTorsos, getLegs, selectedHead, selectedTorso, selectedLeg,
};
