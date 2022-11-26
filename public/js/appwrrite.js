function getfiles() {
    data = {}
    $.ajax({
        url : "/api/files",
        type : "get",
        async: false,
        success : function(response) {
           data = response;
        },
        error: function() {
           connectionError();
        }
     });

    return JSON.parse(data);
}

function getfile(id) {
    filedata = {}
    $.ajax({
        url : "/api/file",
        data: { 
            fileId:id, 
        },
        type : "get",
        async: false,
        success : function(response) {
            filedata = response;
        },
        error: function() {
           connectionError();
        }
     });

    return filedata;
}

function deletefile(id) {
    filedata = {}
    $.ajax({
        url : "/api/deletefile",
        data: { 
            fileId:id, 
        },
        type : "get",
        async: false,
        success : function(response) {
            filedata = response;
        },
        error: function() {
           connectionError();
        }
     });

    return filedata;
}

function updateFile(id, filename, filedata) {
    fileResultData = {}
    $.ajax({
        url : "/api/updatefile",
        data: { 
            fileId: id,
            data: filedata,
            filename: filename
        },
        type : "post",
        async: false,
        success : function(response) {
            fileResultData = response;
        },
        error: function() {
           connectionError();
        }
     });

    return JSON.parse(fileResultData);
}

function newFile(filename, filedata) {
    fileResultData = {}
    $.ajax({
        url : "/api/createfile",
        data: {
            data: filedata,
            filename: filename
        },
        type : "post",
        async: false,
        success : function(response) {
            fileResultData = response;
        },
        error: function() {
           connectionError();
        }
     });

    return JSON.parse(fileResultData);
}