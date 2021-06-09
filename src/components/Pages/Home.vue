<template>
<div class="home-container">
    <h1>Articles</h1>
    <!-- search display -->
    <input type="search" v-model="searchKey" id="search" placeholder="Rechercher..." autocomplete="off">
    <span v-if="searchKey && FilterList.length >= 1">{{FilterList.length}} résultat<span v-if="FilterList.length >= 2">s</span></span>
    <!-- cards display -->
    <div class="card-cart-container">
        <div class="card-container">
            <div v-for="(product, index) in FilterList" :key="index" class="card">
                <div class="img-container"><img :src="product.img" alt=""></div>
                <div class="card-text">
                    <h3>{{product.description}}</h3>
                    <span>{{product.price}}€</span>
                </div>
                <div class="card-icons">
                    <div class="like-container">
                        <input type="checkbox" name="checkbox" :id="product.id" :value="product.id" v-model="like" @click="setLikeCookie()">
                        <label :for="product.id">
                            <vue-fontawesome icon="heart" size="1"></vue-fontawesome>
                        </label>
                    </div>
                    <div class="add-to-cart">
                        <button @click="addToCart(product)">
                            <i>
                                <vue-fontawesome icon="shopping-cart" size="1"></vue-fontawesome>
                            </i>
                        </button>
                    </div>
                </div>
            </div>
            <div v-if="FilterList.length == []" class="no-result">
                <h3>Désolé</h3>
                <p>aucun résultat trouvé</p>
            </div>
        </div>

    </div>
</div>
</template>

<script>
export default {
    name: 'Home',
    mixins: [],
    components: {},
    data() {
        return {
            searchKey: '',
            like: [],
            cart: []
        };
    },
    model: {},
    props: {
        products: Array
    },
    methods: {
        setLikeCookie() {
            document.addEventListener('input', () => {
                setTimeout(() => {
                    this.$cookies.set('like', JSON.stringify(this.like))
                }, 300);

            })
        },
        getLikeCookie() {

            let cookieValue = JSON.parse(this.$cookies.get('like'));
            console.log(cookieValue)
            return cookieValue == null ? this.like = [] : this.like = cookieValue
        },
        addToCart(product) {
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i].id === product.id) {
                    return this.cart[i].quantity++
                }
            }
            this.cart.push({
                id: product.id,
                img: product.img,
                description: product.description,
                price: product.price,
                quantity: 1

            })
            this.$emit('addToCart', this.cart)
        }
    },
    computed: {
        FilterList() {
            return this.products.filter((product) => {
                return product.description.toLowerCase().includes(this.searchKey.toLowerCase());
            })
        },

    },
    watch: {

    },
    mounted() {
        this.getLikeCookie()
    },

}
</script>

<style src="./StylePage/Home.scss" lang="scss" scoped>

</style>
