<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col bg-light ">
                <a class="navbar-brand"><h4 class="font-weight-bolder" style="font-size: 50px"> Atelier LAMP</h4></a>
            </div>
        </div>
        <div class="row">
            <div class="col-3 bg-primary p-2">
                <h4 class="text-white m-2"> Kategorie</h4>
            </div>
            <div class="col-9 bg-dark p-2">
                <h4 class="text-white m-2">Produkty</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-9 p-2">
                <ProductsList/>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductsList from "./ProductsList";
    export default {
        name: "store",
        components: { ProductsList}
    }
</script>

<style scoped>

</style>
