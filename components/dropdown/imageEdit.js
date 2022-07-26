const sharp = require("sharp");

async function resizeImage() 
{
  try {
    await sharp("./src/images/beach.jpg")
      .resize({
        width: 1920,
        height: 1280
      })
      /*.grayscale()*/
      .extract({ width: 1920, height: 300, left: 0, top:400  })
      .toFile("./public/beachNew.jpg");
  } catch (error) {
    console.log(error);
  }
}

resizeImage();