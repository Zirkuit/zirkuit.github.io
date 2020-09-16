function goto(element, link) {
    element.style.transition = ".1s"
    element.style.color = "white"
    element.style.borderColor = "white"
    setTimeout(function(){ 
        element.style.color = ""
        element.style.borderColor = ""
        setTimeout(function(){ 
            element.style.color = "white"
            element.style.borderColor = "white"
            setTimeout(function(){ 
                element.style.color = ""
                element.style.borderColor = ""
                setTimeout(function(){ 
                    element.style.transition = ""
                    if (link != "debug") {
                        window.location.href = link;
                    } else {
                        alert("Page is not yet ready")
                    }
                }, 100);
            }, 100);
        }, 100);
    }, 100);
}

function getjobs() {
    console.log("start")
    fetch('jobs.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
                console.log(data)
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("maincontent");
            console.log("done1")
            for (var i = 0; i < data.jobs.length; i++) {
                console.log("done2")
                var div = document.createElement("div");
                div.innerHTML = '<a onclick="goto(this,' + data.jobs[i].id + "')><h2>" + data.jobs[i].name + "</h2> <h3> Remote </h3></a>"
                mainContainer.appendChild(div);
                console.log("done")
            }
        }
}