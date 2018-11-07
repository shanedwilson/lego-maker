import 'bootstrap';
import $ from 'jquery';
import partsData from '../data/partsData';

const printHeads = (heads) => {
  let newString = '';
  heads.forEach((head) => {
    newString += `
      <div id="${head.id}"class="head card col-md-3 px-0 m-3" style="width: 18rem;">
        <div class="card-body">
          <div class="thumbnail mb-3">
          <img src="${head.imageUrl}" 
          alt="" width="100%">
        </div>
        <div class=" card-footer mt-auto">
          <p class="text-center">${head.name}</p>
        </div>
      </div>
    `;
  });
  $('#heads-div').html(newString);
};

const printTorsos = (torsos) => {
  let newString = '';
  torsos.forEach((torso) => {
    newString += `
      <div id="${torso.id}"class="head card col-md-3 px-0 m-3" style="width: 18rem;">
        <div class="card-body">
          <div class="thumbnail mb-3">
          <img src="${torso.imageUrl}" 
          alt="" width="100%">
        </div>
        <div class=" card-footer mt-auto">
          <p class="text-center">Locations Used: ${torso.name}</p>
        </div>
      </div>
    `;
  });
  $('#torsos-div').html(newString);
};

const printLegs = (legs) => {
  let newString = '';
  legs.forEach((leg) => {
    newString += `
      <div id="${leg.id}"class="head card col-md-3 px-0 m-3" style="width: 18rem;">
        <div class="card-body">
          <div class="thumbnail mb-3">
          <img src="${leg.imageUrl}" 
          alt="" width="100%">
        </div>
        <div class=" card-footer mt-auto">
          <p class="text-center">${leg.name}</p>
        </div>
      </div>
    `;
  });
  $('#legs-div').html(newString);
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
