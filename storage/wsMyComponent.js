import api from "../API/api.js";

let ws={
    async showAll(name){
        const data = await api.getAll(name);
        console.log(data);
        let plantilla='';
        data.articles.forEach(element => {
            const{author, title, description}=element;
            plantilla +=`
            <div class="title">${title}</div>
            <div class="author">${author}</div>
            <div class="description">${description}</div>
            `
        });
        return plantilla;
    }
}
self.addEventListener("message", (e)=>{
    Promise.resolve(ws[`${e.data.accion}`]((e.data.body) ? e.data.body : undefined)).then(res => postMessage(res));
})