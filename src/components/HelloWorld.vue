<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ChildA></ChildA>
        {{ $store.state.c.name }}
   命名空间:{{ name }}
   <hr/>
    {{ $store.getters.getName }}--{{ getName }}
    <button v-on:click="add(666)">增加</button>
    {{id}}
    <button @click="addSync">增加Async</button>
        <button @click="AsyncAdd('AAAAAAAAAAA')">增加Async 二</button>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import ChildA from "./modules/ChildA.vue";
export default {
  name: "HelloWorld",
  data() {
    return {
      id:undefined,
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: { ChildA },
  computed: {
    ...mapState('c',["name"]),
    ...mapGetters(["getName"])
  },
  created() {
    this.id = nanoid();
  },
  mounted() {
    console.log(this);
  },
  methods: {
    ...mapMutations(["add"]),
    ...mapActions(["AsyncAdd"]),
    add1() {
      this.$store.commit("add", 555);
    },
    addSync() {
      this.$store.dispatch("AsyncAdd", "wanglin");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
