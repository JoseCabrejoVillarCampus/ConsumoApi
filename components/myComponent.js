export default{
    pagina(){
        const newsList=document.getElementById('news');
        const news= new Worker("../storage/wsMyComponent.js",{type:"module"});
        news.postMessage({accion:"showAll", body:articles});
        news.addEventListener("message",(e)=>{
            newsList.innerHTML=[...e.data];
            news.terminate()
        })
    }
}

