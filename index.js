var nodemailer = require("nodemailer");
const _ = require("lodash");
const fs = require("fs");
const logFile = "./log.txt"

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "yoyoradigames@gmail.com",
    pass: "ccdqoimlvrkguohe",
  },
});

var mailOptions = {
  from: "yoyoradigames@gmail.com",
  to: ["yousefaburadi@yahoo.com", 
"jamel89@gmail.com"
  ],
  subject: "intex order",
  html: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>New Order Notification</title></head><body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;"><div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px;"><h2 style="color: #333333;">New Order Received</h2><p style="font-size: 16px; color: #555555;">Hello,</p><p style="font-size: 16px; color: #555555;">We are excited to inform you that a new order has been placed. Please click the link below to view the details of the order.</p><p style="text-align: center; margin: 30px 0;"><a href="https://intex-orders.vercel.app/" style="background-color: #007bff; color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 5px;">View Order</a></p><p style="font-size: 16px; color: #555555;">Thank you,<br>The Intex Orders Team</p></div></body></html>',
};
var mailOptions2 = {
  from: "yoyoradigames@gmail.com",
  to: ["yousefaburadi@yahoo.com"],
  subject: "intex order",
  html: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta charset="UTF-8"><meta content="width=device-width, initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title></title><!--[if (mso 16)]>    <style type="text/css">    a {text-decoration: none;}    </style>    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG></o:AllowPNG><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--></head><body>email server running</body></html>',
};

fs.appendFile(logFile, "\n" + `started`, (err) => {
  if (err) {
    console.error('Error writing to the file:', err);
  } else {
    // console.log('Successfully wrote to the file.');
  }
});


let initialData = {};

// Function to load data from the JSON file
const loadInitialDataFromFile =  () => {
    const data = fs.readFileSync("./initialData.txt", "utf8")
    	

return data;
    // console.log(data);
};

const getData = () => {
  let data;
  return fetch(
    "http://orders.fore-site.net/media_admin/api/api_secure.php?module=orders&method=orders_get_all&sk1=DICOSECSK1oolshdsf33sadGGHsd376&debug=yes&device_id=33333333&data=1&lang=en&username=28"
  )
    .then((res) => res.json())
    .then((data) =>
      data.data.orders.filter((order, index) =>
        order.cart_code.includes("web_") && order.notes != null
          ? !order.notes.includes("test") &&
          !order.notes.toLowerCase().includes("aburadi")
          : false
      )
    );
};
const saveDataToFile = () => {
  getData().then((data) =>{
    fs.writeFileSync("./initialData.txt",JSON.stringify(data))
	  console.log("wtd")

  }
  );
};
const dataCheck = () => {
  getData().then((data) => {
    console.log(`[Data Checked]:[${new Date()}]`);

    fs.appendFile(logFile, "\n" + `[Data Checked]:[${new Date()}]`, (err) => {
      if (err) {
        console.error('Error writing to the file:', err);
      } else {
        console.log('Successfully wrote to the file.');
      }
    });
    if (JSON.stringify(data) != initialData) {

      //sends a new messege
      console.log("\x1b[33m%s\x1b[0m", "changed");
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
          saveDataToFile();
          fs.appendFile(logFile, "\n" + `changed`, (err) => {
            if (err) {
              console.error('Error writing to the file:', err);
            } else {
              console.log('Successfully wrote to the file.');
            }
          });
        }
      });

      initialData = JSON.stringify(data);

      return;
    }
    console.log("\x1b[36m%s\x1b[0m", "didn't change");
    fs.appendFile(logFile, "\n" + `didn't change`, (err) => {
      if (err) {
        console.error('Error writing to the file:', err);
      } else {
        console.log('Successfully wrote to the file.');
      }
    });
    return;
  });
  return;
};

transporter.sendMail(mailOptions2, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
//sets initial data
initialData=loadInitialDataFromFile();
 dataCheck();
setInterval(dataCheck, 60000 * 5)

//checks the api every 5 minutes


console.log("\x1b[36m%s\x1b[0m", "the app has started sucessfully");
