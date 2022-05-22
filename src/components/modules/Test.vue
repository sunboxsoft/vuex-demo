<template>
  <section class="Test">
    Test --{{$store.state.c.name}}---{{name}}
    <hr/>
{{$store.getters["c/getName"]}}---{{getName}}
    <button @click="change">改变</button>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
 name: 'Test',
  data() {
    return {

    }
  },
  computed:{
      ...mapState('c',['name']),
      ...mapGetters('c',['getName'])
  },
  components: {},
  watch: {
      "$store.state.c.name"(n,o){
          console.log(n,o)
      }
  },
  mounted() {
      console.log(this)
  },
  methods: {
    //   ...mapActions('c',['AsyncAdd']),
    ...mapActions('c',{increase:'AsyncAdd'}),
      change(){
         //this.AsyncAdd('AAA')
         //this.increase('BBB')
         this.$store.dispatch('c/AsyncAdd','CCCCC')
      }
  }
}
</script>

<style>

</style>
