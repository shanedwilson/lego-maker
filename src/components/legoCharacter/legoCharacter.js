import 'bootstrap';
// import $ from 'jquery';
import partsData from '../data/partsData';

const getHeads = () => {
  partsData.loadHeads()
    .then((heads) => {
      console.log(heads);
    })
    .catch((error) => {
      console.error({ error });
    });
};

const getTorsos = () => {
  partsData.loadTorsos()
    .then((torsos) => {
      console.log(torsos);
    })
    .catch((error) => {
      console.error({ error });
    });
};

const getLegs = () => {
  partsData.loadLegs()
    .then((legs) => {
      console.log(legs);
    })
    .catch((error) => {
      console.error({ error });
    });
};

export default { getHeads, getTorsos, getLegs };
