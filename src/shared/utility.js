export const getImage = ( imageName, imgGroup ) => {
  console.log(imageName, 'imageName')
  if (imageName && imgGroup) {
    let imgname = imgGroup + '-' + imageName.toLowerCase() + '.png';
    return require('../assets/images/' + imgname);  
  }
};
