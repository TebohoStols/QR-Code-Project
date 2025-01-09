/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user's entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import {input} from '@inquirer/prompts';
import fs from 'fs';
import qr from 'qr-image'



const answer = await input({message: 'Enter a web address: '});

var qr_svg = qr.image(answer, {type: 'png'});
qr_svg.pipe(fs.createWriteStream('created_qr.png'));

fs.writeFile('message.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});