    function repeater(){
        document.getElementById('pnnext').click();
    }

    localData = chrome.storage.local.get('leads', (data) => {
        leads = Object.entries(data).length ? data.leads : []
        leadsArray = document.querySelectorAll(".ads-ad > div > a:nth-child(2)")
        pageNumber = document.querySelector('td.cur').innerText
        keyword = document.querySelector("#tsf > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input").value

        Array.from(leadsArray).map((u, i) => {
            let title = u.querySelector('h3').innerText;
            let url = u.querySelector('div > cite').innerText;
            let ranking = i + 1;

            let data = { title, url, ranking, keyword, pageNumber }
            leads.push(data)
        })

        chrome.storage.local.set({ leads }, ()=> {
            repeater()
        })
    })