const axios = require('axios');
const cheerio = require('cheerio')
const parseString = require('xml2js').parseString;
const fs = require('fs');

let URL = 'https://medisys.newsbrief.eu/rss/?type=search&mode=advanced&exact=african+swine+fever&language=en'


const getHTML = async(URL) =>{
    try{
        let dataa = await axios.get(URL);
        return await dataa.data
        
    } catch (error) {
        console.log(error)
    }
}


getHTML(URL).then(res=>{
    let json = [];
    const $ = cheerio.load(res)
    const wantdata = $('item');
    wantdata.each((idx,elem)=>{
        title = elem.children[0].children[0].data
        link = elem.children[7].attribs['url']
        country =  elem.children[7].attribs['country']
        date = elem.children[5].children[0]['data']
        // fs.writeFile('1.txt',elem.text(),function(){
        json.push({title:title, link:link, country:country, date:date})
        })
    console.log('json:',json)
    });


