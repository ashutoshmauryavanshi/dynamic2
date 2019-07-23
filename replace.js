module.exports=function(template,json){
const fs=require("fs");
// let json=fs.readFileSync("./data.json");
// json=JSON.parse(json);

var productAt0=json;

let htmlTemplate=template;

let output=htmlTemplate.replace(/{%PRODUCTNAME%}/g,productAt0["productName"]);
output=output.replace(/{%IMAGE%}/g,productAt0["image"]);
output=output.replace(/{%QUANTITY%}/g,productAt0["quantity"]);
output=output.replace(/{%PRICE%}/g,productAt0["price"]);
output=output.replace(/{%DESCRIPTION%}/g,productAt0["description"]);
output=output.replace(/{%NUTRIENTS%}/g,productAt0["nutrients"]);
output=output.replace(/{%FROM%}/g,productAt0["from"]);
output=output.replace(/{%ID%}/g,productAt0["id"]);

if(productAt0["organic"]===false){
    output=output.replace(/{%NOT_ORGANIC%}/g,"not-organic");
}
return output;
}
