const email = require("./email")
const fs = require("fs");
let currentId = require("./currentId.json")

const updateCurrentId = (newValue)=>{
    currentId.id = newValue; 
    fs.writeFileSync('./currentId.json', JSON.stringify(currentId))
}


const getData = () => {
  return fetch(
    "http://orders.fore-site.net/media_admin/api/api_secure.php?module=orders&method=orders_get_all&sk1=DICOSECSK1oolshdsf33sadGGHsd376&debug=yes&device_id=33333333&data=1&lang=en&username=28"
  )
    .then((res) => res.json())
    .then((data) =>
      data.data.orders.filter((order, index) =>
        order.cart_code.includes("web_") && order.notes != null
          ? order.notes.includes("test") &&
          !order.notes.toLowerCase().includes("aburadi")
          : false
      )
    );
};

const checkOrders = async () =>{
    const data = await getData();
    const dataSorted = data.sort((a,b) => b.id - a.id);
    const firstId = dataSorted[0].id;
    if(firstId > currentId.id){
        try{
        const emailResponse=await email();
        console.log(emailResponse.response)
        updateCurrentId(firstId);
        console.log("\x1b[33m%s\x1b[0m", "changed");
        }catch(err){
            console.log("error sending email")
        }   
    }else{
        console.log("\x1b[36m%s\x1b[0m", "didn't change");
    }

}

setInterval(checkOrders,60000*10);

//email();
