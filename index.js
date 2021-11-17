//import {fetch} from 'node-fetch'

import axios from "axios"

function getInfo(){
    return new Promise((done, err) => {
		err('Use One of Our Methods, Please Check API for reference on Methods')
	})
}

getInfo.getArchiveInfo = ((year, month) => {
    return new Promise((done, err) => {
        if(typeof year === 'undefined' && typeof month === 'undefined' ) {
            err('Provide both year and month')
        } else {
            let apiKey = 'ZnqEsIALud8ejdd5wcZWAZxdlpFjBhnT'
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

export default getInfo
