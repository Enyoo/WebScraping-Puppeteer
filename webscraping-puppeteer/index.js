const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/oprimo.rico/');
  //await page.screenshot({ path: 'perfil.png' });
  const imgList = await page.evaluate(() => {
      //isso será usado no browser (USANDO A DOM DO NAVEGADOR)
      //captura as imagens e transformar o NodeList em array 
      //e transformar os elementos (nodes) html em objetos JS
      //e por fim iremos tirar de dentro dessa função.

      const nodeList = document.querySelectorAll('article img');
      const imgArray = [...nodeList];
      const imgList = imgArray.map( ({src}) => ({
        src
      }));

      return imgList;
  });

  //escrever dados em arquivo json
  fs.writeFile('imagensInstagram.json', JSON.stringify(imgList, null, 2), err => {
    if(err) throw new Error('something went wrong');

    console.log('well done');
  });

  await browser.close();
})();