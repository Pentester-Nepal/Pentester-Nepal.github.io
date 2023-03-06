fetch("rss.json")
.then(response => response.json())
.then(response => 
    {
        response.forEach(response => {
            card = document.createElement("div");
            card.className = "card";
            desc = document.createElement("div");
            desc.className = "description";
            h2 = document.createElement("h2");
            h2.className ="title";
            h2.textContent = response.title;
            sub_desc = document.createElement("div");
            sub_desc.innerHTML = response.description;
            document.getElementById("cards").appendChild(card);
            card.appendChild(desc);
            desc.appendChild(h2);
            desc.appendChild(sub_desc);
        });
    })
