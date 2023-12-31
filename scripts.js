urlParams = new URLSearchParams(window.location.search);
const productTitle = urlParams.get("productTitle");
const productDescription = urlParams.get("productDescription");
const vendor = urlParams.get("vendor");

const titleDiv = document.getElementById("productTitle");
const descriptionContentDiv = document.getElementById("tinymce")
const vendorDiv = document.getElementById("vendor");

titleDiv.value = productTitle;
vendorDiv.value = vendor;

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

document.getElementById("imageUpload").addEventListener("change", function (e) {
    const imagePreviews = document.getElementById("image-previews");
    imagePreviews.innerHTML = ""; // Clear previous previews

    for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files[i];
        const imagePreview = document.createElement("div");
        imagePreview.className = "image-preview";
        const imageElement = document.createElement("img");
        imageElement.src = URL.createObjectURL(file);
        imagePreview.appendChild(imageElement);

        // Add 'Remove' button
        const removeButton = document.createElement("span");
        removeButton.innerHTML = "&#10006;"; // 'x' symbol
        removeButton.className = "remove-image";
        removeButton.id = e.target.files[i].name;
        removeButton.addEventListener("click", function () {
            imagePreviews.removeChild(imagePreview);
            // document.getElementById("imageUpload").value = ""; // Clear file input
            const currentFiles = document.getElementById("imageUpload").files;
            const newFiles = [];
            for (let i = 0; i < currentFiles.length; i++) {
                if (currentFiles[i].name !== removeButton.id) {
                    newFiles.push(currentFiles[i]);
                }
            }
            let dataTransfernew = new DataTransfer()
            for (let i = 0; i < newFiles.length; i++) {
                dataTransfernew.items.add(newFiles[i]);
            }
            document.getElementById("imageUpload").files = dataTransfernew.files;
        });

        imagePreview.appendChild(removeButton);
        imagePreviews.appendChild(imagePreview);
    }
});


// Adding images to files upload
const imgs = document.getElementById("imageUpload");
const landingImg = urlParams.get("landingImg");
const myFile = new File(['Landing Page Image 0'], landingImg, {
    type: 'image/jpeg',
});
const dataTransfer = new DataTransfer();
dataTransfer.items.add(myFile);
imgs.files = dataTransfer.files;

const imagePreviews = document.getElementById("image-previews");
const imagePreview = document.createElement("div");
imagePreview.className = "image-preview";
const imageElement = document.createElement("img");
imageElement.src = landingImg;
imagePreview.appendChild(imageElement);

// Add 'Remove' button
const removeButton = document.createElement("span");
removeButton.innerHTML = "&#10006;"; // 'x' symbol
removeButton.className = "remove-image";
removeButton.addEventListener("click", function () {
    imagePreviews.removeChild(imagePreview);
    document.getElementById("imageUpload").value = ""; // Clear file input
});

imagePreview.appendChild(removeButton);
imagePreviews.appendChild(imagePreview);
