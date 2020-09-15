import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import CartModule from "./cart";

Vue.use(Vuex);
const burl="http://localhost:3500";
const prourl=`${burl}/products`
const caturl=`${burl}/categories`

export default new Vuex.Store({
    strict: true,
    modules:{cart: CartModule},
    state: {
        products: [],
        categoriesData:[],
        productsTotal:0,
        catAll:"wszystkie"
    },
    getters:{
        productsFilteredByCat: state => state.products.filter(p=>state.catAll=="wszystkie" || p.category == state.catAll),
        categories: state => ["wszystkie",...state.categoriesData]
    },
    mutations:{
        setData(state,data){
            state.products = data.pdata;
            state.productsTotal=data.pdata.length;
            state.categoriesData=data.cdata.sort()
        },
        setCurrCat(state,category){
            state.catAll=category;
        }
        },
        actions: {
            async getData(context){
                let pdata = (await Axios.get(prourl)).data;
                let cdata=(await Axios.get(caturl)).data;
                context.commit("setData", {pdata,cdata})
            }
        }

})
