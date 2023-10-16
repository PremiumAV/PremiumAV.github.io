// Rich Text
tinymce.init({
    selector: "#productDescription",
    height: 300,
    plugins: "lists link image",
    toolbar: "undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | link image",
    setup: function (editor) {
        // Set the initial content with the first word in bold
        editor.on('init', function () {
            editor.setContent('<strong>FirstWordBold</strong> Rest of the content.');
        });
    }
});