document.getElementById('search').addEventListener('click', onload_function);

    let width = this.innerWidth, //this refers to window
        height = this.innerHeight,
    //this will be for getting the current date
    computerDate = new Date(),
    dd = String(computerDate.getDate()).padStart(2, '0'),
    mm = String(computerDate.getMonth() + 1).padStart(2, '0'), //January is 0!
    yyyy = computerDate.getFullYear(),
    today = yyyy + '-' + mm + '-' + dd;

onload_function()
function onload_function() {

    let xhr = new XMLHttpRequest() , endpoint = `https://api.nasa.gov/planetary/apod`, myKey = `?api_key=Fgrr1lJp3BQ5AUgM9k0EuSkLS0R9RhUKbSavz4dP`;

    if (document.getElementById('dateinput').value == '') {

        endpoint += myKey + "&date=" + today + '&hd=true';
        
    } else {

        endpoint += myKey + '&date=' + document.getElementById('dateinput').value + '&hd=true';

    }

    console.log(endpoint);

    xhr.open('GET', endpoint ,true);

    xhr.onload = () => {

        console.log(JSON.parse(xhr.responseText));
        
        const nasaData = JSON.parse(xhr.responseText);

        if (nasaData.code == '400') {
            document.getElementById('dateinput').value = '';
            document.getElementById('dateinput').placeholder = 'Please enter date in the correct format.';
        } else if (nasaData.hdurl) {

        } else {

            document.getElementById('image').src = nasaData.hdurl;

            document.getElementById('title').innerHTML =  nasaData.title;

            document.getElementById('date').innerHTML = 'Date: ' + nasaData.date;

            document.getElementById('photoinfo').innerHTML = 'About this image: ' + '<hr>' + nasaData.explanation;

        }

    }

    xhr.send();
}

