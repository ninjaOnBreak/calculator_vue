<template>
  <div id="app">
    <div class="wrapper">
      <calc-screen
        :first-number="firstNumber"
        :entered-operator="enteredOperator"
        :second-number="secondNumber"
        :result="result"
      ></calc-screen>
      <calc-buttons
        @calc-input="inputNumber"
        @calc-operator="inputOperator"
        @calc-clear="clearAll"
        @calc-equals="provideResult"
        @calc-reverse="reverseNumber"
      ></calc-buttons>
    </div>
  </div>
</template>

<script>
import CalcScreen from './components/CalcScreen.vue';
import CalcButtons from './components/CalcButtons.vue';

export default {
  name: 'App',
  components: {
    'calc-screen': CalcScreen,
    'calc-buttons': CalcButtons,
  },

  data() {
    return {
      enteredNumber: '',
      enteredOperator: '',
      firstNumber: '',
      secondNumber: '',
      result: '',
    };
  },

  methods: {
    inputNumber(num) {
      if (
        num === '.' &&
        this.firstNumber.toString().includes('.') &&
        this.enteredOperator === ''
      )
        return;
      if (num === '.' && this.secondNumber.toString().includes('.')) return;
      if (this.enteredOperator === '') {
        this.firstNumber =
          this.firstNumber.toString() +
          this.enteredNumber.toString() +
          num.toString();
      } else {
        this.secondNumber =
          this.secondNumber.toString() +
          this.enteredNumber.toString() +
          num.toString();
      }
      this.result = '';
    },

    inputOperator(operator) {
      if (this.firstNumber === '') return;
      if (this.enteredOperator !== '' && this.secondNumber !== '') {
        this.computeResult();
        this.firstNumber = this.result;
        this.result = '';
      }
      this.enteredOperator = operator.toString();
    },

    clearAll() {
      this.firstNumber = '';
      this.secondNumber = '';
      this.enteredOperator = '';
      this.result = '';
    },

    provideResult() {
      if (this.secondNumber === '') return;
      this.computeResult();
    },

    reverseNumber() {
      this.result = 'Available in Premium!';
    },

    computeResult() {
      this.result = new Function(
        'return ' + this.firstNumber + this.enteredOperator + this.secondNumber
      )();
      this.firstNumber = '';
      this.secondNumber = '';
      this.enteredOperator = '';
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

:root {
  --font: Roboto, sans-serif;
  --mainColor: #374961;
  --borderColor: #929292;
  --linkActiveColor: #41b783;
}

#app {
  font-family: var(--font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--textColor);

  .wrapper {
    display: flex;
    flex-direction: column;
    width: 450px;
    margin: 50px auto;

    .screen {
      position: relative;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      width: 90%;
      min-height: 80px;
      margin: 20px;
      padding: 10px 20px;
      font-size: 40px;
      border: 2px solid var(--borderColor);
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

      .small-screen {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 20px;
      }
    }
    .buttons-wrap {
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      margin: 20px;
      padding: 20px;
      font-size: 35px;
      border: 2px solid var(--borderColor);
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

      button {
        width: 20%;
        margin: 15px 10px;
        font-family: inherit;
        font-size: inherit;
        border: none;
        border-radius: 5px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.26);
      }

      button:nth-child(1) {
        width: 40%;
        flex-grow: 1;
      }

      button:hover {
        background-color: #aaa;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        cursor: pointer;
      }
    }
  }
}
</style>
