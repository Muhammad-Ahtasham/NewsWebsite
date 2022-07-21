// Your API key is: cbec5d8ed5d24a039f742ae996a6d31e
console.log("file added");

let source_key = 'cbec5d8ed5d24a039f742ae996a6d31e';

// grabingt the news container
let newsAccordion = document.getElementById("newsAccordion");

//creating a get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=${source_key}`, true);
// xhr.getResponseHeader('content-type', 'application/json');
// 
// 
xhr.onload = function () {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    let newsHtml = "";
   
    articles.forEach(function(element, index){
        // console.log(articles[news]);
        console.log(index)
        let news = `<a class="btn btn-secondary my-2" data-bs-toggle="collapse" href="#collapse${index}" role="button" aria-expanded="false" aria-controls="collapse${index}">
        <span class="badge badge-success">Breaking News ${index+1} - </span>
        ${element["title"]}
                    </a>          
                    <div class="collapse" id="collapse${index}">
                    <div class="card card-body">
                    ${element["description"]}
                    <a href="${element["url"]} target="_blank">Read More Here</a>
                    </div>
                    </div>
                    <hr>`;
        newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
}
xhr.send();

