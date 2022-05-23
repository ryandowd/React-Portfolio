export const getImage = (imageName: string, imgGroup: string) => {
  if (imageName && imgGroup) {
    const imageAsset = imgGroup + "-" + imageName.toLowerCase() + ".png";
    return require("../assets/images/" + imageAsset);
  }
};
