import $ from 'jquery'

const flickerApi = 'https://api.flickr.com/services/rest/?jsoncallback=?'

export const searchPicture = async (text, lat, lng) => {
    // The jquery getJSON method was necessary in order to
    // be able to get a JSONP response and avoid CORS problems.
    return new Promise((resolve, reject) => {
        $.getJSON(flickerApi, {
            method: 'flickr.photos.search',
            api_key: 'f8d489d78abc8cb77d6a375457b69ff8',
            sort: 'relevance',
            privacy_filter: 1,
            safe_search: 1,
            per_page: 3,
            page: 1,
            format: 'json',
            nojsoncallback: 1,
            text,
            lat,
            lng
        })
        .done(result => {
            resolve(result)
        })
        .fail(error => {
            reject(error)
        })
    })
}

export const makePicturesUrl = (picturesInfo) => {
    return picturesInfo.map(pictureInfo => {
        let { farm, server, id, secret } = pictureInfo
        let pictureUrl = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
        return pictureUrl
    })
}
