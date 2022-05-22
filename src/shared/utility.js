export const getImage = ( imageName, imgGroup ) => {
  if (imageName && imgGroup) {
    const imageAsset = imgGroup + '-' + imageName.toLowerCase() + '.png';
    return require('../assets/images/' + imageAsset);  
  }
};
