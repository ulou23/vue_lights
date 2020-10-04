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
                </tr><cart v-for="line in lines"
                </tbody>
            </table>
            </div>
        </div>
</div>
</template>

<script>
    export default {
        name: "ShoppingCart"
    }
</script>

<style scoped>

</style>
