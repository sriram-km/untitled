var d = new DisplayScript();
var p = new FountainParser('fountain', d);
var sp = new Screenplay('fountain', p, d);
var fileid = "";

function getDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    if (month.toString().length == 1) {
        month = '0' + month;
    }
    if (day.toString().length == 1) {
        day = '0' + day;
    }
    if (hour.toString().length == 1) {
        hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        minute = '0' + minute;
    }
    if (second.toString().length == 1) {
        second = '0' + second;
    }
    var dateTime = year + '-' + month + '-' + day + '_' + hour + ':' + minute + ':' + second;
    return dateTime;
}

// Download Fountain script
document.getElementById('download-file').addEventListener('click', function (e) {
    var content = document.getElementById('fountain').value; /// TODO FROM TITLE AND CURRENT DATE AND TIME
    var title = document.getElementById('title').innerText;
    var dateTime = getDateTime();
    var filename = title + '_' + dateTime + '.txt';
    var blob = new Blob([content], {
        type: "text/plain;charset=utf-8"
    });
    saveAs(blob, filename);
});

document.getElementById('change-view').addEventListener('click', function (e) {
    console.log('View changed.')
    if (document.getElementById('change-view').innerText == 'View') {
        document.getElementById('change-view').innerText = 'Edit';
        document.getElementById('viewer').style.width = '100%';
        document.getElementById('editor').style.width = '0%';
    }
    else {
        document.getElementById('change-view').innerText = 'View';
        document.getElementById('viewer').style.width = '0%';
        document.getElementById('editor').style.width = '100%';
    }
});

function updateTitle(title) {
    document.getElementById('title').innerText = title;
}

function updateStats() {
    document.getElementById('page-count').innerText = document.getElementById('scenario').children.length;
    document.getElementById('scene-count').innerText = document.getElementsByClassName('heading').length;
    document.getElementById('word-count').innerText = document.getElementById('fountain').value.trim().split(/\s+/).length;
    document.getElementById('dialog-count').innerText = p.characters.length;
    document.getElementById('location-count').innerText = p.locations.length;
}

function saveFile() {
    data = document.getElementById('fountain').value;
    filename = document.getElementById('title').innerText;
    updateFile(fileid,filename,data);
}


function toggleMenu() {
    if (window.innerWidth > 980) { return; }
    if (document.querySelector('header nav').style.height !== 'auto') {
        document.querySelector('header nav').style.height = 'auto';
    }
    else {
        document.querySelector('header nav').style.height = 0;
    }
}

document.querySelector('header nav').addEventListener('click', function () {
    toggleMenu();
});

window.onbeforeunload = function () {
    return 'Have you saved everything? Click download to store the script on your pc.';
};

$(document).ready(function () {
    searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("id")) {
        fileid = searchParams.get("id");
        filesJsonData = getfiles();
        filesData = [];

        isPresent = false;

        for (i in filesJsonData.files) {
            file = filesJsonData.files[i];

            filename = file.name;
            id = file.$id;
            currentFileData = {};
            currentFileData['name'] = filename;
            currentFileData['id'] = id;
            filesData.push(currentFileData);
            if (id == fileid){
                isPresent = true;
            }
        }
        
        if (isPresent){
            this.fileid = fileid;
            document.getElementById('fountain').value = getfile(fileid);
            p.parseFountain();
        } else{
            window.location.replace("/");
        }

    } else {
        window.location.replace("/");
    }
});

$(document).on("click", "#home-button", function () {
    $(location).attr('href', '/');
});

$(document).on("click", "#delete-button", function () {
    let text = "Are you sure you want to delete?";
  if (confirm(text) == true) {
    deletefile(fileid);
    $(location).attr('href', '/'); 
  }
});