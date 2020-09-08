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
        <div class="card-text bg-white p-1"> {{ p.description}}</div>
    </div>
</div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "ProductsList",


        computed: {
            ...mapGetters( {products: "productsFilteredByCat"})
        },
        filters: {
            currency(v){
                return new Intl.NumberFormat("pl-PL",{ style: "currency", currency:"PLN"}).format(v);
            }
        }
    }
</script>

<style scoped>

</style>
