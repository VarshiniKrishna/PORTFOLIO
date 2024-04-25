
document.addEventListener('DOMContentLoaded', function() {
   
    const downloadBtn = document.getElementById('downloadResumeBtn');

    downloadBtn.addEventListener('click', function() {
       
        const resumePath = "C:\Users\Administrator\Desktop\PORTFOLIO\MyResume.pdf"; 
       
        const anchor = document.createElement('a');

        
        anchor.href = resumePath;

       
        anchor.download = 'MyResume.pdf'; 

        anchor.click();
    });
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    if (!name || !email) {
      e.preventDefault();
      alert('Please fill in all fields');
    }
  });
  


document.addEventListener('scroll', function() {
    const button = document.getElementById('backToTop');
    
    if (window.scrollY > 300) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  });
  
  document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  


