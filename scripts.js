const token='e67de96e00735607dea8df60345cc1fa'
const base = `https://superheroapi.com/api.php/${token}`


const search = document.getElementById('search')
const getsuperhero = (id) =>{
    fetch(`${base}/${id}`)
    .then(response=>response.json())
    .then(json=>{
        const  stats= getStatsHtml(json)
        const name = `<h2>${json.name}</h2>`
        document.getElementById("superheroimg").innerHTML =`${name}<img src="${json.image.url}" height =200 width =200 />${stats}`
        console.log(json.image.url)
        
    }
)   

}
const getsearchedsuperhero =(name) =>{
    fetch(`${base}/search/${name}`)
    .then(response=>response.json()) 
    .then(json=>{
        const hero = json.results[0]
        const name2 = `<h2>${hero.name}</h2>`
        const stats =   `<h2>speed :${hero.powerstats.speed}</h2>
                        <h2>intelligence:${hero.powerstats.intelligence}</h2>    
                        <h2>strength:${hero.powerstats.strength}</h2>
                        <h2>durability:${hero.powerstats.durability}</h2>
                        <h2>power:${hero.powerstats.power}</h2>
                        `
        document.getElementById("superheroimg").innerHTML =`${name2}<img src="${hero.image.url}" height =200 width =200  /> ${stats}`
        console.log(hero)
        
    })
}
search.onclick=()=>{
    const name1= document.getElementById('input').value
    getsearchedsuperhero(name1)
}

const rnumn =()=> {
    return Math.floor(Math.random()*731)+1;
}

const ran = document.getElementById('randombtt')
ran.onclick= () =>{
    
    getsuperhero(rnumn())
}
const getStatsHtml = (character) => {
     const stats = Object.keys(character.powerstats).map(stat=>{
       return `<p>${stat.toUpperCase()}:${character.powerstats[stat]} </p>`
      })
      return stats.join('')
}

// getsuperhero(80)