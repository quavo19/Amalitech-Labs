class PasswordGenerator {
    constructor() {
      this.lowercase = "abcdefghijklmnopqrstuvwxyz";
      this.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      this.numbers = "0123456789";
      this.symbols = "!@#$%^&*()_+[]{}|;:',.<>?";
    }
  
    generateRandomChar(set) {
      return set[Math.floor(Math.random() * set.length)];
    }
  
    generatePassword(options, length) {
      const { includeLowercase, includeUppercase, includeNumbers, includeSymbols } = options;
      const availableChars = [
        ...(includeLowercase ? this.lowercase : ''),
        ...(includeUppercase ? this.uppercase : ''),
        ...(includeNumbers ? this.numbers : ''),
        ...(includeSymbols ? this.symbols : ''),
      ];
  
      if (!availableChars.length) return "";
      return Array.from({ length }, () => this.generateRandomChar(availableChars)).join('');
    }
  
    calculateStrength(password) {
      const length = password.length;
      const hasLowercase = /[a-z]/.test(password);
      const hasUppercase = /[A-Z]/.test(password);
      const hasNumbers = /\d/.test(password);
      const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  
      const score = [hasLowercase, hasUppercase, hasNumbers, hasSymbols].filter(Boolean).length;
  
      if (length < 8) return "Too Weak";
      if (length >= 8 && score === 1) return "Weak";
      if (length >= 8 && score === 2) return "Medium";
      if (length >= 12 && score >= 3) return "Strong";
      return "Medium";
    }
  }
  const slider = document.getElementById("password-length");

slider.addEventListener("input", () => {
  const value = slider.value;
  const min = slider.min;
  const max = slider.max;

  const percent = ((value - min) / (max - min)) * 100;
  slider.style.setProperty("--value-percent", `${percent}%`);
});

  const passwordGen = new PasswordGenerator();
  
  document.getElementById('password-length').addEventListener('input', (e) => {
    document.getElementById('length-value').textContent = e.target.value;
  });
  
  document.getElementById('generate-password').addEventListener('click', () => {
    const length = parseInt(document.getElementById('password-length').value);
    const options = {
      includeLowercase: document.getElementById('include-lowercase').checked,
      includeUppercase: document.getElementById('include-uppercase').checked,
      includeNumbers: document.getElementById('include-numbers').checked,
      includeSymbols: document.getElementById('include-symbols').checked,
    };
  
    const password = passwordGen.generatePassword(options, length);
    document.getElementById('password-display').textContent = password;
  
    const strength = passwordGen.calculateStrength(password);
    document.getElementById('strength-indicator').textContent = `${strength}`;
  });
  
  document.getElementById('copy-password').addEventListener('click', () => {
    const password = document.getElementById('password-display').textContent;
    navigator.clipboard.writeText(password).then(() => {
      alert('Password copied to clipboard!');
    });
  });
  function updateStrengthBars(strength) {
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar) => bar.className = 'bar');
      if (strength === "Too Weak") {
      bars[0].classList.add('too-weak');
    } else if (strength === "Weak") {
      bars[0].classList.add('weak');
      bars[1].classList.add('weak');
    } else if (strength === "Medium") {
      bars[0].classList.add('medium');
      bars[1].classList.add('medium');
      bars[2].classList.add('medium');
    } else if (strength === "Strong") {
      bars.forEach((bar) => bar.classList.add('strong'));
    }
  }
  
  document.getElementById('generate-password').addEventListener('click', () => {
    const length = parseInt(document.getElementById('password-length').value);
    const options = {
      includeLowercase: document.getElementById('include-lowercase').checked,
      includeUppercase: document.getElementById('include-uppercase').checked,
      includeNumbers: document.getElementById('include-numbers').checked,
      includeSymbols: document.getElementById('include-symbols').checked,
    };
  
    const password = passwordGen.generatePassword(options, length);
    document.getElementById('password-display').textContent = password;
  
    const strength = passwordGen.calculateStrength(password);
    document.getElementById('strength-indicator').textContent = `${strength}`;
  
    updateStrengthBars(strength);
  });
    