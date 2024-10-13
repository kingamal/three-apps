<template>
  <div id="app">
    <AppHeader />
    <div id="content">
      <RouterView />
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
body {
  font-family: sans-serif;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

#content {
  flex-grow: 1;
  padding: 20px;
}
</style>
