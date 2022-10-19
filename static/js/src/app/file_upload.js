var icons = {
    "application/vnd.ms-excel": "fa-file-excel-o",
    "text/plain": "fa-file-text-o",
    "image/gif": "fa-file-image-o",
    "image/png": "fa-file-image-o",
    "application/pdf": "fa-file-pdf-o",
    "application/x-zip-compressed": "fa-file-archive-o",
    "application/x-gzip": "fa-file-archive-o",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation": "fa-file-powerpoint-o",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "fa-file-word-o",
    "application/octet-stream": "fa-file-o",
    "application/x-msdownload": "fa-file-o"
}

function attach(files) {
    attachmentsTable = $("#attachmentsTable").DataTable({
        destroy: true,
        "order": [
            [1, "asc"]
        ],
        columnDefs: [{
            orderable: false,
            targets: "no-sort"
        }, {
            sClass: "datatable_hidden",
            targets: [3, 4]
        }]
    });
    $.each(files, function (i, file) {
        var reader = new FileReader();
        /* Make this a datatable */
        reader.onload = function (e) {
            var icon = icons[file.type] || "fa-file-o"
            // Add the record to the modal
            attachmentsTable.row.add([
                '<i class="fa ' + icon + '"></i>',
                escapeHtml(file.name),
                '<span class="remove-row"><i class="fa fa-trash-o"></i></span>',
                reader.result.split(",")[1],
                file.type || "application/octet-stream"
            ]).draw()
        }
        reader.onerror = function (e) {
            console.log(e)
        }
        reader.readAsDataURL(file)
    })
}