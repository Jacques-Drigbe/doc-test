

function fetchData(){
fetch('https://www.marinetraffic.com/getData/get_data_json_4/z:2/X:1/Y:0/station:0')
.then(response => {
return response.json();
})
.then(data =>{
    console.log(data.data.rows);
});
}

fetchData();