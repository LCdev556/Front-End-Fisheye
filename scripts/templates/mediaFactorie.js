import { mediaTemplate } from "./photographer.js";

/**
 * Trie des media selon leur type (video/photo) pour leurs appliquer le bon model de construction 
 * 
 * @param {*} media 
 * @param {*} selectedPhotographers 
 */
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




    


