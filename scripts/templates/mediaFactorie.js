import { mediaTemplate } from "./photographer.js";

export function factoryMedia (media, selectedPhotographers) {
    const mediaModel = mediaTemplate(media, selectedPhotographers);

    switch (media.type) {
        
        case media.video :
            mediaModel.getPictureMedia();
        break;

        case media.image :
            mediaModel.getVideoMedia();
        break;
    }
}




    


