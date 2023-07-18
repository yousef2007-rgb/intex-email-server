var nodemailer = require('nodemailer');
const fs = require('fs');
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'yoyoradigames@gmail.com',
        pass: 'ccdqoimlvrkguohe'
    }
});


var mailOptions = {
    from: 'yoyoradigames@gmail.com',
    to: ['yousefaburadi@yahoo.com', 'jamel89@gmail.com'],
    subject: 'intex order',
    html: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta charset="UTF-8"><meta content="width=device-width, initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title></title><!--[if (mso 16)]>    <style type="text/css">    a {text-decoration: none;}    </style>    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG></o:AllowPNG><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--></head><body><div class="es-wrapper-color"><!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"><v:fill type="tile" color="#fafafa"></v:fill></v:background><![endif]--><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings" valign="top"><table cellpadding="0" cellspacing="0" class="es-header" align="center"><tbody><tr><td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600"><tbody><tr><td class="esd-structure es-p20" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="560" class="es-m-p0r esd-container-frame" valign="top" align="center"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-image es-p10b" style="font-size: 0px;"><a target="_blank"><img src="https://www.intexjo.com/Assets/images/logo.png" alt="Logo" style="display:block;font-size:12px" width="200" title="Logo"></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="es-content" align="center"><tbody><tr><td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600"><tbody><tr><td class="esd-structure es-p15t es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-image es-p10t es-p10b" style="font-size: 0px;"><a target="_blank"><img src="https://scontent.famm12-1.fna.fbcdn.net/v/t39.30808-6/305578933_399180165693525_4456881597812752770_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHQN5aVY5_oyBVe4kAeRgAu-nv9WlswWmD6e_1aWzBaYAkpj51L8X9lfIDgey18nVR1FQpkpTh5XgMglgYnOJeq&_nc_ohc=gtXPt5nSWBIAX-TByu4&_nc_ht=scontent.famm12-1.fna&oh=00_AfB62b8vHOd6k7zy1tP2B2MdqishnXC9Q7d-GW9ExbKMPA&oe=64B24FD5" alt="" style="display:block" width="560"></a></td></tr><tr><td align="center" class="esd-block-text es-p10b es-m-txt-c"><h1 style="font-size: 46px; line-height: 100%;">New Order</h1></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="es-content" align="center"><tbody><tr><td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600"><tbody><tr><td class="esd-structure es-p20" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-text es-p5t es-p15b es-p40r es-p40l es-m-p0r es-m-p0l"><p>There is a new order on intexjo.com check it out on the orders app</p></td></tr><tr><td align="center" class="esd-block-button"><span class="es-button-border" style="border-radius: 6px; border-color: #5c68e2; border-width: 2px; background: #5c68e2;"><a href="https://intex-orders.vercel.app/" class="es-button" target="_blank" style="border-left-width: 30px; border-right-width: 30px; border-radius: 6px;">Orders App</a></span></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td class="esd-structure es-p10t es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="560" class="es-m-p0r esd-container-frame" align="center"><table cellpadding="0" cellspacing="0" width="100%" style="border-top:2px solid #efefef;border-bottom:2px solid #efefef"><tbody><tr><td align="center" class="esd-empty-container" style="display: none"></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td class="esd-structure es-p20t es-p10b es-p20r es-p20l" align="left"><!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="280" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-left" align="left"><tbody><tr><td width="280" class="esd-container-frame" align="left"><table cellpadding="0" cellspacing="0" width="100%" role="presentation"><tbody><tr><td align="center" class="esd-empty-container" style="display: none"></td></tr></tbody></table></td></tr></tbody></table><!--[if mso]></td><td width="0"></td><td width="280" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-right" align="right"><tbody><tr><td width="280" class="es-m-p0r esd-container-frame" align="center"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-empty-container" style="display: none"></td></tr></tbody></table></td></tr></tbody></table><!--[if mso]></td></tr></table><![endif]--></td></tr><tr><td class="esd-structure es-p15t es-p10b es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="560" align="left" class="esd-container-frame"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-empty-container" style="display: none"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div></body></html>'
};


let initialData = {};



// Function to load data from the JSON file
const loadInitialDataFromFile = () => {
    try {
        const data = fs.readFileSync('initialData.json', 'utf8');
        return JSON.parse(data);
    } catch (error) {
        // Return an empty object if the file doesn't exist or there's an error reading it
        return {};
    }
};

const getData = () => {
    let data;
    return fetch("http://orders.fore-site.net/media_admin/api/api_secure.php?module=orders&method=orders_get_all&sk1=DICOSECSK1oolshdsf33sadGGHsd376&debug=yes&device_id=33333333&data=1&lang=en&username=28")
        .then(res => res.json())
        .then(data => data.data.orders.filter((order, index) => order.cart_code.includes("web_") && order.notes != null
            ?
            !order.notes.includes("test") &&
            !order.notes.toLowerCase().includes("aburadi")

            : false))

}
const saveDataToFile = () => {
    getData().then(data => fs.writeFileSync('initialData.json', JSON.stringify(data)));
};
const dataCheck = () => {
    getData().then(data => {
        console.log(`[Data Checked]:[${new Date()}]`);
        if (JSON.stringify(data) != JSON.stringify(initialData)) {
            saveDataToFile();

            //sends a new messege
            console.log('\x1b[33m%s\x1b[0m', "changed");
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });

            initialData = data;

            return;
        }
        console.log('\x1b[36m%s\x1b[0m', "didn't change");
        return;
    })
    return;
}

//sets initial data
initialData = loadInitialDataFromFile();
//checks the api every 5 minutes
setInterval(dataCheck, 60000 * 5);

console.log('\x1b[36m%s\x1b[0m', "the app has started sucessfully");
