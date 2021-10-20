<template>
  <div class="screen">
    <div class="small-screen">
      {{ smallScreenNumber }}
    </div>
    {{ bigScreenNumber }}
  </div>
</template>

<script>
export default {
  props: [
    'enteredNumber',
    'firstNumber',
    'enteredOperator',
    'secondNumber',
    'result',
  ],

  computed: {
    smallScreenNumber() {
      if (this.enteredOperator === '') return;
      return this.firstNumber + this.enteredOperator;
    },

    bigScreenNumber() {
      if (this.result === Infinity) return 'NOPE';
      if (this.result !== '') return this.result;
      if (this.enteredOperator !== '') return this.secondNumber;
      return this.firstNumber;
    },
  },
};
</script>
