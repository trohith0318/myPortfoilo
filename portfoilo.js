// Contact modal popup logic
const contactModal = document.getElementById("contactModal");
const openContactModalBtn = document.getElementById("openContactModal");
const closeContactModalBtn = document.getElementById("closeContactModal");

openContactModalBtn.addEventListener("click", function(){
  contactModal.style.display = "block";
});

closeContactModalBtn.addEventListener("click", function(){
  contactModal.style.display = "none";
});

window.addEventListener("click", function(event){
  if (event.target === contactModal) {
    contactModal.style.display = "none";
  }
});

// Skills modal popup logic
const skillsModal = document.getElementById("skillsModal");
const openSkillsModalBtn = document.getElementById("openSkillsModal");
const closeSkillsModalBtn = document.getElementById("closeSkillsModal");

openSkillsModalBtn.addEventListener("click", function(){
  skillsModal.style.display = "block";
});

closeSkillsModalBtn.addEventListener("click", function(){
  skillsModal.style.display = "none";
});

// Close modal when clicking outside modal content
window.addEventListener("click", function(event){
  if (event.target === skillsModal) {
    skillsModal.style.display = "none";
  }
});
