import { favouritesKey } from '../globals/constants';

function setFavourites(id) {
    let favourites = JSON.parse(localStorage.getItem(favouritesKey));
    let favourited = false;
    if (favourites == null) {
      favourites = [];
    }
    for (let favourite of favourites) {
      if (favourite === id) {
        favourited = true;
      }
    }
    if (favourited === true) {
      favourites = favourites.filter(function(item) {
        return item !== id
      })
      let favouritesAsJson = JSON.stringify(favourites);
      localStorage.setItem(favouritesKey, favouritesAsJson);
      console.log(favourites);
    }
    else {
      favourites = [...favourites, id];
      let favouritesAsJson = JSON.stringify(favourites);
      localStorage.setItem(favouritesKey, favouritesAsJson);
    }
}

export default setFavourites;
