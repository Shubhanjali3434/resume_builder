// Update preview section as user types
const form = document.getElementById('resumeForm');

form.addEventListener('input', () => {
    document.getElementById('previewName').textContent = document.getElementById('name').value;
    document.getElementById('previewTitle').textContent = document.getElementById('title').value;
    document.getElementById('previewExperience').textContent = document.getElementById('experience').value;
    document.getElementById('previewEducation').textContent = document.getElementById('education').value;
    document.getElementById('previewSkills').textContent = document.getElementById('skills').value;
});

// Function to generate PDF using jsPDF library
function generatePDF() {
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Resume', 10, 10);
    doc.setFontSize(12);

    doc.text(`Name: ${name}`, 10, 30);
    doc.text(`Title: ${title}`, 10, 40);
    doc.text('Experience:', 10, 50);
    doc.text(experience, 10, 60);
    doc.text('Education:', 10, 80);
    doc.text(education, 10, 90);
    doc.text('Skills:', 10, 110);
    doc.text(skills, 10, 120);

    doc.save('resume.pdf');
}
