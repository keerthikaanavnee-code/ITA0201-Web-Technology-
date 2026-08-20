const displayBtn = document.getElementById("displayBtn");
const profileContainer = document.getElementById("profileContainer");

displayBtn.addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();
    const regno = document.getElementById("regno").value.trim();
    const department = document.getElementById("department").value.trim();
    const year = document.getElementById("year").value;

    if (name === "" || regno === "" || department === "" || year === "") {
        alert("Please fill all the fields.");
        return;
    }

    profileContainer.innerHTML = "";

    const profile = document.createElement("div");
    profile.classList.add("profile");

    const profileHeader = document.createElement("div");
    profileHeader.classList.add("profile-header");

    const avatar = document.createElement("div");
    avatar.classList.add("avatar");
    avatar.textContent = name.charAt(0).toUpperCase();

    const heading = document.createElement("h3");
    heading.textContent = name;

    const subtitle = document.createElement("p");
    subtitle.textContent = "Student Profile";

    profileHeader.appendChild(avatar);
    profileHeader.appendChild(heading);
    profileHeader.appendChild(subtitle);

    const details = document.createElement("div");
    details.classList.add("details");

    const createDetail = function(label, value) {
        const row = document.createElement("div");
        row.classList.add("detail");

        const labelElement = document.createElement("span");
        labelElement.textContent = label;

        const valueElement = document.createElement("span");
        valueElement.textContent = value;

        row.appendChild(labelElement);
        row.appendChild(valueElement);

        return row;
    };

    details.appendChild(createDetail("Register Number", regno));
    details.appendChild(createDetail("Department", department));
    details.appendChild(createDetail("Year of Study", year));

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.textContent = "Remove Profile";

    removeBtn.addEventListener("click", function () {
        profile.remove();

        profileContainer.innerHTML = `
            <div class="empty" id="emptyState">
                <div>
                    <div class="empty-icon">👤</div>
                    <h3>No profile yet</h3>
                    <p>Fill in the form and click<br>“Generate Profile Preview”.</p>
                </div>
            </div>
        `;
    });

    profile.appendChild(profileHeader);
    profile.appendChild(details);
    profile.appendChild(removeBtn);

    profileContainer.appendChild(profile);
});
