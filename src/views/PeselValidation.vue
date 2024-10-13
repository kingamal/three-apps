<template>
  <div class="pesel-validation">
    <h1>Walidacja numeru PESEL</h1>
    <form @submit.prevent="validatePesel">
      <label for="pesel">Wprowadź numer PESEL: </label>
      <input type="text" v-model="pesel" maxlength="11" placeholder="PESEL" />
      <button type="submit">Sprawdź</button>
    </form>

    <div v-if="validationMessage">
      <h2>Wynik:</h2>
      <p>{{ validationMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pesel: "",
      validationMessage: "",
    };
  },
  methods: {
    validatePesel() {
      const isValid = this.isPeselValid(this.pesel);
      this.validationMessage = isValid
        ? `Numer PESEL ${this.pesel} jest poprawny.`
        : `Numer PESEL ${this.pesel} jest nieprawidłowy.`;
    },
    isPeselValid(pesel) {
      if (!/^\d{11}$/.test(pesel)) return false;

      const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
      let sum = 0;
      for (let i = 0; i < 10; i++) {
        sum += parseInt(pesel[i]) * weights[i];
      }
      const controlDigit = (10 - (sum % 10)) % 10;

      if (controlDigit !== parseInt(pesel[10])) return false;

      const birthDate = this.getBirthDateFromPesel(pesel);
      return this.isValidDate(birthDate);
    },
    getBirthDateFromPesel(pesel) {
      let year = parseInt(pesel.slice(0, 2), 10);
      let month = parseInt(pesel.slice(2, 4), 10);
      let day = parseInt(pesel.slice(4, 6), 10);

      let fullYear;
      if (month > 20) {
        fullYear = 2000 + year;
        month -= 20;
      } else {
        fullYear = 1900 + year;
      }

      return new Date(fullYear, month - 1, day);
    },
    isValidDate(date) {
      const now = new Date();
      return date instanceof Date && !isNaN(date) && date <= now;
    },
  },
};
</script>

<style scoped>
.pesel-validation {
  text-align: center;
  margin: 60px;
}
</style>
