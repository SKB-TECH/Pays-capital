// const url='https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Sexe&format=json&origin=*&srlimit=15';
// fetch(url)
//     .then((reponse)=>reponse.json())
//     .then((donne)=>console.log(donne));

// const personne=
//     {
//         nom:'shako',
//         taille:12,
//         age:'12m'
//     }

// const personne2={...personne,nom:'Jean',Sexe:'M',grade:"LC"}

// const {nom,taille,age}=personne
// console.log(personne2,personne)

const form = document.getElementById("form");
const text = document.getElementById("text");


form.addEventListener("input", (e) => {
  e.preventDefault();
  if (text.value.trim!==0) {
    let url = `https://restcountries.com/v3.1/name/${text.value}`;

    fetch(url)
      .then((reponse) => {
        if (reponse.status === 200) {
          return reponse.json();
        } 
        else {
          console.log(reponse.statusText);
        }
      })
      .then((data) => {
        console.log(data)
        let affichage='<ul>'
        for(ville of data){
           affichage += `<li><strong>Capital: ${ville.capital}</strong></li>`
           affichage += `<li><img src="${ville.flags.svg}"/></li>`
           affichage +=`<li>Population:  ${ville.population} Habitants</li>`
           affichage += `<li>Continent:  ${ville.region}</li>`
        }
        affichage+='</ul>'
        affichage+='<hr/>'
        document.getElementById('res').innerHTML=affichage
      }).catch(error=>console.log('Vous avez erreur '+error));
  }
});
