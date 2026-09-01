/* =====================================================
   COURSE DATA
===================================================== */

const courses = [
    {
        code: "CSE101",
        name: "Programming Fundamentals",
        credits: 4,
        type: "Core",
        department: "CSE",
        departmentName: "Computer Science & Engineering",
        semester: "Semester 1"
    },
    {
        code: "CSE102",
        name: "Digital Logic Design",
        credits: 3,
        type: "Core",
        department: "CSE",
        departmentName: "Computer Science & Engineering",
        semester: "Semester 1"
    },
    {
        code: "MAT101",
        name: "Engineering Mathematics I",
        credits: 4,
        type: "Foundation",
        department: "CSE",
        departmentName: "Computer Science & Engineering",
        semester: "Semester 1"
    },
    {
        code: "PHY101",
        name: "Engineering Physics",
        credits: 3,
        type: "Foundation",
        department: "CSE",
        departmentName: "Computer Science & Engineering",
        semester: "Semester 1"
    },
    {
        code: "ENG101",
        name: "Communication Skills",
        credits: 2,
        type: "Foundation",
        department: "CSE",
        departmentName: "Computer Science & Engineering",
        semester: "Semester 1"
    },
    {
        code: "CSE201",
        name: "Data Structures",
        credits: 4,
        type: "Core",
        department: "CSE",
        departmentName: "Computer Science & Engineering",
        semester: "Semester 2"
    },
    {
        code: "CSE202",
        name: "Object Oriented Programming",
        credits: 4,
        type: "Core",
        department: "CSE",
        departmentName: "Computer Science & Engineering",
        semester: "Semester 2"
    },
    {
        code: "CSE301",
        name: "Database Management Systems",
        credits: 4,
        type: "Core",
        department: "CSE",
        departmentName: "Computer Science & Engineering",
        semester: "Semester 3"
    },
    {
        code: "CSE302",
        name: "Operating Systems",
        credits: 4,
        type: "Core",
        department: "CSE",
        departmentName: "Computer Science & Engineering",
        semester: "Semester 3"
    },
    {
        code: "CSE303",
        name: "Computer Networks",
        credits: 3,
        type: "Core",
        department: "CSE",
        departmentName: "Computer Science & Engineering",
        semester: "Semester 3"
    },
    {
        code: "CSE304",
        name: "Algorithms",
        credits: 4,
        type: "Core",
        department: "CSE",
        departmentName: "Computer Science & Engineering",
        semester: "Semester 3"
    },
    {
        code: "CSE305",
        name: "Statistics for Computing",
        credits: 3,
        type: "Foundation",
        department: "CSE",
        departmentName: "Computer Science & Engineering",
        semester: "Semester 3"
    },
    {
        code: "ECE101",
        name: "Basic Electronics",
        credits: 4,
        type: "Core",
        department: "ECE",
        departmentName: "Electronics & Communication Engineering",
        semester: "Semester 1"
    },
    {
        code: "ECE102",
        name: "Engineering Mathematics I",
        credits: 4,
        type: "Core",
        department: "ECE",
        departmentName: "Electronics & Communication Engineering",
        semester: "Semester 1"
    },
    {
        code: "ECE201",
        name: "Digital Electronics",
        credits: 3,
        type: "Core",
        department: "ECE",
        departmentName: "Electronics & Communication Engineering",
        semester: "Semester 2"
    },
    {
        code: "ECE202",
        name: "Signals and Systems",
        credits: 4,
        type: "Core",
        department: "ECE",
        departmentName: "Electronics & Communication Engineering",
        semester: "Semester 2"
    },
    {
        code: "EEE101",
        name: "Basic Electrical Engineering",
        credits: 4,
        type: "Core",
        department: "EEE",
        departmentName: "Electrical & Electronics Engineering",
        semester: "Semester 1"
    },
    {
        code: "EEE201",
        name: "Circuit Theory",
        credits: 4,
        type: "Core",
        department: "EEE",
        departmentName: "Electrical & Electronics Engineering",
        semester: "Semester 2"
    },
    {
        code: "ME101",
        name: "Engineering Mechanics",
        credits: 4,
        type: "Core",
        department: "MECH",
        departmentName: "Mechanical Engineering",
        semester: "Semester 1"
    },
    {
        code: "ME201",
        name: "Thermodynamics",
        credits: 4,
        type: "Core",
        department: "MECH",
        departmentName: "Mechanical Engineering",
        semester: "Semester 2"
    }
];


/* =====================================================
   DISPLAY COURSE TABLE
===================================================== */

function displayCourses(list = courses) {

    const tableBody = document.getElementById("courseTableBody");

    if (!tableBody) return;

    tableBody.innerHTML = "";

    if (list.length === 0) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align:center; padding:25px;">
                    No courses found.
                </td>
            </tr>
        `;

        return;
    }

    list.forEach(course => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>
                <span class="course-code">${course.code}</span>
            </td>

            <td>${course.name}</td>

            <td>
                <span class="credit">${course.credits}</span>
            </td>

            <td>${course.type}</td>

            <td>${course.departmentName}</td>

            <td>${course.semester}</td>
        `;

        tableBody.appendChild(row);
    });
}


/* =====================================================
   FILTER COURSES
===================================================== */

function filterCourses() {

    const department =
        document.getElementById("departmentFilter").value;

    const semester =
        document.getElementById("semesterFilter").value;

    const search =
        document.getElementById("searchCourse").value
            .toLowerCase()
            .trim();

    const filtered = courses.filter(course => {

        const departmentMatch =
            department === "all" ||
            course.department === department;

        const semesterMatch =
            semester === "all" ||
            course.semester === semester;

        const searchableText =
            (
                course.code + " " +
                course.name + " " +
                course.type + " " +
                course.departmentName
            ).toLowerCase();

        const searchMatch =
            searchableText.includes(search);

        return departmentMatch &&
            semesterMatch &&
            searchMatch;
    });

    displayCourses(filtered);
}


/* =====================================================
   UPDATE REGISTRATION COURSES
===================================================== */

function updateRegistrationCourses() {

    const department =
        document.getElementById("registrationDepartment").value;

    const semester =
        document.getElementById("registrationSemester").value;

    const selectedCourses = courses.filter(course =>
        course.department === department &&
        course.semester === semester
    );

    const container =
        document.getElementById("registrationCourses");

    if (!container) return;

    container.innerHTML = "";

    if (
        department === "" ||
        semester === ""
    ) {

        container.innerHTML = `
            <p style="color:#8492a7;font-size:11px;">
                Please select department and semester.
            </p>
        `;

        updateSummary();
        return;
    }

    if (selectedCourses.length === 0) {

        container.innerHTML = `
            <p style="color:#8492a7;font-size:11px;">
                No courses available for this department and semester.
            </p>
        `;

        updateSummary();
        return;
    }

    selectedCourses.forEach(course => {

        const label = document.createElement("label");

        label.className = "course-option";

        label.innerHTML = `

            <input
                type="checkbox"
                value="${course.code}"
                data-credit="${course.credits}"
            >

            <div>

                <strong>
                    ${course.code} — ${course.name}
                </strong>

                <small>
                    ${course.type} • ${course.semester}
                </small>

            </div>

            <span class="course-credit">
                ${course.credits} Cr
            </span>
        `;

        const checkbox =
            label.querySelector("input");

        checkbox.addEventListener(
            "change",
            updateSummary
        );

        container.appendChild(label);
    });

    updateSummary();
}


/* =====================================================
   UPDATE STUDENT SUMMARY
===================================================== */

function updateStudentSummary() {

    const name =
        document.getElementById("studentName").value.trim();

    const register =
        document.getElementById("registerNumber").value.trim();

    const departmentSelect =
        document.getElementById("registrationDepartment");

    const semester =
        document.getElementById("registrationSemester").value;


    document.getElementById("summaryStudent").textContent =
        name || "-";


    document.getElementById("summaryRegister").textContent =
        register || "-";


    if (departmentSelect.value === "") {

        document.getElementById("summaryDepartment").textContent =
            "-";

    } else {

        document.getElementById("summaryDepartment").textContent =
            departmentSelect.options[
                departmentSelect.selectedIndex
            ].text;
    }


    document.getElementById("summarySemester").textContent =
        semester || "-";
}


/* =====================================================
   UPDATE SUMMARY
===================================================== */

function updateSummary() {

    const selected =
        document.querySelectorAll(
            '#registrationCourses input[type="checkbox"]:checked'
        );

    let count = selected.length;

    let credits = 0;

    selected.forEach(box => {

        credits += Number(box.dataset.credit);
    });


    document.getElementById("selectedCount").textContent =
        `${count} Selected`;


    document.getElementById("summaryCourses").textContent =
        count;


    document.getElementById("totalCredits").textContent =
        credits;


    document.getElementById("summaryMessage").textContent =
        count === 0
            ? "No courses selected yet."
            : `${count} course(s) selected successfully.`;


    updateStudentSummary();

    updateProgress();
}


/* =====================================================
   UPDATE PROGRESS BAR
===================================================== */

function updateProgress() {

    const register =
        document.getElementById("registerNumber").value.trim();

    const name =
        document.getElementById("studentName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const department =
        document.getElementById("registrationDepartment").value;

    const semester =
        document.getElementById("registrationSemester").value;

    const selected =
        document.querySelectorAll(
            '#registrationCourses input:checked'
        ).length;


    let completed = 0;

    const totalFields = 6;


    if (register !== "") completed++;
    if (name !== "") completed++;
    if (email !== "") completed++;
    if (department !== "") completed++;
    if (semester !== "") completed++;
    if (selected > 0) completed++;


    const progress =
        Math.round(
            (completed / totalFields) * 100
        );


    const progressBar =
        document.getElementById("progress");

    const progressText =
        document.getElementById("progressText");


    if (progressBar) {
        progressBar.style.width =
            progress + "%";
    }


    if (progressText) {
        progressText.textContent =
            progress + "%";
    }
}


/* =====================================================
   EMAIL VALIDATION
===================================================== */

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}


/* =====================================================
   MOBILE VALIDATION
===================================================== */

function isValidMobile(mobile) {

    const mobilePattern =
        /^[0-9]{10}$/;

    return mobilePattern.test(mobile);
}


/* =====================================================
   SUBMIT REGISTRATION
===================================================== */

function submitRegistration() {

    const register =
        document.getElementById("registerNumber").value.trim();

    const name =
        document.getElementById("studentName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();

    const department =
        document.getElementById("registrationDepartment").value;

    const semester =
        document.getElementById("registrationSemester").value;

    const selected =
        document.querySelectorAll(
            '#registrationCourses input:checked'
        );


    /* REGISTER NUMBER */

    if (register === "") {

        alert("Please enter register number.");

        document.getElementById(
            "registerNumber"
        ).focus();

        return;
    }


    /* STUDENT NAME */

    if (name === "") {

        alert("Please enter student name.");

        document.getElementById(
            "studentName"
        ).focus();

        return;
    }


    /* EMAIL */

    if (email === "") {

        alert("Please enter your email address.");

        document.getElementById(
            "email"
        ).focus();

        return;
    }


    if (!isValidEmail(email)) {

        alert(
            "Invalid email address. Please enter a valid email address."
        );

        document.getElementById(
            "email"
        ).focus();

        return;
    }


    /* MOBILE */

    if (
        mobile !== "" &&
        !isValidMobile(mobile)
    ) {

        alert(
            "Invalid mobile number. Please enter a valid 10-digit mobile number."
        );

        document.getElementById(
            "mobile"
        ).focus();

        return;
    }


    /* DEPARTMENT */

    if (department === "") {

        alert(
            "Please select your department."
        );

        document.getElementById(
            "registrationDepartment"
        ).focus();

        return;
    }


    /* SEMESTER */

    if (semester === "") {

        alert(
            "Please select your semester."
        );

        document.getElementById(
            "registrationSemester"
        ).focus();

        return;
    }


    /* COURSE SELECTION */

    if (selected.length === 0) {

        alert(
            "Please select at least one course."
        );

        return;
    }


    let totalCredits = 0;


    selected.forEach(box => {

        totalCredits += Number(
            box.dataset.credit
        );

    });


    const registration = {

        registerNumber: register,

        studentName: name,

        email: email,

        mobile: mobile,

        department: department,

        semester: semester,

        courses:
            Array.from(selected).map(
                box => box.value
            ),

        totalCredits: totalCredits,

        submittedAt:
            new Date().toLocaleString()
    };


    /* SAVE DATA */

    try {

        localStorage.setItem(
            "simatsLatestRegistration",
            JSON.stringify(registration)
        );

    }

    catch (error) {

        console.log(
            "Browser storage unavailable."
        );

    }


    document.getElementById(
        "summaryMessage"
    ).textContent =
        `Registration submitted successfully for ${selected.length} course(s).`;


    alert(

        "Registration submitted successfully!\n\n" +

        "Student: " + name + "\n" +

        "Register Number: " + register + "\n" +

        "Courses Selected: " + selected.length + "\n" +

        "Total Credits: " + totalCredits

    );
}


/* =====================================================
   CLEAR FORM
===================================================== */

function clearForm() {

    document.getElementById(
        "registerNumber"
    ).value = "";


    document.getElementById(
        "studentName"
    ).value = "";


    document.getElementById(
        "email"
    ).value = "";


    document.getElementById(
        "mobile"
    ).value = "";


    document.getElementById(
        "registrationDepartment"
    ).selectedIndex = 0;


    document.getElementById(
        "registrationSemester"
    ).selectedIndex = 0;


    document.querySelectorAll(
        '#registrationCourses input[type="checkbox"]'
    ).forEach(box => {

        box.checked = false;

    });


    updateRegistrationCourses();

    updateStudentSummary();

    updateProgress();


    document.getElementById(
        "summaryMessage"
    ).textContent =
        "Form cleared. No courses selected yet.";
}


/* =====================================================
   NAVIGATION
===================================================== */

function goToCourses() {

    document
        .getElementById("courses")
        .scrollIntoView({

            behavior: "smooth",

            block: "start"

        });
}


function goToRegistration() {

    document
        .getElementById("registration")
        .scrollIntoView({

            behavior: "smooth",

            block: "start"

        });
}


/* =====================================================
   OFFICIAL WEBSITE
===================================================== */

function openOfficialWebsite() {

    window.open(
        "https://www.saveetha.com/",
        "_blank"
    );
}


/* =====================================================
   THEME
===================================================== */

function toggleTheme() {

    document.body.classList.toggle(
        "light-mode"
    );


    const isLight =
        document.body.classList.contains(
            "light-mode"
        );


    const button =
        document.querySelector(
            ".theme-btn"
        );


    if (button) {

        button.textContent =
            isLight
                ? "🌙"
                : "☀";
    }


    try {

        localStorage.setItem(
            "simatsTheme",
            isLight
                ? "light"
                : "dark"
        );

    }

    catch (error) {

        console.log(
            "Theme preference unavailable."
        );

    }
}


/* =====================================================
   PAGE INITIALIZATION
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* LOAD SAVED THEME */

        try {

            const savedTheme =
                localStorage.getItem(
                    "simatsTheme"
                );


            if (
                savedTheme === "light"
            ) {

                document.body.classList.add(
                    "light-mode"
                );


                const button =
                    document.querySelector(
                        ".theme-btn"
                    );


                if (button) {

                    button.textContent =
                        "🌙";
                }

            }

        }

        catch (error) {

            console.log(
                "Theme storage unavailable."
            );
        }


        /* DISPLAY COURSES */

        displayCourses();


        /* REGISTRATION COURSES */

        updateRegistrationCourses();


        /* INITIAL SUMMARY */

        updateStudentSummary();


        updateProgress();


        /* LIVE FORM UPDATE */

        const inputs = [

            "registerNumber",

            "studentName",

            "email",

            "mobile"

        ];


        inputs.forEach(id => {

            const element =
                document.getElementById(id);


            if (element) {

                element.addEventListener(

                    "input",

                    function () {

                        updateStudentSummary();

                        updateProgress();

                    }

                );

            }

        });


        /* DEPARTMENT CHANGE */

        const department =
            document.getElementById(
                "registrationDepartment"
            );


        if (department) {

            department.addEventListener(

                "change",

                function () {

                    updateRegistrationCourses();

                    updateStudentSummary();

                    updateProgress();

                }

            );

        }


        /* SEMESTER CHANGE */

        const semester =
            document.getElementById(
                "registrationSemester"
            );


        if (semester) {

            semester.addEventListener(

                "change",

                function () {

                    updateRegistrationCourses();

                    updateStudentSummary();

                    updateProgress();

                }

            );

        }

    }
);