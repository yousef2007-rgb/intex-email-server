var nodemailer = require('nodemailer');

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
    html: '<a href="https://intex-orders.vercel.app/">the orders have been updated check the orders app</a>'
};


let initialData = {};




const getData = () => {
    let data;
    return fetch("http://orders.fore-site.net/media_admin/api/api_secure.php?module=orders&method=orders_get_all&sk1=DICOSECSK1oolshdsf33sadGGHsd376&debug=yes&device_id=33333333&data=1&lang=en&username=28")
        .then(res => res.json())
        .then(data => data.data.orders.filter((order, index) => order.cart_code.includes("web_") && order.notes != null
            ? !order.notes.includes("test") &&
            !order.notes.toLowerCase().includes("yousef") &&
            !order.notes.toLowerCase().includes("jamil") &&
            !order.notes.toLowerCase().includes("jameel")
            : false))

}

const dataCheck = () => {
    getData().then(data => {
        console.log(`[Data Checked]:[${new Date()}]`);
        if (JSON.stringify(data) != JSON.stringify(initialData)) {
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
getData().then(res => initialData = res);
//checks the api every minute
setInterval(dataCheck, 60000 * 5);

