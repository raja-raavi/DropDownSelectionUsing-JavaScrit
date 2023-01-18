document.getElementById("table").style.visibility="hidden"

document.getElementById("submitDetailsButton").addEventListener("click",function(){
    document.getElementById("table").style.visibility="visible"
})

let cities_areas = [
    {
        code:"Hyderabad",
        Areas:["Gachabowli","Film Nagar","Jubblie Hills"]
    },
    {
        code:"Vizag",
        Areas:["RK Beach Road","Rushikonda","Jagadamba Junction"]
    },
    {
        code:"Rajahmundry",
        Areas:["Y-Junction","JN Road","AVA Road"]
    }
]

let area_places = [
    {
        code:"Gachabowli",
        places:["Nanakramguda","Financial District","Wipro circle"],
    },
    {
        code:"Film Nagar",
        places:["Golconda Fort","Birla Mandir","Snow World"],
    },
    {
        code:"Jubblie Hills",
        places:["Peddamma Temple","Durgam Cheruvu","Cable Bridge"]
    },
    {
        code:"RK Beach Road",
        places:["Novotel","Aircraft museum","Submarine Museum"],
    },
    {
        code:"Rushikonda",
        places:["Rushikonda Beach","RamaKrishna Beach","Yadra Beach"],
    },
    {
        code:"Jagadamba Junction",
        places:["Prince hotel","D mart","Allah Biryani Point"]
    },
    {
        code:"Y-Junction",
        places:["Eat & Play","Kambal cheruvu","T-Point"],
    },
    {
        code:"JN Road",
        places:["Max","Panthalooms","Ravindra Barathi"],
    },
    {
        code:"AVA Road",
        places:["JK gradens","Iron Hill","Surya Hall"]
    }
]

let selectArea = document.getElementById("areas")
let selectPlace = document.getElementById("places")
let table = document.getElementById("table")

document.getElementById("submit").addEventListener("click",function(){  
   let x = document.getElementById("userselected").value
   for(ele of cities_areas) {
     if(x == ele.code){
        // console.log(ele.Areas);
        let arrAreas = ele.Areas
        // let op = document.createElement('option')
        // op.value = -1;
        // op.innerText = "Select Area";
        // selectArea.options[0] = op;

        let count = 1
        for(area of arrAreas){
           let op = document.createElement("option")
           op.value = area;
        //    console.log(`the value of ${op.value} is ` + op.value);
           op.innerText = area;
           selectArea.options[count] = op;
           count++ 
        }               
     }              
} 

selectArea.addEventListener("change",function(){ 
    let selectedArea = event.target.value
    // console.log(y);
    for(ele of area_places){
        if(selectedArea == ele.code){
            let arrPlaces = ele.places
            let i = 1
            for(place of arrPlaces){
                let ip = document.createElement("option")
                ip.value = place;
                ip.innerText = place;
                selectPlace.options[i] = ip;
                i++
            }
         }
    }
    selectPlace.addEventListener("change",function(){
        let selectedPlace = event.target.value
        // console.log(selectedPlace);
        let tr= document.createElement("tr")
        let td1 = tr.appendChild(document.createElement("td"))
        let td2 = tr.appendChild(document.createElement("td"))
        let td3 = tr.appendChild(document.createElement("td"))

        td1.innerHTML = document.getElementById("userselected").value
        td2.innerHTML = selectedArea;
        td3.innerHTML = selectedPlace;
        document.getElementById("table").appendChild(tr)
        
    })
})
})     