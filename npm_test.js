import getInfo from "./index.js"

/*getInfo.getArchiveInfo("2019","1").then(obj => { 
    console.log("Archives ") 
	console.log(obj)
}).catch(err => {
	console.log(err)
})

getInfo.getArticleInfo("meta").then(obj => { 
    console.log("Articles ") 
	console.log(obj)
}).catch(err => {
	console.log(err)
})
getInfo.getTopStories("science").then(obj => { 
    console.log("Top Stories") 
	console.log(obj)
}).catch(err => {
	
	console.log(err)
})*/

getInfo.getMostPopular("viewed","1").then(obj => { 
    console.log("Most Popular") 
	console.log(obj)
}).catch(err => {
	
	console.log(err)
})
