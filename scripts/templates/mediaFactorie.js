import { mediaTemplate } from "./photographer.js";

export function factoryMedia (media){
    const mediaModel = mediaTemplate(media);
    switch (media.type) {
        
        case media.image :
            
            const mediaPhotoModel = mediaModel.getPictureMedia();
        break;

        case media.video :
           
            const mediaVideoModel = mediaModel.getVideoMedia();
        break;

    }
}




    


