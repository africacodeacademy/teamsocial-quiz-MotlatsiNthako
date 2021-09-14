const cheerio = require('cheerio');
const { attr } = require('cheerio/lib/api/attributes');
const request = require('request');

var URL = 'https://www.reddit.com/r/dankmemes/';

request(URL, function(error, response,html) {
    //IF THERE IS NO ERROR
    
    if(!error){
        //THE URL DATA
        const $ = cheerio.load(html);

        //SAVE EMBEDED URLS
        var returnIfo = [];

        //TREVERSE THE WEBPAGE AND SELECT THE MEDIA ELEMENTS
        $('.media-element').each(function(i, element){
            var temporary = $(this).attr('src'); //CREATE A REFERENCE FOR THE IMAGE
            returnIfo.push(temporary); // ADD THE URL ADDRESS TO THE RETURNINFO ARRAY
        });

        //GENERATE A RANDOM NUMBER FROM THE LEGHTH OF THE RETURNED IMAAGE URLS
        var randomNum = Math.floor(Math.random() * returnIfo.length);
        
        //OUTPUT THE URL, IF IT DOESN'T EXIST OR THERE IS A PROBLEM IT LOG
        try {
            //Outputing the URL for the image(it can be embed somewhere)
            console.log(returnIfo[randomNum]);
            

        } catch(e) {
            //output the error
            console.log("Error in the output process: " + e);
        }        
    }else {
        //There was an error with our request
        console.log("Error in webscrape process: " + error);
    }
});