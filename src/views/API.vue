<template>
  <div class="user-list">
    <h1>Lista Użytkowników</h1>
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Szukaj użytkownika..."
      @input="searchUsers"
    />
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nazwa</th>
          <th>Email</th>
          <th>Płeć</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in filteredUsers" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.status }}</td>
          <td>
            <button @click="editUser(user)">Edytuj</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="selectedUser">
      <h2>Edytujesz użytkownika {{ selectedUser.name }}</h2>
      <input v-model="selectedUser.name" placeholder="Nazwa" />
      <input v-model="selectedUser.email" placeholder="Email" />
      <input v-model="selectedUser.gender" placeholder="Gender" />
      <input v-model="selectedUser.status" placeholder="Status" />
      <button @click="updateUser">Zapisz zmiany</button>
      <button @click="cancelEdit">Anuluj</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
      searchQuery: "",
      selectedUser: null,
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) =>
        user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get(
          "https://gorest.co.in/public/v2/users"
        );
        this.users = response.data;
      } catch (error) {
        console.error("Błąd podczas pobierania użytkowników:", error);
      }
    },
    editUser(user) {
      this.selectedUser = { ...user };
    },
    async updateUser() {
      try {
        const response = await axios.put(
          `https://gorest.co.in/public/v2/users/${this.selectedUser.id}`,
          {
            ...this.selectedUser,
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.VUE_APP_GOREST_TOKEN}`,
            },
          }
        );
        const index = this.users.findIndex(
          (user) => user.id === response.data.id
        );
        if (index !== -1) {
          this.users[index] = response.data;
        }
        this.selectedUser = null;
      } catch (error) {
        console.error("Błąd podczas aktualizacji użytkownika:", error);
      }
    },
    cancelEdit() {
      this.selectedUser = null;
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
.user-list {
  text-align: center;
  margin: 60px;
}
input {
  margin: 10px;
}
table {
  margin-left: auto;
  margin-right: auto;
}
</style>
