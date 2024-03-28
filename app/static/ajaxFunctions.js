
function fetchFormattedJson(raw_data){
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
//            dataType: "json",
            url: "/get",
            data: raw_data,
            success: function (response) {
                console.log(response);
                var formatted_string=JSON.stringify(response,null,4)
                $("#floatingTextarea2").val(formatted_string);

                hljs.highlightBlock($('#floatingTextarea2')[0]);
                $("#floatingTextarea2").removeClass("error"); // Remove error class if success
            },
            error: function (xhr, status, error) {
                $("#floatingTextarea2").val("Only supporting JSON data!!");
                $("#floatingTextarea2").addClass("error");
              }
        });
}