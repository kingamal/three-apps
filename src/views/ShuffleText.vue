<template>
  <div class="shuffle-text">
    <h1>Shuffle Text</h1>
    <form @submit.prevent="handleFileUpload">
      <input type="file" @change="onFileChange" accept=".txt" />
      <button type="submit">Zobacz co wyjdzie</button>
    </form>
    <div v-if="shuffledText">
      <h2>Wynik:</h2>
      <pre>{{ shuffledText }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShuffleText",
  data() {
    return {
      file: null,
      shuffledText: null,
    };
  },
  methods: {
    onFileChange(event) {
      this.shuffledText = null;
      this.file = event.target.files[0];
    },
    handleFileUpload() {
      if (!this.file) return;

      this.shuffledText = null;

      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        this.shuffledText = this.shuffleTextInFile(text);
      };
      reader.readAsText(this.file);
    },
    shuffleTextInFile(text) {
      const lines = text.split("\n");
      return lines.map((line) => this.shuffleWordsInLine(line)).join("\n");
    },
    shuffleWordsInLine(line) {
      return line
        .split(" ")
        .map((word) => this.shuffleWord(word))
        .join(" ");
    },
    shuffleWord(word) {
      if (word.length <= 2) return word;

      const firstLetter = word[0];
      const lastLetter = word[word.length - 1];
      const middle = word.slice(1, -1).split("");

      for (let i = middle.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [middle[i], middle[j]] = [middle[j], middle[i]];
      }

      return firstLetter + middle.join("") + lastLetter;
    },
  },
};
</script>

<style scoped>
.shuffle-text {
  text-align: center;
  margin: 60px;
}
</style>
