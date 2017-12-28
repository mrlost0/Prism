const Jimp = require('jimp');

exports.run = (bot, message, args) => {
    Jimp.read("https://secure.touchnet.com/C20206_ustores/web/uploaded_images/store_29/test-clip-art-cpa-school-test.jpg", function (err, image) {
    if (err) throw err;
    image.resize(256, 256)            // resize 
         .quality(60)                 // set JPEG quality 
         .greyscale() 
         Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
    image.print(10, 10, "Hello world!");
});
const output = 
message.channel.send(`Here you go! ${image}`)
});
};

exports.help = {
  name: "test",
  description: "Testing Command",
  usage: "pr!test",
  note: "Test Test 123"
}