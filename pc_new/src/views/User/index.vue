<template>
  <div class="mains">
    <Header />
    <Content />
    <TeamWork />
    <Footer />
  </div>
</template>
<script>
import Header from './header.vue'
import Content from './content.vue'
import TeamWork from './teamWork.vue'
import Footer from './footer.vue'
export default {
  components: {
    Header,
    Content,
    TeamWork,
    Footer
  },
  data() {
    return {
      token: localStorage.getItem("token"),
      user: JSON.parse(localStorage.getItem("user")),
      centerDialogVisible: false,
      info:{}
    };
  },
  mounted() {
     this.$axios({
        url: "Plblics/customIndex",
        method: "get",
      }).then((res) => {
        if (res.data.status == 0) {
          this.info = res.data.result;
        } else {
          this.$message.error(res.data.msg);
        }
      });
  },
  methods: {
    handleClose(done) {
      done();
    },
  },
};
</script>

<style lang='less' scoped>
.mains {
  width: 100%;
}
</style>