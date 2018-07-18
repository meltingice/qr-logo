import QRCode from 'qrcode'
import mergeImages from 'merge-images';

export default class QRLogo {
  constructor(logo) {
    this.logo = logo;
  }

  async generate(data, options = {}, ratio = 2, opacity = 1.0) {
    const qrData = await QRCode.toDataURL(data, options);
    const qrImage = await this.loadImage(qrData);
    const logoImage = await this.loadImage(this.logo);

    const logoWidth = Math.floor(qrImage.width / ratio);
    const logoHeight = Math.floor(logoWidth * logoImage.height / logoImage.width);
    const resizedLogo = this.resizeLogo(logoImage, logoWidth, logoHeight);

    const x = Math.floor((qrImage.width - logoWidth) / 2);
    const y = Math.floor((qrImage.height - logoHeight) / 2);

    return await mergeImages([
      { src: qrData, x: 0, y: 0 },
      { src: resizedLogo, opacity, x, y }
    ]);
  }

  loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img');
      img.addEventListener('load', () => resolve(img))
      img.src = src;
    })
  }

  resizeLogo(image, width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0, width, height);
    return canvas.toDataURL();
  }
}