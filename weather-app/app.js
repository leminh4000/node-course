const request=require('request');

const url = 'http://api.weatherstack.com/current?access_key=ebe4d55d8f440c0d4175e0d725375e8b&query=21.725790,104.913643';

request({url, json: true}, (err, res)=>{
    // const data=JSON.parse(res.body);
    console.log(res.body.current);
    console.log(`It is currently ${res.body.current.temperature} degrees out. There is a chance of rain.`);
})