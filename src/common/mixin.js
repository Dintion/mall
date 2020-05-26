import {POP, NEW, SELL} from "./const";
import {debounce} from "./utils/debounce";
import BackTop from "../components/content/backTop/BackTop";
export const backTopMixin = {
  components:{
    BackTop

  },
  data: function () {
    return {
      backTopShow: false,
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}

export const itemLoadListener = {
  data() {
    return {
      newrefresh: null
    }
  },
  mounted() {
    let r = () => {
      debounce(this.$refs.scroll.refresh, 50)()
    }
    this.newrefresh = () => {
      r()
    }
    this.$bus.$on('imageLoaded', this.newrefresh);
  }
}
