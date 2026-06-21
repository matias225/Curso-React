
const myPromise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        // resolve(100);
        reject('Mi amigo se perio');
    }, 2000);
})

myPromise.then(
    (myMoney) => {
        console.log(`Tengo mi dinero ${ myMoney }`);
}).catch( reason => {
    console.warn(reason);
    
}).finally(() => {
    console.log('Pues a seguir con mi vida');
})