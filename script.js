// Get input and preview elements
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
const jobInput = document.getElementById('job-input');
const jobOutput = document.getElementById('job-output');

// Update preview as user types
nameInput.addEventListener('input', () => {
    nameOutput.textContent = nameInput.value || "Your Name";
});

jobInput.addEventListener('input', () => {
    jobOutput.textContent = jobInput.value || "Your Job Title";
});
const downloadBtn = document.getElementById('download-btn');
const previewArea = document.getElementById('resume-preview');

downloadBtn.addEventListener('click', () => {
    html2pdf().from(previewArea).save('Resume.pdf');
});
