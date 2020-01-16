document.getElementById('search').addEventListener('click', search_function);

    let width = this.innerWidth, //this refers to window
        height = this.innerHeight;

function call_api_function() {
  

    let xhr = new XMLHttpRequest() , endpoint = `https://api.nasa.gov/planetary/apod`, myKey = `?api_key=Fgrr1lJp3BQ5AUgM9k0EuSkLS0R9RhUKbSavz4dP`;

    endpoint += myKey + "&date=" + today + '&hd=true';
    
    // console.log(endpoint);

    xhr.open('GET', endpoint ,true);

    xhr.onload = () => {

        console.log(JSON.parse(xhr.responseText));
        
        const nasaData = JSON.parse(xhr.responseText);

        if (nasaData.msg != undefined && nasaData.msg.includes('format')) {
            document.getElementById('dateinput').value = '';
            document.getElementById('dateinput').placeholder = 'Incorect Format (YYYY-MM-DD)';
        } else if (nasaData.msg != undefined && nasaData.msg.includes('Date')) {
          
          document.getElementById('dateinput').value = '';
          document.getElementById('dateinput').placeholder = 'Valid Dates:' + nasaData.msg.substring(20, 33) + " --- " + nasaData.msg.substring(38, nasaData.msg.length-1);
                   
        } else {

            document.getElementById('image').src = nasaData.hdurl;

            document.getElementById('title').innerHTML =  nasaData.title;

            document.getElementById('date').innerHTML = 'Date: ' + nasaData.date;

            document.getElementById('photoinfo').innerHTML = 'About this image: ' + '<hr>' + nasaData.explanation;
            
            document.getElementById('dateinput').placeholder = 'Format (YYYY-MM-DD)';

        }

    }

    xhr.send();
}

function search_function() {
    today = document.getElementById('dateinput').value.trim();
    call_api_function()
}


