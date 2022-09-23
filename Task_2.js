const express=require("express");
const app=express()
const axios= require("axios")


app.get("/", async (req, res) => {
	try {
		const response = await axios.get("https://breakingbadapi.com/api/characters")
			
		res.status(200).json(response.data)
    res.send(response)
	} catch (err) {
		res.status(500).json({ message: err })
	}
})


app.listen(3000 ,function(){
    console.log("Server has started running")
})