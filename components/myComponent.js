export default{
    pagina(){
        news.addEventListener("message",(e)=>{
            let name=document.querySelector("#news")
            const all= new Worker ("../storage/wsMyComponent.js",{type:"module"});
            all.postMessage({accion:"showAll", body:data});
            all.addEventListener("message",(e)=>{
                name.innerHTML=[...e.data];
            })
            newsList.innerHTML=[...e.data];
            all.terminate()})
        }      
    }

