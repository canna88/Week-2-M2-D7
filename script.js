// Codice JavaScript

/*
Definiamo la funzione searchJobs che accetta 2 parametri,

All'interno di serachJobs dovremo assicurarci di creare un nuovo array nel quale inserire i 
lavor iche rispettino elntrame le chiavi di ricerca
in altre parole, la stringa del titleJob
*/

// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]

// Definisco la funzione searchJobs: ritorna un array con gli oggetti della ricerca e il loro numero

function searchJobs (titleQuery, locationQuery) {

  // Definisco le variabili della funzione
  let jobSearched = titleQuery.toLowerCase();
  let locationSearched = locationQuery.toLowerCase();
  let result = [];
  let contatore = 0


  if (titleQuery === "" || locationQuery === "") {
    // Se gli input sono vuoti, restituisce i valori vuoti
    return [result, contatore = 0]
  } else {

    // Sennò inizia il ciclo
    for (let i = 0; i < jobs.length; i++) {

      if (jobs[i].title.toLowerCase().includes(jobSearched) === true && jobs[i].location.toLowerCase().includes(locationSearched)) {
        result.push({Title : jobs[i].title, Location: jobs[i].location})
        contatore += 1
      }
    }
  }
  return [result, contatore]
}

// Identifico gli elementi scatenanti degli eventi
const myInputJob = document.getElementById("myInput-job");
const myInputLocation = document.getElementById("myInput-location");
const searchButton = document.getElementById("searchButton");
const eraseButton = document.getElementById("eraseButton");
const outputList = document.getElementById("outputList");
const barResult = document.getElementById("bar-result");

//Definisco la funzione che pesca gli elementi e li da in pasto alla funzione jobSearch
const performSearch = function () {

    // Svuota la lista degli output
    barResult.innerHTML = ""; 
    outputList.innerHTML = "";

    // Assegno i valori degli input alla funzione searchJobs
    const sJob = myInputJob.value;
    const sLocation = myInputLocation.value;
    const [resultArray,cont] = searchJobs(sJob, sLocation);

    // Ciclo if per capire se ci sono risultati o meno
    if (cont > 0) {
      barResult.textContent = "Your search produced " + cont + " results"
  
      for (let j = 0; j < resultArray.length; j++) {
        let listItem = document.createElement("li")
        listItem.innerHTML = "Job: " + resultArray[j].Title + "<br>Location: " + resultArray[j].Location;
        outputList.appendChild(listItem)
      }
    } else {
      barResult.textContent =  "Your search did not give any results"
    }
  
    if (sJob === "" && sLocation === "" ) {
      barResult.textContent = "Please enter a job and location"
    } else if (sJob === "") {
      barResult.textContent = "You have not entered any job to search for"
    } else if (sLocation === "" ) {
      barResult.textContent = "You have not entered any location"
  }
}

// Definisco la funzione che performa la ricerca anche con il tasto invio su entrambi gli input
const handleKeyPress = function(event) {
  if (event.key === "Enter") {
    performSearch();
  }
};

// Definisco la funzione per azzerare la ricerca
const performErase = function () {
  myInputJob.value = ""
  myInputLocation.value = ""
  barResult.innerHTML = "";
  outputList.innerHTML = "";
};

// Applico le funzioni
searchButton.addEventListener("click", performSearch);
myInputJob.addEventListener("keydown", handleKeyPress);
myInputLocation.addEventListener("keydown", handleKeyPress);
eraseButton.addEventListener("click", performErase);
