 const form = document.getElementById("profileForm");
    const card = document.getElementById("profileCard");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const skills = document.getElementById("skills").value;
      const photo = document.getElementById("photo").files[0];
      const resume = document.getElementById("resume").files[0];

      document.getElementById("showName").textContent = name;
      document.getElementById("showEmail").textContent = email;
      document.getElementById("showSkills").textContent = skills;

      const photoURL = URL.createObjectURL(photo);
      document.getElementById("profilePic").src = photoURL;

      const resumeURL = URL.createObjectURL(resume);
      document.getElementById("resumeLink").href = resumeURL;

      card.classList.remove("hidden");
    });