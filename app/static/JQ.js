//import { fetchFormattedJson } from './ajaxFunctions.js';

$(document).ready(function () {
    $('#format_button').click(function (e) { 
        e.preventDefault();
        var raw_data=$('#floatingTextarea2').val();
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

//          fetchFormattedJson(raw_data);

    });

    $('#floatingTextarea2').on('input', function() {
        var inputValue = $(this).val();

        if (inputValue.trim() !== '') {

            $('#labelfloatingTextarea2').hide();
            console.log(inputValue);
            var raw_data=$('#floatingTextarea2').val();
            const checkbox = document.getElementById('flexSwitchCheckDefault');
            if (checkbox.checked){
            console.log("checked");
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
                navigator.clipboard.writeText(formatted_string)
                  .then(() => {
                    console.log('String copied to clipboard:', formatted_string);
                  })
                  .catch(err => {
                    console.error('Unable to copy to clipboard:', err);
                  });
                hljs.highlightBlock($('#floatingTextarea2')[0]);
                $("#floatingTextarea2").removeClass("error"); // Remove error class if success
            },
            error: function (xhr, status, error) {
                $("#floatingTextarea2").val("Only supporting JSON data!!");
                $("#floatingTextarea2").addClass("error");
              }
        });
         var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
                    }
                    else{
                    console.log("Unchecked")
                    }
//                      fetchFormattedJson(raw_data);

//            if ($("#flexSwitchCheckDefault").checked){
//                navigator.clipboard.writeText(formatted_string)
//                  .then(() => {
//                    console.log('String copied to clipboard:', formatted_string);
//                  })
//                  .catch(err => {
//                    console.error('Unable to copy to clipboard:', err);
//                  });
//                }
        } else {
            $('#labelfloatingTextarea2').show();
        }
    });

  // Change Background
 $(document).ready(function() {
            $('#flexSwitchCheckDefault').change(function() {
                var container = $('.pro-container-custom');
                var textarea = $('.pro-textarea');
                var hide_format_button = $('.pro-hide-button');
                if (this.checked) {
                    container.addClass('checked');
                    textarea.addClass('checked');
                    textarea.css({ 'height': '500px' ,'color':'white'});
                    hide_format_button.addClass('checked');
                } else {
                    container.removeClass('checked');
                    textarea.removeClass('checked');
                    textarea.css({ 'height': '400px' });
                    hide_format_button.removeClass('checked');
                }
            });
        });



  $(document).ready(function () {

    // Add a click event handler for the copy button
    $('#copy_button').click(function (e) {
        e.preventDefault();
        var textareaContent = $('#floatingTextarea2').val();

        // Create a temporary textarea element to copy the content
        var tempTextarea = $('<textarea>');
        tempTextarea.text(textareaContent);
        $('body').append(tempTextarea);

        // Select and copy the content from the temporary textarea
        tempTextarea.select();
        document.execCommand('copy');

        // Remove the temporary textarea
        tempTextarea.remove();

        // Optionally, provide visual feedback or a message to the user
          var x = document.getElementById("snackbar");
          x.className = "show";
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    });

});


    $(document).keydown(function (event) {
        if(event.ctrlKey && (event.key==='v' || event.key==='V')){
            if(navigator.clipboard && navigator.clipboard.readText){
                navigator.clipboard.readText().then(function (text) { 
                    console.log(text)
                    $("floatingTextarea2").val(text);
                 }).catch(function(err){
                    console.error("Failed to read clipboard contents: ", err);
                 });
            }else{
                var box_area=$("#floatingTextarea2");
                box_area.focus();
                document.execCommand("paste");
            }
            
        }    
    });
});