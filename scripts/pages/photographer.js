import { getPhotographers } from "../utils/getPhotographersData.js"
import { displayDataPhotographer } from "../utils/displayData.js";

displayDataPhotographer(await getPhotographers());

