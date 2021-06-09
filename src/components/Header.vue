<template>
<nav>
    <div class="nav-container">
        <div id="logo">
            <router-link to="/" exact><img src="../assets/img/wish-logo-800.png" alt="logo" /></router-link>
        </div>

        <ul id="icons">
            <li>

                <router-link to="/usersettings" exact>
                    <vue-fontawesome icon="user" size="1,5" flip="horizontal"></vue-fontawesome>
                </router-link>

            </li>
            <li>

                <router-link to="/wishlist" exact>
                    <vue-fontawesome icon="heart" size="1,5"></vue-fontawesome>
                    <span id="nav-not"></span>
                </router-link>

                <span id="nav-notif"></span>
            </li>
            <li>

                <router-link to="/shopping">
                    <vue-fontawesome icon="shopping-cart" size="1,5"></vue-fontawesome>
                </router-link>

            </li>
        </ul>
    </div>
</nav>
</template>

<script>
export default {
    name: 'Header',
    mixins: [],
    components: {},
    data() {
        return {};
    },
    model: {},
    props: {},
    methods: {},
    computed: {},
    watch: {},
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    beforDestroy() {},
    destroy() {},
}
</script>

<style src="./header.scss" lang="scss" scoped>
</style>
