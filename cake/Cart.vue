    <template>
        <div>
        <div class="container" id="app">
            <div class="cart_top">
            <div class="back" style="margin-left:4px;" @click="back"><img src="../../assets/1.svg" alt=""></div>
                <h3 style="color:#7a5c29; display:flex;margin:auto;align-items: center;">购物车</h3>
                </div>
                <div class="cart_total" v-if="total_num>0">
                    总计：共 {{cart_list.length}}件商品，已选择 {{total_num}} 件
                    </div>
                <div >
                    <div class="cart_content" v-for="(cart,index) in cart_list" :key="index">
                    <input type="checkbox" :value="cart" v-model="check_goods" />
                        <p><img :src="cart.url" alt=""></p>
                        <div>
                        <p style="color:#7a5c29;margin:0;">{{cart.goods_name}}</p>
                        <p style="color:red;font-weight:700;">￥{{cart.goods_price}}</p>
                        <div class="add_reduce">
                            <span class="reduce" @click="reduce(cart)"><img src="../../assets/reduce.svg" alt=""></span>
                            <input style="width:40px;text-align:center;" class="cart_num" type="number" v-model="cart.num" />
                            <span class="add" @click="add_num(cart)"><img src="../../assets/add.svg" alt=""></span>
                        </div>
                        </div>
                        <div>
                            <button class="delete" @click="delete_num">删除</button>
                        </div>
                    </div>
                    </div>
                </div>
            <div class="cart_buy">
                <div class="select">
            <label><input type="checkbox" @click="check_all" 
                :checked="check_goods.length == cart_list.length"/>全选</label>
                </div>
                <span  style="color:red;font-weight:700;" >合计：￥{{total_price}}元</span>
                <router-link to="/pay"  class="pay" :disabled="check_goods.length <= 0">去结算</router-link>
            </div>
            </div>
    </template>
    <script>
    export default {
        data(){
            return{
    cart_list: [{
            url:"http://127.0.0.1:3000/img/5.jpg",
            　　goods_name: '旺世如意',
            　　goods_price: '258',
            　　num: '1',
            },{
            url:"http://127.0.0.1:3000/img/6.jpg",
            goods_name: '果嘉年华',
            goods_price: '258',
            num: '1',
            },{ url:"http://127.0.0.1:3000/img/7.jpg",
            goods_name: 'L O V E',
            goods_price: '258',
            num: '1',
            },
            { url:"http://127.0.0.1:3000/img/8.jpg",
            goods_name: '缤纷贝蒂',
            goods_price: '258',
            num: '1',
            },
            { url:"http://127.0.0.1:3000/img/12.jpg",
            goods_name: '爱的心意',
            goods_price: '258',
            num: '1',
            },
            { url:"http://127.0.0.1:3000/img/17.jpg",
            goods_name: '情有独衷',
            goods_price: '258',
            num: '1',
            },
            { url:"http://127.0.0.1:3000/img/18.jpg",
            goods_name: '玲珑藏心',
            goods_price: '298',
            num: '1',
            },
            ],
            check_goods: [] //已选择的商品
            }
        },
        　　　computed: {
    //              总价
                    total_price() {
                        let price = 0　　　　　　　　　　　　　　　　　　　　　　　　
                        this.check_goods.forEach(item => {
    //                      总价 = 价格 * 数量
                            price += Number(item.goods_price) * Number(item.num)
                        })
                        return price
                    },
    //              数量
                    total_num() {
                        let t_num = 0;
                        this.check_goods.forEach(item => {
                            t_num += Number(item.num);
                        })
                        return t_num
                    }
                },
            　　　methods:{
    //              商品类减减
                    reduce(cart) {
                        if(cart.num <=0) {
                            cart.num = 0
                        } else {
                            cart.num --
                        }
                    },
    //              商品累加
                    add_num(cart) {
                        cart.num++
                    },
    //              删除商品
                    delete_num(cart){
                    this.check_goods.splice(this.check_goods.indexOf(cart),1)
                    this.cart_list.splice(this.cart_list.indexOf(cart),1)
                
            },   
            check_all() {
                        if (this.check_goods.length >0) {
                            this.check_goods = []
                        } else {
                            this.cart_list.forEach(item => {
                                this.check_goods.push(item)
                            })
                        }
                    },
            back(){
            this.$router.push("/index")
               }
                    },
    //              全选
                
                }
    </script>
    <style scoped>
    .cart_top{
    display:flex;
    align-items: center;
    width:100%;
    height:60px;
    background-image: linear-gradient(90deg,#fab3b3,#ffbcb3 73%,#ffcaba);
    font-size:16px;
    text-align: center;}

    .cart_content{
        display: flex;
        justify-content:space-between;
        align-items: center;
        padding:4px;
    }
    .cart_buy{
    background:#fff;
    height:50px;
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
    position:fixed;
    bottom: 0;
    left: 0;
    }
    .pay{
    background:red;
    color:#fff; 
    width:30%;
    height:50px;
    display:flex;
    justify-content: center;
    align-items:center;
    }
    .add,.reduce{
    font-size:21px;
    }
    .add_reduce{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .cart_total{
       color:#7a5c29;
       position:fixed;
       width:100%;
       background:#fff;
       height:60px;
       display: flex;
       justify-content: center;
       align-items:center;
    }
    </style>


