    var array = [];
    var test = document.querySelectorAll(".ads-ad > div > a:nth-child(2)")
    var repeat = test.length
    var pageNumber = document.querySelector('td.cur').innerText
    var keyword = document.querySelector("#tsf > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input").value
    
    function repeater(){
        document.getElementById('pnnext').click();
    }

    // go to next page
    if (pageNumber < 3 ){

        var i = 0
        function addingToaArray(){

            var i;
            for (i = 0; i < repeat; i++) {
                var string = test[`${i}`].innerText
                var res = string.split("Anuncio")
                var name = res[0]
                var url = res[1]
                pageRank = (i+1)
                array.push({ pageRank: pageRank, pageNumber: pageNumber, keyword: keyword, Name: name, url: url });
            }
                chrome.storage.local.set({array: array}, function() {
                    chrome.storage.local.get(['array'], function (result) {
                        leads = result.array
                        console.log(leads)
                    });
                  });

        }
        
        addingToaArray()

        // repeater()

        

        
    } else {

        chrome.storage.local.get('array', function (result) {
            leads = result.array
        });

    }
