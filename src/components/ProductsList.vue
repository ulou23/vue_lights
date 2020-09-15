<template>
<div>
    <div v-for="p in products" v-bind:key="p.id" class="card m-1 p-1 bg-light">
        <h4>
            {{p.name}}
            <span class="badge badge-pill badge-dark float-right">
                {{p.price | currency}}
            </span>
        </h4>
        <div class="card-img"></div>
        <div class="card-text bg-white p-1"> {{ p.description}}
        <button class="btn btn-outline-success btn-sm float-right" v-on:click="handleProAdd(p)">Add to cart</button>
    </div></div>
</div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';

    export default {
        name: "ProductsList",


        computed: {
            ...mapGetters( {products: "productsFilteredByCat"})
        },
        filters: {
            currency(v){
                return new Intl.NumberFormat("pl-PL",{ style: "currency", currency:"PLN"}).format(v);
            }
        },
        methods: {
            ...mapMutations({addPro: "cart/addPro"}),
            handleProAdd(product){
                this.addPro(product);
                this.$router.push("/cart");

            }
        }
    }
</script>

<style scoped>

</style>
