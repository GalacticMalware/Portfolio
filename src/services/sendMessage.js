// import axios from "node_modules/axios/index.cjs"

import axios from "axios";

export async function sendMessage(message) {
    console.log(message)
    const config = {
        method: 'POST',
        url: 'http://localhost:4143/portafolio/message',
        data: { message }
    }
    return await axios.request(config);
}