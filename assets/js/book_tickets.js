var bookForm = document.querySelector('.book-form');
var bookBtn1 = document.querySelector('.book_btn1');

var sendBtn = document.querySelector('.send_book_btn')
var closeBtn = document.querySelector('.close-book-btn');
var formOverlay = document.querySelector('.form-overlay');

function hideForm() {
    bookForm.style.opacity = '0';
    bookForm.style.transform = 'translateY(-150%)';
    formOverlay.style.display = 'none';
}

function displayForm() {
    bookForm.style.opacity = '1';
    bookForm.style.transform = 'translateY(0%)';
    formOverlay.style.display = 'block';
}

bookBtn1.onclick = displayForm;

sendBtn.onclick = hideForm;
closeBtn.onclick = hideForm;
