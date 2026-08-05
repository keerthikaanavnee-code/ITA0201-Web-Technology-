const form = document.getElementById('registrationForm');
const successMsg = document.getElementById('successMessage');

const inputs = {
    fullName: {
        el: document.getElementById('fullName'),
        error: document.getElementById('nameError'),
        validate: (val) => val.trim().length >= 3
    },
    email: {
        el: document.getElementById('email'),
        error: document.getElementById('emailError'),
        validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
    },
    studentId: {
        el: document.getElementById('studentId'),
        error: document.getElementById('idError'),
        validate: (val) => /^STU-\d{5}$/.test(val)
    },
    phone: {
        el: document.getElementById('phone'),
        error: document.getElementById('phoneError'),
        validate: (val) => /^\d{10}$/.test(val)
    },
    department: {
        el: document.getElementById('department'),
        error: document.getElementById('deptError'),
        validate: (val) => val !== ""
    },
    password: {
        el: document.getElementById('password'),
        error: document.getElementById('passwordError'),
        validate: (val) => /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(val)
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    for (const key in inputs) {
        const field = inputs[key];
        if (!field.validate(field.el.value)) {
            showError(field.el, field.error);
            isValid = false;
        } else {
            hideError(field.el, field.error);
        }
    }

    const terms = document.getElementById('terms');
    if (!terms.checked) {
        isValid = false;
        terms.parentElement.style.color = 'var(--error)';
    } else {
        terms.parentElement.style.color = 'inherit';
    }

    if (isValid) {
        form.style.display = 'none';
        successMsg.style.display = 'block';
    }
});

function showError(input, errorEl) {
    input.classList.add('invalid');
    errorEl.style.display = 'block';
}

function hideError(input, errorEl) {
    input.classList.remove('invalid');
    errorEl.style.display = 'none';
}

function resetForm() {
    form.reset();
    form.style.display = 'block';
    successMsg.style.display = 'none';
    for (const key in inputs) {
        hideError(inputs[key].el, inputs[key].error);
    }
}

// Real-time validation
Object.values(inputs).forEach(field => {
    field.el.addEventListener('input', () => {
        if (field.validate(field.el.value)) {
            hideError(field.el, field.error);
        }
    });
});
