export const getImage = ( imageName, imgGroup ) => {
  let imgname = imgGroup + '-' + imageName.toLowerCase() + '.png';
  return require('../assets/images/' + imgname);  
};
