// const { createTransport } = require("nodemailer");
// // import { app } from "../../loaders/express"
// const sesTransport = require("nodemailer-ses-transport");
// import path from "path";
// import { awsAccessKey, awsSecretAccessKey, awsRegion,email } from "../../configs";

// interface Options {
//     subject: string;
//     message: {
//       title: string;
//       code:number;
//     };
//     email: string;
// } 

// const sendEmail = async (options:Options) => {
//   const hbs = require('nodemailer-express-handlebars');
//   // app.engine("handlebars", hbs.engine);
// const hbsConfig = {
//   viewEngine: {
//     extName: '.hbs',
//     partialsDir: path.resolve("src","views"),
//     layoutsDir: path.resolve( "src","views"),
//     defaultLayout: ''
//   },
//   viewPath: path.resolve("src","views"),
//   extName: '.hbs'
// };
//     var sesTransporter = createTransport(
//         sesTransport({
//           accessKeyId: awsAccessKey,
//           secretAccessKey: awsSecretAccessKey,
//           region: awsRegion,
//         })
//       );
//       sesTransporter.use('compile', hbs(hbsConfig));
//       function callback(error:Error, info:any) {
//         if (error) {
//           console.log(error);
//         } else {
//           console.log("Message sent!");
//         }
//       }
  

//   // this for sending only text emails

//   // const message = {
//   //   from: email,
//   //   to: options.email,
//   //   subject: options.subject,
//   //   text: options.message,
//   // };


//   const data = options.message

//   // for sending emails with templates 
  
//   const message = {
//     from: email,
//     to: options.email,
//     subject: options.subject,
//     template: 'english',
//     context:{ data } 
//   };
//   const info = await sesTransporter.sendMail(message);

//   console.log('Message sent: %s', info.messageId);
// };

// export { sendEmail }