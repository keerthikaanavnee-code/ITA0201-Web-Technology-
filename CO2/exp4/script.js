const students = [];

const form = document.getElementById('resultForm');
const resultsBody = document.getElementById('resultsBody');
const highestEl = document.getElementById('highestScore');
const lowestEl = document.getElementById('lowestScore');
const averageEl = document.getElementById('classAverage');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('studentName').value;
    const m = parseInt(document.getElementById('maths').value);
    const p = parseInt(document.getElementById('physics').value);
    const c = parseInt(document.getElementById('chemistry').value);

    const total = m + p + c;
    const percentage = (total / 300) * 100;
    const grade = calculateGrade(percentage);

    const student = { name, m, p, c, total, percentage, grade };
    students.push(student);

    updateTable();
    updateStats();
    form.reset();
});

function calculateGrade(p) {
    if (p >= 90) return 'A+';
    if (p >= 80) return 'A';
    if (p >= 70) return 'B';
    if (p >= 60) return 'C';
    if (p >= 50) return 'D';
    return 'F';
}

function updateTable() {
    resultsBody.innerHTML = '';
    students.forEach(s => {
        const row = `
            <tr>
                <td>${s.name}</td>
                <td>${s.m}</td>
                <td>${s.p}</td>
                <td>${s.c}</td>
                <td>${s.total}</td>
                <td>${s.percentage.toFixed(1)}%</td>
                <td class="grade-${s.grade[0].toLowerCase()}">${s.grade}</td>
            </tr>
        `;
        resultsBody.innerHTML += row;
    });
}

function updateStats() {
    if (students.length === 0) return;

    const totals = students.map(s => s.total);
    const highest = Math.max(...totals);
    const lowest = Math.min(...totals);
    const average = totals.reduce((a, b) => a + b, 0) / students.length;

    highestEl.innerText = highest;
    lowestEl.innerText = lowest;
    averageEl.innerText = ((average / 300) * 100).toFixed(1) + '%';
}
