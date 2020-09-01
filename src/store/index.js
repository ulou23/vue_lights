import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const testdata=[];
for(let i=1;i<=10;i++){
    testdata.push({
        id:i, name:`produkt #${1}`, category: `Kategoria ${i %3}`, description: `to jst produkt #${i}`, price: i*500
    })
}
export default new Vuex.Store({
    strict:true,
    state:{
        products:testdata
    }
})
