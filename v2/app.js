var express=require("express");
var app=express();
var mongoose  = require("mongoose");
mongoose.connect("mongoose://localhost/yelpCamp");

var campSchema = new mongoose.Schema({
    name : String,
    image : String
});

var CampGround = mongoose.model("CampGround",campSchema);

CampGround.create(
    {
        name: "Hula Lala",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_BnZDMAUJ8_rBFXc_06Bjqxf6EPvNkqeXOIRylSH9ImDp1QK"
    },function(err,c)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(c);
        }
    }
);

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
var camps = [
    {name : "Sheli",image:"https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/munmorah-state-conservation-area/freemans-campground/freemans-campground-03.jpg"},
    {name : "Sheli",image:"https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/munmorah-state-conservation-area/freemans-campground/freemans-campground-03.jpg"},
    {name : "Sheli",image:"https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/munmorah-state-conservation-area/freemans-campground/freemans-campground-03.jpg"},
    {name : "Sheli",image:"https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/munmorah-state-conservation-area/freemans-campground/freemans-campground-03.jpg"},
    {name : "Mangro",image:"https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/munmorah-state-conservation-area/freemans-campground/freemans-campground-03.jpg"},
    {name : "Crusty",image:"https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/munmorah-state-conservation-area/freemans-campground/freemans-campground-03.jpg"},
    {name : "Wodman",image:"https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/munmorah-state-conservation-area/freemans-campground/freemans-campground-03.jpg"}

]
//Routes
app.get("/",function(req,res){
    res.render("home");
})

app.get("/Campgrounds",function(req,res){
   
    res.render("Campgrounds",{camps:camps});
})

app.get("/new",function(req,res){
    res.render("new");
})

app.post("/Campgrounds",function(req,res){
    var name = req.body.name;
    var image = req.body.image;
    var newCamp = {
        name:name,image:image
    }
    camps.push(newCamp);
    res.redirect("/Campgrounds");
})



//Listen
app.listen(2000,process.env.IP,function(){
    console.log("Starting YelpCamp server!!");
})