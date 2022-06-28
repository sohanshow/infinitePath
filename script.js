const count = 10;
const apiKEY = 'lSq05HF-zUS2aCrGJLuBpcBQNQwWSgKn-2bRh7l0dmI';

//Unsplash API
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKEY}&count=${count}`;


//Get photos from Unsplash

async function getPhotos(){

    try{

       const response = await fetch (apiURL);
       const data = await response.json();
       console.log(data);

    }  catch(error){

        //Catch error here. With error statement.

    }
}


//Upon loading
getPhotos();