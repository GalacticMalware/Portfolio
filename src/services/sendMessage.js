// import axios from "node_modules/axios/index.cjs"

import axios from "axios";

export async function sendMessage(message) {
    const config = {
        method: 'POST',
        url: 'https://www.soydanielalejandro.info/portafolio-api/message',
        data: { message }
    }
    return await axios.request(config);
}