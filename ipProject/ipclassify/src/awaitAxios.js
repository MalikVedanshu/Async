import axios from "axios";

async function hitRandomAPI(){
    try {
        let colorz = []; 
        for(let i = 0; i < 10; i++){
            let colors = await axios.get('https://random-data-api.com/api/color/random_color');
            colorz.push(colors.data);
        }
        return colorz;
    }
    catch(error) {
        return error;
    }
}

hitRandomAPI()