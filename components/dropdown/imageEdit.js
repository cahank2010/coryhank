const sharp = require("sharp");

async function resizeImage() 
{
  try {
    await sharp("./public/equality.jpg")
      .resize({
        width: 1920,
        height: 2880
      })
      .extract({ width: 1920, height: 1920, left: 0, top: 0  })
      .toFile("./public/equalNew.jpg");
  } catch (error) {
    console.log(error);
  }
}

resizeImage();