<template>
  <div class="buttons-wrap">
    <button @click="emitClear">clear</button>
    <button @click="emitOperator('**')">n</button>
    <button @click="emitOperator('/')">/</button>
    <button @click="emitCharacter(7)">7</button>
    <button @click="emitCharacter(8)">8</button>
    <button @click="emitCharacter(9)">9</button>
    <button @click="emitOperator('*')">*</button>
    <button @click="emitCharacter(4)">4</button>
    <button @click="emitCharacter(5)">5</button>
    <button @click="emitCharacter(6)">6</button>
    <button @click="emitOperator('-')">-</button>
    <button @click="emitCharacter(1)">1</button>
    <button @click="emitCharacter(2)">2</button>
    <button @click="emitCharacter(3)">3</button>
    <button @click="emitOperator('+')">+</button>
    <button @click="emitReverse">+/-</button>
    <button @click="emitCharacter(0)">0</button>
    <button @click="emitCharacter('.')">.</button>
    <button @click="emitEquals">=</button>
  </div>
</template>

<script>
export default {
  emits: [
    'calc-input',
    'calc-operator',
    'calc-clear',
    'calc-equals',
    'calc-reverse',
  ],
  data() {
    return {
      nextNumber: '',
      nextOperator: '',
      btnClear: '',
      btnEquals: '',
      btnReverse: '',
    };
  },

  methods: {
    emitCharacter(num) {
      this.nextNumber = num;
      this.$emit('calc-input', this.nextNumber);
    },

    emitOperator(operator) {
      this.nextOperator = operator;
      this.$emit('calc-operator', this.nextOperator);
    },

    emitClear() {
      this.$emit('calc-clear', this.btnClear);
    },

    emitEquals() {
      this.$emit('calc-equals', this.btnEquals);
    },

    emitReverse() {
      this.$emit('calc-reverse', this.btnReverse);
    },
  },
};
</script>
