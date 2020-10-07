<template>
    <div class="container-fluid">


    <div class="row">
        <div class="col bg-dark text-white">
            <a class="navbar-brand">LAMP ATELIER</a>
    </div>
</div>
        <div class="row">
            <div class="col mt-2">
                <h2 class="text-center"> your CART</h2>
            <table class="table table-striped p-2">
                <thead>
                <tr>
                    <th>Quantity</th><th>Product</th>
                    <th>Price</th>
                    <th>Subtotal</th>
                </tr>
                </thead>
                <tbody>
                <tr v-if="lines.length == 0">
                    <td>your CART is empty</td>
                </tr><cart-line v-for="line in lines" v-bind:key="line.product.id" v-bind:line="line"
                           v-on:quantity="handleQChange(line,$event)"
                           v-on:remove="remove" />
                </tbody>
                <tfoot v-if="lines.length>0">
                <tr>
                    <td colspan="3" class="text-right">Total:</td>
                    <td class="text-right">
                        {{ totalPrice }}
                    </td>
                </tr>
                </tfoot>
            </table>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="text-center">
                    <router-link to="/" class="btn btn-secondary m-1"> continue shoppin</router-link>
               <router-view to="/checkout" class="btn btn-primary m-1" v-bind:disabled="lines.length==0">Checkout
               </router-view> </div>
            </div>
        </div>
</div>
</template>

<script>
    import {mapState, mapMutations, mapGetters} from "vuex";
    import CartLine from "@/components/ShoppingLine";
    export default {
        components: {CartLine},
        computed: {
            ...mapState({ lines:state=> state.cart.lines}),
    ...mapGetters({ totalPrice:"cart/totalPrice"})
        },
        methods: {
            ...mapMutations({
                change: "cart/changeQuant",
                remove: "cart/removePro"
            }),
            handleQChange(line,$event){
                this.change({line,quantity:$event})
            }
        }
    }
</script>

<style scoped>

</style>
