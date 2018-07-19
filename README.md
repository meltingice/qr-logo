# QR-Logo

A simple library for customizing a QR code with a logo.

## Installation

This project is available on npm. Simply run `npm install qr-logo` to add it to your project.

## Usage

**As an ES6 include**

```js
import QRLogo from 'qr-logo'

const qrLogo = new QRLogo("/path/to/logo.png");
const qrImage = await qrLogo.generate("xrb:xrb_1x7biz69cem95oo7gxkrw6kzhfywq4x5dupw4z1bdzkb74dk9kpxwzjbdhhs");

document.querySelector("#qrcode").src = qrImage;
```

**As a standalone script**

```html
<script src="https://unpkg.com/qr-logo"></script>
<script>
  var qr = new QRLogo("/test/logo.png");
  qr.generate("xrb:xrb_1x7biz69cem95oo7gxkrw6kzhfywq4x5dupw4z1bdzkb74dk9kpxwzjbdhhs", {}, 1.4, 0.7).then(function (image) {
    document.querySelector("#result").src = image;
  })
</script>
```

## API

### constructor(logoURL)

The constructor takes the URL of the logo you wish to embed in your QR codes.

### async generate(data, [options], [logoRatio], [logoOpacity])

Generates the QR code with your logo overlaid on top. Output format is a base64 representation of the QR code image, which can be directly loaded with an `img` object.

#### data

The data that you want to embed into the QR code.

#### options

Optional. This options object is directly passed to the underlying QR code generator. See [its documentation](https://github.com/soldair/node-qrcode#qr-code-options) for details.

#### logoRatio

Optional; default = 2. This controls the size of the logo. The width of the QR code is divided by this number to obtain the new width of the logo. Because of this, higher numbers = smaller logos.

#### logoOpacity

Optional; default = 1.0. Controls the opacity of the logo. Range is from 0.0 - 1.0.