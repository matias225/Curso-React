import type { GiphyRandomResponse } from '../data/giphy.random-res';

const API_KEY = 'HLzVJsAvTOQ7XWwMLK78NMgR8JIVCiOB';

const myRequest = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}

myRequest
    .then((response)=> response.json())
    .then(({data}: GiphyRandomResponse) => {        
        const imageUrl = data.images.original.url;
        createImageInsideDOM(imageUrl);
    })
    .catch((err)=>{
        console.error(err);
    });


