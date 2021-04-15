<template>
  <div id="app">
    <div>
      <h1>Hellowasdorld</h1>
      <form @submit.prevent="todo">
        <input id="inp" v-model="msg2" />
        <v-btn elevation="2" type="submit">click me</v-btn>
      </form>

      <v-btn elevation="2" @click="showmsg()">
        <span v-if="toggleshowmsg">Hide MSG</span>
        <span v-else>Show MSG</span>
      </v-btn>
      <div v-if="toggleshowmsg" id="tctn">
        <h1>{{ msg }}</h1>
        <v-simple-table id="tablectn">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in Rnum" v-bind:key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.rn }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </div>
  </div>
</template>

<script>
import DB from "./dbconfig.js";

export default {
  name: "App",
  data() {
    return {
      msg: "",
      msg2: "",
      toggleshowmsg: true,
      Rnum: [      ],
    };
  },
  methods: {
    todo() {
      this.msg = this.msg2;
    },
    showmsg() {
      this.toggleshowmsg = !this.toggleshowmsg;
      let query = DB.serialize(() => {
        DB.each(`SELECT * FROM Rnum`, (err, row) => {
          if (err) {
            console.error(err.message);
          }
          this.desserts.push({id:row.num_id,rn:row.num_random});
        });
      });
    },
  },
};
</script>

<style>
#tctn {
  width: 500px;
  margin: auto;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#inp {
  text-align: center;
  width: 200px;
  height: inherit;
  background-color: aqua;
  text-align: center;
  border: 3px solid;
  border-radius: 5px;
}
</style>
