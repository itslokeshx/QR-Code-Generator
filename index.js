import inquirer from "inquirer";
import fs from "fs";
import { createRequire } from "module";
const require = createRequire(import.meta.url); 

const qr = require("qr-image");

inquirer
    .prompt([{
       
        name: 'username',
        
        message: "enter your name!",
       

    },
        {
            
            name:"url",
            message:"enter the url"
        }
  ])
  .then((answers) => {
      console.log(answers.username);
     
      console.log(answers.url);
      fs.writeFile("data.txt", answers.url, (err) => {
        if (err) throw err;
          console.log("The file has been saved!");
          
          

          var qr_png = qr.image(answers.url, { type: "png" });
          qr_png.pipe(require("fs").createWriteStream(`${answers.username}'s_QR.png`));

          var png_string = qr.imageSync(answers.url, { type: "png" });
      });
  });


  
