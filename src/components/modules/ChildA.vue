<template>
  <section class="ChildA">
    ChildA-c.name-{{c.name}}
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
 name: 'ChildA',
  data() {
    return {

    }
  },
  computed:{
    ...mapState(['c'])
  },
  components: {},
  watch: {},
  mounted() {
      console.log(this.msg,'mounted() {')
  },
  methods: {}
}
</script>

<style>

</style>
