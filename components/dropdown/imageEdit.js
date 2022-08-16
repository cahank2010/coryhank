const sharp = require("sharp");

async function resizeImage() 
{
  try {
    await sharp("./public/bkCoffee.jpg")
      .resize({
        width: 1920,
        height: 1080
      })
      /*.extract({ width: 1920, height: 1920, left: 0, top: 0  })*/
      .toFile("./public/coffeeNew.jpg");
  } catch (error) {
    console.log(error);
  }
}

resizeImage();