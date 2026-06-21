
const getImages = async() => {

    try {
        const apiKey = 'r0I1J8BYHUCzTXZLLvJAsJd81Qy2TYAS';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();

        const { url } = await data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);    
    } catch (error) {
        // manejor del error
        console.error(error);
        
    }
} 

getImages();
