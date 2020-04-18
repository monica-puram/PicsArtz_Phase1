var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var multer = require('multer')
var cors = require('cors');
var fs = require('fs');
app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3001);



//ContactUs
app.post('/contactInfo',function(req,response) {
  var dateTime = new Date();
  var fileName = "contactInfo_"+dateTime.getDate()+"-"+dateTime.getMonth()+1+"-"+dateTime.getFullYear()+".txt";
  fs.appendFile(fileName, JSON.stringify(req.body)+"\n", function (err) {
    if (err) {
      return response.end("Error while submitting your information : "+err);
    }
    else {
      return response.status("200").send("Successfully submitted your information. \n We will reach out to you soon!");
    }
  });
})

//Careers Apply now

app.post('/applyNow',function(req,response){
  
  console.log(req.file);
  console.log(req.body);
  var storage =  multer.diskStorage({
    destination: (req, file, callback) => {
      
      let path = `./resumes/`;
      if (!fs.existsSync(path)){
        fs.mkdirSync(path);
    }
      callback(null, path);
    },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
  })
  
  var upload = multer({ storage: storage }).single('file');
  console.log(req.body.firstName);
  console.log("Request object :"+JSON.stringify(req.body));
  upload(req, response, function (err) {
    if (err instanceof multer.MulterError) {
        return response.status(500).json(err)
    } else if (err) {
        return response.status(500).json(err)
    }
    console.log(req.body.firstName);
    var dateTime= new Date();
    var fileType = req.file.filename.substr(req.file.filename.lastIndexOf('.'));
    var newFileName = dateTime.getDate()+'-'+dateTime.getMonth()+'-'+dateTime.getFullYear()+'_'
                      +req.body.firstName+'_'+req.body.lastName+fileType;
    fs.exists('./resumes/'+req.file.filename, (exists) => { 
      fs.rename('./resumes/'+req.file.filename, './resumes/'+newFileName, function(err){
        if (err) throw err;
        console.log('File Renamed!');
      })
      console.log(exists ? 'Found' : 'Not Found!'); 
     }); 
    
  return response.status(200).send(req.file)

})
})

