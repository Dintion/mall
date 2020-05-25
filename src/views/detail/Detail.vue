<template>
  <div>
    <detail-nav-bar>

    </detail-nav-bar>
  </div>
</template>

<script>
  import DetailNavBar from "./childCops/DetailNavBar";
  import {getDetail} from 'network/detail'

  export default {
    name: "detail",
    components: {DetailNavBar},
    data() {
      return {
        iid: '',
        goodDetail: null
      }
    },
    methods: {
      getDetail() {
        getDetail(this.iid).then(data => {
          console.log(data)
        });
      }

    },
    created() {
      this.iid = this.$route.params.iid
      this.getDetail()

    }

  }
</script>

<style scoped>

</style>
