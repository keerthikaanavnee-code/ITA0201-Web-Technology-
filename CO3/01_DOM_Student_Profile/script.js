const profile=document.getElementById("profile");const heading=document.getElementById("heading");const nameEl=document.getElementById("studentName");const status=document.getElementById("status");
function notify(t){status.textContent=t}
function changeHeading(){heading.textContent=document.getElementById("headingInput").value||"Student Profile";notify("Heading changed using textContent.")}
function changeName(){const n=document.getElementById("nameInput").value||"Student";nameEl.textContent=n;document.getElementById("avatar").textContent=n.charAt(0).toUpperCase();profile.setAttribute("data-student",n);notify("Student name and data attribute updated.")}
function changeTextColor(){profile.style.color=document.getElementById("textColor").value;notify("Text colour changed using style.")}
function changeBackground(){profile.style.backgroundColor=document.getElementById("bgColor").value;notify("Background colour changed using style.")}
function toggleHighlight(){profile.classList.toggle("highlight");notify("classList.toggle() executed.")}
function toggleProfile(){profile.classList.toggle("hidden");notify("Profile visibility changed.")}
function resetProfile(){heading.textContent="Student Profile";nameEl.textContent="Keerthikaa";document.getElementById("avatar").textContent="K";profile.style.color="";profile.style.backgroundColor="";profile.classList.remove("highlight","hidden");document.getElementById("headingInput").value="My Student Profile";document.getElementById("nameInput").value="Keerthikaa";notify("Profile reset successfully.")}
