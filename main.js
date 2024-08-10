window.addEventListener('scroll', function() {
  const scrollToTopButton = document.getElementById('scrollToTop');
  if (window.scrollY > 100) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


function triggerDownload() {
    document.getElementById("downloadLink").click();
}


function downloadPDF() {
  const googleDriveUrl = 'https://drive.google.com/file/d/1qma_RVk42JKdIE9hcUOqOLOCpfxEonCf/view?usp=sharing';
  const link = document.createElement('a');
  link.href = googleDriveUrl;
  link.download = 'Gaurav - Resume Aug 2023.pdf';
  link.target = '_blank'; // Open in a new tab

  // Handle potential errors or redirects
  link.addEventListener('error', (event) => {
    console.error('Error downloading PDF:', event);
    // Handle the error, e.g., display an error message
  });

  link.click();
}