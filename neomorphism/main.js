new Vue ({
  el: '#app',
  data() {
    return {
      current: "",
      previous: null,
      operator: null,
      operatorClicked: false
    };
  },
  computed: {
    display() {
      let current = this.current;
      let max = 12;
      if (this.current.indexOf(".") !== -1) max = 13;
      current = current.slice(0, max).replace('.', '<span class="dot">,</span>');
      return current || 0;
    }
  },
  mounted() {
    document.querySelectorAll('.btn').forEach(el => {
      const down = e => el.classList.add('btn_down');
      const up = e => el.classList.remove('btn_down');
      el.addEventListener('mousedown', down, false);
      el.addEventListener('touchstart', down, false);
      el.addEventListener('mouseup', up, false);
      el.addEventListener('touchend', up, false);
    });
  },
  methods: {
    clear() {
      this.current = "";
    },
    sign() {
      this.current =
        this.current.charAt(0) === "-"
          ? this.current.slice(1)
          : `-${this.current}`;
    },
    percent() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    append(number) {
      if (this.operatorClicked) {
        this.current = "";
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    dot() {
      if (this.current.indexOf(".") === -1) {
        this.append(".");
      }
    },
    setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    divide() {
      this.equal();
      this.operator = (a, b) => b / a;
      this.setPrevious();
    },
    times() {
      this.equal();
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    minus() {
      this.equal();
      this.operator = (a, b) => b - a;
      this.setPrevious();
    },
    add() {
      this.equal();
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    equal() {
      if (this.previous && this.current && this.operator) {
        this.current = `${this.operator(
          parseFloat(this.current),
          parseFloat(this.previous)
        )}`;
        this.previous = null;
      }
    }
  }
});