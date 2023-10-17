urlParams = new URLSearchParams(window.location.search);
const productTitle = urlParams.get("productTitle");
const productDescription = urlParams.get("productDescription");
const vendor = urlParams.get("vendor");

const titleDiv = document.getElementById("productTitle");
const descriptionContentDiv = document.getElementById("tinymce")
const productPriceDiv = document.getElementById("productPrice");

titleDiv.value = productTitle;
productPriceDiv.value = vendor;

// Rich Text
tinymce.init({
    selector: "#productDescription",
    height: 300,
    plugins: "lists link image",
    toolbar: "undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | link image",
    setup: function (editor) {
        // Set the initial content with the first word in bold
        editor.on('init', function () {
            editor.setContent(productDescription);
        });
    }
});
