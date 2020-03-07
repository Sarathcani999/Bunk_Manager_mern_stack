// Importing libraries
const express = require('express')
const mysql = require('mysql')
const path = require('path')
const cookieparser = require('cookie-parser')


// creating an express object
app = express()


// Setting Up Static and handlebars views

app.use(express.urlencoded({ extended : false }))
app.use(express.json())
app.use(cookieparser())
app.set('views' , path.join( __dirname , './views'))
app.set('view engine' , 'hbs')
app.use(express.static(path.join(__dirname , './public')))



//Connecting Database
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'sampleDB'

})

// Connecting Database
connection.connect( (err) => {
    if(!err) {
        console.log("Connected to database")
    } else {
        console.log("Error found")
    }
})

// Routing

app.get('/viewAllSubjects' , (req,res) => {
    
    let sql = "SELECT * FROM subject"
    connection.query(sql , (error , results , fields) => {
        res.send(results)
    })
})

app.patch('/incrementAttendance' , async (req,res) => {
    let sql = "UPDATE subject SET subject.count = subject.count+1 WHERE subject.s_id = " + req.body.subject_id 

    try{
        connection.query(sql , (error , results , fields) => {
            if (!error) {
                res.send("No error")
            }else {
                res.send("Error Updating the count")
            }
            
        })
    
    }catch (e){
        res.send("No response")
    }


})

app.patch('/decrementAttendance' , async (req,res) => {
    let sql = "UPDATE subject SET subject.count = subject.count-1 WHERE subject.s_id = " + req.body.subject_id 

    try{
        connection.query(sql , (error , results , fields) => {
            if (!error) {
                res.send("No error")
            }else {
                res.send("Error Updating the count")
            }
        })
    
    }catch (e){
        res.send("No response")
    }

})



// Establishment of Port at 3000 
app.listen(5000 , () => {
    console.log("Port established at 3000")
})