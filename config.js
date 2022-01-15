import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faArrowLeft, faArrowRight, faShoppingCart, faCartPlus, faPlus, faPlusSquare, faImage, faEdit, faCaretUp, faCaretDown, faReply, faStore, faInfo, faUser, faUserTag } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import {API_HOST,API_URL,APP_TOKEN} from "@env";

axios.defaults.baseURL = `http://${API_HOST}/${API_URL}`;
axios.defaults.headers.common['Authorization'] = `Basic ${APP_TOKEN}`;

library.add(
  faTrash,
  faArrowLeft,
  faArrowRight,
  faShoppingCart,
  faCartPlus,
  faPlus,
  faImage,
  faEdit,
  faCaretUp,
  faCaretDown,
  faReply,
  faStore,
  faInfo,
  faUser,
  faPlusSquare,
  faUserTag
)


export default function Config(props)
{
    if(props === true)
        return({
            api_host: API_HOST,
            api_url: API_URL,
            app_token: APP_TOKEN
        });
    return null;
}