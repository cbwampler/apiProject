baseURL= "https://trackapi.nutritionix.com/v2/natural/exercise";
const appID = "0ea8257f";
const appKey = "8d3608f6f98eaaede5c6c69d34f87008";
const section = document.querySelector('ul');
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
.then(json => {
    displayExercises(json);
})
}

function displayExercises(json){
    let exercises = json.exercises;
    console.log(exercises);

    if(exercises.length === 0) {
        console.log("No Resuts");
    }else {exercises.forEach(e =>{
        let exercises = document.createElement('li');
        exercises.innerHTML = `${e.name} burned ${Math.round(e.nf_calories)} calories in ${e.duration_min} minutes`;
        section.appendChild(exercises);
    })
    }
};