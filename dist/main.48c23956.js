(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{BkHL:function(t,e,r){},Vtdi:function(t,e,r){"use strict";r.r(e);var n=r("Kw5r"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"wrapper"},[r("calc-screen",{attrs:{"first-number":t.firstNumber,"entered-operator":t.enteredOperator,"second-number":t.secondNumber,result:t.result}}),t._v(" "),r("calc-buttons",{on:{"calc-input":t.inputNumber,"calc-operator":t.inputOperator,"calc-clear":t.clearAll,"calc-equals":t.provideResult,"calc-reverse":t.reverseNumber}})],1)])};i._withStripped=!0;r("yq1k"),r("JTJg"),r("07d7"),r("JfAA");var u=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"screen"},[e("div",{staticClass:"small-screen"},[this._v("\n    "+this._s(this.smallScreenNumber)+"\n  ")]),this._v("\n  "+this._s(this.bigScreenNumber)+"\n")])};u._withStripped=!0;var c={props:["enteredNumber","firstNumber","enteredOperator","secondNumber","result"],computed:{smallScreenNumber:function(){if(""!==this.enteredOperator)return this.firstNumber+this.enteredOperator},bigScreenNumber:function(){return this.result===1/0?"NOPE":""!==this.result?this.result:""!==this.enteredOperator?this.secondNumber:this.firstNumber}}},s=r("KHd+"),o=Object(s.a)(c,u,[],!1,null,null,null);o.options.__file="src/components/CalcScreen.vue";var a=o.exports,l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"buttons-wrap"},[r("button",{on:{click:t.emitClear}},[t._v("clear")]),t._v(" "),r("button",{on:{click:function(e){return t.emitOperator("**")}}},[t._v("n")]),t._v(" "),r("button",{on:{click:function(e){return t.emitOperator("/")}}},[t._v("/")]),t._v(" "),r("button",{on:{click:function(e){return t.emitCharacter(7)}}},[t._v("7")]),t._v(" "),r("button",{on:{click:function(e){return t.emitCharacter(8)}}},[t._v("8")]),t._v(" "),r("button",{on:{click:function(e){return t.emitCharacter(9)}}},[t._v("9")]),t._v(" "),r("button",{on:{click:function(e){return t.emitOperator("*")}}},[t._v("*")]),t._v(" "),r("button",{on:{click:function(e){return t.emitCharacter(4)}}},[t._v("4")]),t._v(" "),r("button",{on:{click:function(e){return t.emitCharacter(5)}}},[t._v("5")]),t._v(" "),r("button",{on:{click:function(e){return t.emitCharacter(6)}}},[t._v("6")]),t._v(" "),r("button",{on:{click:function(e){return t.emitOperator("-")}}},[t._v("-")]),t._v(" "),r("button",{on:{click:function(e){return t.emitCharacter(1)}}},[t._v("1")]),t._v(" "),r("button",{on:{click:function(e){return t.emitCharacter(2)}}},[t._v("2")]),t._v(" "),r("button",{on:{click:function(e){return t.emitCharacter(3)}}},[t._v("3")]),t._v(" "),r("button",{on:{click:function(e){return t.emitOperator("+")}}},[t._v("+")]),t._v(" "),r("button",{on:{click:t.emitReverse}},[t._v("+/-")]),t._v(" "),r("button",{on:{click:function(e){return t.emitCharacter(0)}}},[t._v("0")]),t._v(" "),r("button",{on:{click:function(e){return t.emitCharacter(".")}}},[t._v(".")]),t._v(" "),r("button",{on:{click:t.emitEquals}},[t._v("=")])])};l._withStripped=!0;var m={emits:["calc-input","calc-operator","calc-clear","calc-equals","calc-reverse"],data:function(){return{nextNumber:"",nextOperator:"",btnClear:"",btnEquals:"",btnReverse:""}},methods:{emitCharacter:function(t){this.nextNumber=t,this.$emit("calc-input",this.nextNumber)},emitOperator:function(t){this.nextOperator=t,this.$emit("calc-operator",this.nextOperator)},emitClear:function(){this.$emit("calc-clear",this.btnClear)},emitEquals:function(){this.$emit("calc-equals",this.btnEquals)},emitReverse:function(){this.$emit("calc-reverse",this.btnReverse)}}},h=Object(s.a)(m,l,[],!1,null,null,null);h.options.__file="src/components/CalcButtons.vue";var b={name:"App",components:{"calc-screen":a,"calc-buttons":h.exports},data:function(){return{enteredNumber:"",enteredOperator:"",firstNumber:"",secondNumber:"",result:""}},methods:{inputNumber:function(t){"."===t&&this.firstNumber.toString().includes(".")&&""===this.enteredOperator||"."===t&&this.secondNumber.toString().includes(".")||(""===this.enteredOperator?this.firstNumber=this.firstNumber.toString()+this.enteredNumber.toString()+t.toString():this.secondNumber=this.secondNumber.toString()+this.enteredNumber.toString()+t.toString(),this.result="")},inputOperator:function(t){""!==this.firstNumber&&(""!==this.enteredOperator&&""!==this.secondNumber&&(this.computeResult(),this.firstNumber=this.result,this.result=""),this.enteredOperator=t.toString())},clearAll:function(){this.firstNumber="",this.secondNumber="",this.enteredOperator="",this.result=""},provideResult:function(){""!==this.secondNumber&&this.computeResult()},reverseNumber:function(){this.result="Available in Premium!"},computeResult:function(){this.result=new Function("return "+this.firstNumber+this.enteredOperator+this.secondNumber)(),this.firstNumber="",this.secondNumber="",this.enteredOperator=""}}},p=(r("XAuw"),Object(s.a)(b,i,[],!1,null,null,null));p.options.__file="src/App.vue";var v=p.exports;new n.a({render:function(t){return t(v)}}).$mount("#app")},XAuw:function(t,e,r){"use strict";r("kIEM")},kIEM:function(t,e,r){var n=r("LboF"),i=r("BkHL");"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var u={insert:"head",singleton:!1};n(i,u);t.exports=i.locals||{}}},[["Vtdi",1,2]]]);