//import {fetch} from 'node-fetch'

import axios from "axios"

function getInfo(){
    return new Promise((done, err) => {
		err('Use One of Our Methods, Please Check API for reference on Methods')
	})
}

getInfo.getArchiveInfo = ((year, month, apiKey) => {
    return new Promise((done, err) => {
        if(typeof year === 'undefined' && typeof month === 'undefined' ) {
            err('Provide both year and month')
        } else {
            
            axios(`https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=${apiKey}`,{
                method: "GET"
            })
                .then(response => {
                    if (response.status === 200) {
                        return response.data
                    } else {
                        err(`Sorry, Bad response code : ` + response.status)
                    }
                })
                .then(json => done(json))
                .catch(error => console.error(`Sorry, Error: ` + error))
        }
    })
})
getInfo.getArticleInfo = ((query,apiKey) => {
    return new Promise((done, err) => {
        if(typeof query === 'undefined') {
            err('Provide query to fetch articles related to that')
        } else {
            axios(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`,{
                method: "GET"
            })
                .then(response => {
                    if (response.status === 200) {
                        return response.data.response.docs
                    } else {
                        err(`Sorry, Bad response code : ` + response.status)
                    }
                })
                .then(json => done(json))
                .catch(error => console.error(`Sorry, Error: ` + error))
        }
    })
})
getInfo.getTopStories = ((topic,apiKey) => {
    return new Promise((done, err) => {
        if(typeof topic === 'undefined') {
            err('Provide a topic to fetch top stories related to that')
        } else {
            axios(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${apiKey}`,{
                method: "GET"
            })
                .then(response => {
                    if (response.status === 200) {
                        return response.data
                    } else {
                        err(`Sorry, Bad response code : ` + response.status)
                    }
                })
                .then(json => done(json))
                .catch(error => console.error(`Sorry topic not found: ` + error))
        }
    })
})
getInfo.getMostPopular = ((type,days,apiKey) => {
    return new Promise((done, err) => {
        if(typeof type === 'undefined' && typeof days === 'undefined') {
            err('Provide a topic to fetch top stories related to that')
        } else {
            axios(`https://api.nytimes.com/svc/mostpopular/v2/${type}/${days}.json?api-key=${apiKey}`,{
                method: "GET"
            })
                .then(response => {
                    if (response.status === 200) {
                        return response.data
                    } else {
                        err(`Sorry, Bad response code : ` + response.status)
                    }
                })
                .then(json => done(json))
                .catch(error => console.error(`Sorry : ` + error))
        }
    })
})

export default getInfo
