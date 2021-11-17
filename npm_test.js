import getInfo from "./index.js"

getInfo.getArchiveInfo("2019","1").then(obj => { 
    console.log("Archives ") 
	console.log(obj)
}).catch(err => {
	console.log(err)
})
