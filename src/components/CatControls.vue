<template>
    <div class="container-fluid">
        <div class="row my-2" v-for="c in categories" v-bind:key="c">
            <button class="btn btn-block" v-on:click="setCurrCat(c)" v-bind:class="c == catAll ? 'btn-light' : 'btn-secondary'">{{c}}</button>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations} from "vuex";
    export default {
        name: "CatControls",
        computed:{
            ...mapState(["catAll"]),
            ...mapGetters(["categories"])
        },
        methods:{
            ...mapMutations(["setCurrCat"])
        }
    }
</script>

<style scoped>

</style>
