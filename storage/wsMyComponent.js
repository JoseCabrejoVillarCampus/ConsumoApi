import api from "../API/api.js";

let ws={
    async showAll(articles){
        const data = await api.getAll(articles);
        console.log(data.articles);
        let html='';
        data.articles.forEach(element => {
            const{author, title, description}=element;
            html +=`
            <div class="title">${title}</div>
            <div class="author">${author}</div>
            <div class="description">${description}</div>
            `
        });
        return [html]
    }
}
self.addEventListener("message", (e)=>{
    Promise.resolve(ws[`${e.data.accion}`]((e.data.body) ? e.data.body : undefined)).then(res => postMessage(res));
})