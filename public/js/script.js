function toggleMenu() {
    if (window.innerWidth > 980) { return; }
    if (document.querySelector('header nav').style.height !== 'auto') {
        document.querySelector('header nav').style.height = 'auto';
    }
    else {
        document.querySelector('header nav').style.height = 0;
    }
}

filesData = [];

colors = ["coral", "lightblue", "khaki", "pink", "lightgrey", "lightgreen"];

$(document).ready(function () {
    filesJsonData = getfiles();

    for (i in filesJsonData.files) {
        file = filesJsonData.files[i];

        filename = file.name;
        id = file.$id;
        currentFileData = {};
        currentFileData['name'] = filename;
        currentFileData['id'] = id;
        filesData.push(currentFileData);

        colourIndex = i % colors.length;
        color = colors[colourIndex];
        fileIcon = `<div class="fileicons" style="background-color:${color};" id="${id}"><p>${filename}</p></div>`;
        $("#directory").append(fileIcon);
    }
});

$(document).on("click", ".fileicons", function () {
    openFile($(this).attr('id'));
});

function openFile(fileId) {
    $(location).attr('href', '/editor?id=' + fileId);
}

function createFileProcess(title, data) {
    newFileData = newFile(title, data);
    id = newFileData.$id;
    openFile(id);
}

$(document).on("click", "#new-file", function () {
    createFileProcess("untitled", `Title:`);
});

// Upload Fountain script
document.getElementById('upload-file').addEventListener('change', function (e) {
    var fileData;
    var file = document.getElementById('upload-file').files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (e) {
        fileData = reader.result;
        if (fileData.trim() != "") {
            createFileProcess(file.name, fileData);
        } else {
            createFileProcess(file.name, `Title:`);
        }
    }
});