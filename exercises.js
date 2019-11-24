baseURL= "https://trackapi.nutritionix.com/v2/natural/exercise";
const appID = "0ea8257f";
const appKey = "8d3608f6f98eaaede5c6c69d34f87008";
const section = document.querySelector('section');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
let input = document.getElementById('search');

searchForm.addEventListener('submit',getExercise); 

function getExercise(e){
    e.preventDefault();
let exercise = input.value;
fetch(baseURL,{
    method:"POST",
    headers: new Headers({
        "Content-Type":"application/json",
        "x-app-id":appID,
        "x-app-key":appKey,
        "X-remote-user-id":"0"
    }),
    body:JSON.stringify({
        query:exercise,
        gender:"female",
        weight_kg:72.5,
        height_cm:167.64,
        age:30
    })
})
.then(result => result.json())
.then(function(response){
    console.log(response)
    //console.log(response.exercises[0].duration_min)
    displayResults(response);
})
}
function displayResults(response){
    let exercises = response.exercises;

    if (exercises.length === 0){
        console.log("No results");
    }else{
        for(let i = 0; i < exercises.length; i++){
        let exercise = document.createElement(exercise);

        section.appendChild(exercise);
    }
}
};
