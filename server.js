const { json } = require("express")
var express = require("express")
var app = express()
var server = app.listen(3000,function(){
    console.log("Now listening finally!!")
})

app.use(express.static("websites"))
app.get("/exercises/:fname/:lname",function(req,res){
    var d = req.params
    console.log(d)
    res.send(`${d.fname} is your fname and ${d.lname} is your lname`)
})

var exerciseObjects = []
function getJSONfromText(exercise){
    exercise.forEach(el=>{
        var arr = el.split("-")
        var arr2 = arr[1].split(",")
        var exO = {}
        exO.muscle = arr[0]
        exO.exercises = arr2
        exerciseObjects.push(exO)
    })
}
var exer1 ="chest- barbell bench press, dumbbel flies, push ups, decline push ups, incline push ups, incline barbell bench press, decline barbell bench press, farmers carry, dips, dumbbel bench press, decline dumbbell press, incline dumbell press, cabe cross over, low cable crossover, landmine press, pullover, plate press out, close grip push ups"
var exer2 = "biceps- bicep curls, cable curls, hammer curls, spider curls, dumbbel weighters, barbell curls, ez-bar curls, concentration curls, ex-bar preacher curls, reverse curls, reverse barbel curls, underhand-grip inverted row, incline dumbbell curl, decline dumbbell curl, bent over barbell curl, zottman curl, cable flex curl, chin up"
var exer3 = "triceps- closegrip barbell bench press, decline triceps extension, cable push down, diamond push up, lying barbell tricep extension, tricep push down, pullover, lying dumbbel tricep extension,tate press, underhand kick backs, tricep overhead extension, dip, cable tricep extension, close-grip push up, barbell skull crusher " 
var exer4 = "back- barbell deadlift, romanian deadlift, straight leg deadlift, reverse fyle, cable reverse flye, lat pull down, pull up, bent over dumbbell row, bent over barbell row, chin up, neutral grip pull up, alternating dumbbell row, inverted row, snatch-grip rack deadlift, wide-grip pull up, landmine one-arm row, burpee, lying lateral raise, hang clean, back etension,seated cable row, superman, barbell back squat, sled pull, kettlebell swing, one-leg romanian deadlift, kettlebell windmill, upright row, chainsaws"
var exer5 = "legs- barbell back squats, barbell front squats, dumbbell squats, goblet squats, bulgarian split squat,dumbbell bulgarin split squat, barbell romanian deadlift, squat, dumbbell step up, barbell deadlift, leg press, calf raise, walking lunge, dumbbell walking lunge, barbell pause squat, reverse lunge, kettlebell swing, jump squat, box jump, barbell hip thrust, glute bridge, barbell overhead lunge, weighted wall sit, pistol squat"
var exer6 = "core-shoulder tap, plank, sit up, russian twist, butterly sit up, dead bug, kneeling wood chop, high boat to low boat, forearm plank, body saw, side bend, jackknife, hollow hold to jackknife,wheelbarrow, leg raise, core roll up, single leg jackknife, bicycle crunch, bridge, mountain climber,bird dog, windshield wiper, heel tap"
var exer7 = "shoulders- facepull, dumbbell shoulder press, cable shoulder press, high pull, seated dumbbell clean,barbell clean, trap raise, clean and press, snatch-grab high pull, lateral raise, cable lateral raisefront raise, cable front raise, bent over lateral raise, cable row, dive bomber pushup, pike press, dip, overhead press, dumbbell overhead press, snatch-grip low pull, snatch-grip shrug pull, dumbell deadlift shrug, barbell deadlift shurg, bent over reverse flye, upright row, dumbbell incline row, pull up" 

var exercisesList = [exer1,exer2,exer3,exer4,exer5,exer6,exer7]

getJSONfromText(exercisesList)
var fs = require("fs")
fs.writeFile("exercises.json",JSON.stringify(exerciseObjects),function(){
    console.log("written to the file")
})
// var w = fs.readFileSync("word.json")
// //console.log(JSON.parse(w))
// app.get("/all",function(req,resp){
//     resp.send(exerciseObjects)
//     var f = {
//         "name" : "karan",
//         "lname" : "sodji"
//     }
    
// })

