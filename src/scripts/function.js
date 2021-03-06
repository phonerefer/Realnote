 // Char count
 function countChars(countfrom, displayto) {
     let len = document.getElementById(countfrom).value.length;
     document.getElementById(displayto).innerHTML = len;
 }

 // Reset Button Reloads The Page
//  function refreshPage() {
//      window.location.reload();
//  }

// new text
function clearStorage() {
    if (confirm("Are you sure you want to clear? This will erase all the content.")) {
        window.localStorage.clear();
        location.reload();
    }
}

 // Copy To Clipboard
 function copyClipboard() {
     let copyText = document.getElementById("data"); // Get the text field
     copyText.select(); // Select the text field
     copyText.setSelectionRange(0, 99999); // For mobile devices

     document.execCommand("copy"); // Copy the text inside the text field
 }

 // Download Function
 function downloadFile(filename, content) {
     const element = document.createElement('a');
     const blob = new Blob([content], {
         type: '.txt'
     });
     // "type" in the line above is a MIME type
     // It can have a different value, based on a file you want to save
     const fileUrl = URL.createObjectURL(blob);
     element.setAttribute('href', fileUrl);
     element.setAttribute('download', filename);
     element.style.display = 'none';
     document.body.appendChild(element);
     element.click();
     document.body.removeChild(element);
 };

 window.onload = () => {
     document.getElementById('download')
         .addEventListener('click', (e) => {
             const filename = document.getElementById('filename').value;
             const content = document.getElementById('data').value;
             if (filename && content) {
                 downloadFile(filename, content);
             }
         });
 }

 // Buttons Disabled If Textarea Is Empty - Jquery
 let $button = $("#r-btn, #c-btn, #d-btn");
 $button.prop("disabled", true);

 $("#data").keyup(function () {
     $button.prop("disabled", (this.value === "") ? true : false);
 });

 // Down Slider Nav
 function openNav() {
     document.getElementById("myNav").style.height = "100%";
 }

 function closeNav() {
     document.getElementById("myNav").style.height = "0%";
 }

 // modal
 let modal = document.getElementById("myModal");
 let btn = document.getElementById("d-btn");
 let span = document.getElementsByClassName("close")[0];

 // When the user clicks the button, open the modal 
 btn.onclick = function () {
     modal.style.display = "block";
 }

 // When the user clicks on <span> (x), close the modal
 span.onclick = function () {
     modal.style.display = "none";
     window.location.reload();
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function (event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }