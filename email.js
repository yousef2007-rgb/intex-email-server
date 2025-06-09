const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "yoyoradigames@gmail.com",
    pass: "ccdqoimlvrkguohe",
  },
});

const mailOptions = {
  from: "yoyoradigames@gmail.com",
  to: ["yousefaburadi@yahoo.com",
    "jamel89@gmail.com"
  ],
  subject: "intex order",
  html: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>New Order Notification</title></head><body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;"><div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px;"><h2 style="color: #333333;">New Order Received</h2><p style="font-size: 16px; color: #555555;">Hello,</p><p style="font-size: 16px; color: #555555;">We are excited to inform you that a new order has been placed. Please click the link below to view the details of the order.</p><p style="text-align: center; margin: 30px 0;"><a href="https://intex-orders.vercel.app/" style="background-color: #007bff; color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 5px;">View Order</a></p><p style="font-size: 16px; color: #555555;">Thank you,<br>The Intex Orders Team</p></div></body></html>',
};

/*const mailOptions = {
  from: "yoyoradigames@gmail.com",
  to: ["yousefaburadi@yahoo.com"],
  subject: "intex order",
  html: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta charset="UTF-8"><meta content="width=device-width, initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title></title><!--[if (mso 16)]>    <style type="text/css">    a {text-decoration: none;}    </style>    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG></o:AllowPNG><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--></head><body>email server running</body></html>',
};
*/

const email = (orderId) => {
  if ( orderId ){ 
  	return transporter.sendMail(createMailOptions(orderId))
  }else{
	return transporter.sendMail(MailOptions)
  }
}

const createMailOptions = (orderId) => {
	const options = {
  from: "yoyoradigames@gmail.com",
  to: ["yousefaburadi@yahoo.com",
    "jamel89@gmail.com"
  ],
  subject: "intex order",
  html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>New Order Notification</title></head><body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;"><div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px;"><h2 style="color: #333333;">New Order Received</h2><p style="font-size: 16px; color: #555555;">Hello,</p><p style="font-size: 16px; color: #555555;">We are excited to inform you that a new order has been placed. Please click the link below to view the details of the order.</p><p style="text-align: center; margin: 30px 0;"><a href="https://intex-orders.vercel.app/order/${orderId}" style="background-color: #007bff; color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 5px;">View Order</a></p><p style="font-size: 16px; color: #555555;">Thank you,<br>The Intex Orders Team</p></div></body></html>`,
}
return options;
};

module.exports = email;
