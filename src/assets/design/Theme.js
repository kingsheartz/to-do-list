// Images
import lightTileImg from "../images/reg.jpg";
import lightBgImg from "../images/lightblue.jpg";
import darkTileImg from "../images/cab-bg.jpg";
import darkBgImg from "../images/dark-bg.jpg";
import { color } from "./Color";

export const Theme = {
    "dark-theme": {
        "name":"dark-theme",
        "bg-color": color["space-cadet"],
        "form-bg": color["white"],
        "form-heading": color["space-cadet"],
        "input-label": color["pala-aqua"],
        "input-text-font": color["neon-silver"],
        "input-text-border-bottom": `1px solid ${color["tropical-indigo"]}`,
        "input-text-border-bottom-on-focus": `1px solid ${color["aluminium"]}`,
        "to-do-list-button-bg-color": color["star-command-blue"],
        "to-do-list-button-font": color["white"],
        "to-do-list-button-border": `1px solid ${color["star-command-blue"]}`,
        "to-do-list-button-bg-color-on-hover": color["white"],
        "to-do-list-button-border-on-hover": `1px solid ${color["star-command-blue"]}`,
        "to-do-list-button-font-on-hover": color["star-command-blue"],
        "bg-img": darkBgImg,
        "tile-bg-img": darkTileImg,
        "table-bg": color["space-cadet"],
        "table-font": color["white"],
        "th-bg": color["star-command-blue"],
        "tr-bg": color["black"],
        "th-font": color["white"],
        "table-del-btn-bg": color["black"],
        "table-del-btn-color": color["white"],
        "tr-even-bg": color["space-cadet2"],
        "tr-odd-bg": color["space-cadet"]
    },

    "light-theme": {
        "name":"light-theme",
        "bg-color": color["white"],
        "form-bg": color["space-cadet"],
        "form-heading": color["white"],
        "input-label": color["star-command-blue"],
        "input-text-font": color["imperial-blue"],
        "input-text-border-bottom": `1px solid ${color["tropical-indigo"]}`,
        "input-text-border-bottom-on-focus": `1px solid ${color["imperial-blue"]}`,
        "to-do-list-button-bg-color": color["imperial-blue"],
        "to-do-list-button-font": color["white"],
        "to-do-list-button-border": `1px solid ${color["imperial-blue"]}`,
        "to-do-list-button-bg-color-on-hover": color["anti-flash-white"],
        "to-do-list-button-border-on-hover": `1px solid ${color["imperial-blue"]}`,
        "to-do-list-button-font-on-hover": color["imperial-blue"],
        "bg-img": lightBgImg,
        "tile-bg-img": lightTileImg,
        "table-bg": color["white"],
        "table-font": color["black"],
        "th-bg": color["bleu-celeste"],
        "tr-bg": "neon-silver",
        "th-font": color["white"],
        "table-del-btn-bg": color["gainsboro"],
        "table-del-btn-color": color["red"],
        "tr-even-bg": color["white-smoke"],
        "tr-odd-bg": color["white"]
    }
}