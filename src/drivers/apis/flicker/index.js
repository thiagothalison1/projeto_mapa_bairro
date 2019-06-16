import { searchPicture, makePicturesUrl } from './flickerApi'
import messages from './messages.json'

export const findPlacePictures = async (name, position) => {
    try {
        let result = await searchPicture(name, position.lat, position.lng)
        let pictures = makePicturesUrl(result.photos.photo)

        return pictures
    } catch (error) {
        console.log(error)
        throw new Error(messages.ERROR.IMAGES_NOT_FOUND)
    }
}