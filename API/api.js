const getAll = async (name)=>{
        try {
            const apiKey = 'f77f7f14762247308f3743d5b03c0397';
            let response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-03-28&sortBy=${name}pub&apiKey=${apiKey}`);
            let data = response.json();
            return data;
        }catch (error) {
            console.error(error);
        }
}
export default{
    getAll
}