document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("toggleTheme");
    const fontSelector = document.getElementById("fontSelector");
    const searchBar = document.getElementById("searchBar");
    const searchButton = document.getElementById("searchButton");
    const resultContainer = document.getElementById("resultContainer");
    const fontOptions = document.getElementById("fontOptions");
    const selectedFont = fontSelector.querySelector(".selected");
    
    themeToggle.addEventListener("click", () => {
      document.body.classList.add("dark");
    });

fontSelector.addEventListener("change", (e) => {
    document.body.style.fontFamily = e.target.value;
  });
  fontSelector.addEventListener("click", () => {
    fontSelector.classList.toggle("open");
  });
  

  fontOptions.addEventListener("click", (event) => {
    if (event.target.classList.contains("option")) {
      const selectedValue = event.target.dataset.font;
      selectedFont.textContent = event.target.textContent;
      document.body.style.fontFamily = selectedValue;
      fontSelector.classList.remove("open");
    }
  });
  
  const toggleTheme = document.getElementById("toggleTheme");
  
  toggleTheme.addEventListener("change", (e) => {
    if (e.target.checked) {
      document.body.classList.add("dark");
      fontSelector.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      fontSelector.classList.remove("dark");
    }
  });
searchButton.addEventListener("click", () => {
    const word = searchBar.value.trim();
    if (!word) {
      resultContainer.innerHTML = "<p>Please enter a word!</p>";
      return;
    }
  
    fetchDefinition(word)
      .then((data) => {
        renderWordDetails(data[0]);
      })
      .catch((err) => {
        resultContainer.innerHTML = `<p>${err.message}</p>`;
      });
  });
  
  function renderWordDetails(data) {
    const { word, phonetics, meanings } = data;
    const phonetic = phonetics[0]?.text || "No phonetic available";
    const nounMeanings = meanings.filter((m) => m.partOfSpeech === "noun");
    const verbMeanings = meanings.filter((m) => m.partOfSpeech === "verb");
  
    let html = `
      <h2 class="word-title">${word}</h2>
      <p class="phonetic">${phonetic}</p>
    `;
  
    if (nounMeanings.length) {
      html += `
        <h3 class="part-of-speech">Noun</h3>
        <h4 class="sub-heading">Meaning</h4>
        <ul class="meanings">
          ${nounMeanings[0].definitions.slice(0, 3).map((def) => `<li>${def.definition}</li>`).join("")}
        </ul>
        ${nounMeanings[0].synonyms?.length
          ? ` <div class="synonyms-container">
    <h4 class="sub-heading">Synonyms</h4>
    <p class="synonyms">${nounMeanings[0].synonyms.join(", ")}</p>
  </div>`
          : ""}
      `;
    }
  
    if (verbMeanings.length) {
      html += `
        <h3 class="part-of-speech">Verb</h3>
        <h4 class="sub-heading">Meaning</h4>
        <ul class="meanings">
          ${verbMeanings[0].definitions.slice(0, 3).map((def) => `<li>${def.definition}</li>`).join("")}
        </ul>
        ${verbMeanings[0].synonyms?.length
          ? `
          <div class="synonyms-container">
    <h4 class="sub-heading">Synonyms</h4>
    <p class="synonyms">${verbMeanings[0].synonyms.join(", ")}</p>
  </div>
          `
          : ""}
      `;
    }
  
    resultContainer.innerHTML = html;
  }
  
  function fetchDefinition(word) {
    const apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    return fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Word not found");
        }
        return response.json();
      });
  }
  
  });
  