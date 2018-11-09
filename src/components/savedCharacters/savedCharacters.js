import 'bootstrap';
import $ from 'jquery';
import './savedCharacters.scss';

const printSavedCharacter = (savedCharacters) => {
  let newString = '';
  savedCharacters.forEach((savedCharacter) => {
    newString += `
      <div class="col-sm-2">
        <div class="card saved-character" style="width: 18rem">
          <p class="text-center">${savedCharacter.name}</p>
          <div class="text-center">
            <img class="card-img" src="${savedCharacter.head}">
          </div>
          <div class="text-center"> 
            <img class="card-img" src="${savedCharacter.torso}">
          </div> 
          <div class="text-center">
            <img class="card-img" src="${savedCharacter.leg}">
          </div> 
        </div>
      </div>  
  `;
  });
  $('.saved-image-div').html(newString);
};

export default {
  printSavedCharacter,
};
