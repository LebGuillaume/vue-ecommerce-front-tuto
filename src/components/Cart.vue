<template>
<transition name="cart-anim">

    <div v-if="productcart.length > 0" class="shopping-cart" id="shopping-cart">
        <h2>Panier</h2>$
        <transition-group name="item-anim" tag="div" class="item-group">
            <div v-for="(product, id) in productcart" :key="product.id" class="item">
                <div class="img-container"><img :src="product.img" alt=""></div>
                <div class="item-description">
                    <h4>{{product.description}}</h4>
                    <p>{{product.price}} €</p>

                </div>
                <div class="item-quantity">
                    <h6>quantité {{product.quantity}}</h6>

                    <div class="cart-icons">
                        <button @click.prevent="cartPlusOne(product)">
                            <vue-fontawesome icon="plus" size="1,5"></vue-fontawesome>
                        </button>
                        <button @click.prevent="cartMinusOne(product, id)">
                            <vue-fontawesome icon="minus" size="1,5"></vue-fontawesome>
                        </button>
                        <button @click="cartRemoveItem(id)">
                            <vue-fontawesome icon="trash" size="1,5"></vue-fontawesome>
                        </button>
                    </div>

                </div>

            </div>

        </transition-group>
        <div class="grand-total">
            <div class="total">
                <h2>Total</h2>
                <h2>{{cartTotalAmount}}€</h2>
            </div>
            Vous avez {{itemTotalAmount}} article<span v-if="itemTotalAmount >= 2">s</span>
        </div>
    </div>
</transition>
</template>

<script>
export default {
    name: 'Cart',
    mixins: [],
    components: {},
    data() {
        return {

        };
    },
    model: {},
    props: {
        productcart: Array
    },
    methods: {
        cartPlusOne(product) {
            console.log("tesrt")
            product.quantity = product.quantity + 1
        },
        cartMinusOne(product, id) {
            if (product.quantity == 1) {
                this.cartRemoveItem(id);
            } else {
                product.quantity = product.quantity - 1
            }
        },
        cartRemoveItem(id) {
            this.$delete(this.productcart, id)
        }
    },
    computed: {
        cartTotalAmount() {
            let total = 0;
            for (let item in this.productcart) {
                total = total + (this.productcart[item].quantity * this.productcart[item].price)
            }
            return total
        },
        itemTotalAmount() {
            let itemTotal = 0
            for (let item in this.productcart) {
                itemTotal = itemTotal + this.productcart[item].quantity
            }
            return itemTotal
        }
    },
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

<style src="./Cart.scss" lang="scss" scoped>
</style>
