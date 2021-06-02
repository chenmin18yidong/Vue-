const app = new Vue({
    el:'#app',
    data:{
        books:[
            {
              id:1,
              name:'《泰坦尼克号》',
              date:'2012.05.12',
              price:85.23,
              count:1
            },
            {
                id:2,
              name:'《阿莫西比》',
              date:'2012.06.02',
              price:56,
              count:1
            },
            {
                id:3,
              name:'《老子》',
              date:'2015.06.04',
              price:10.25,
              count:1
            },
            {
                id:4,
              name:'《拂风起》',
              date:'2021.05.03',
              price:99.00,
              count:1
            }
        ]
    },
    methods:{
        // getFinalPrice(price){
        //     return '￥' + price.toFixed(2) 
        //         }
        increment(index){
           this.books[index].count ++

        },
        decrement(index){
          this.books[index].count --
        },
        removeHander(index){
         this.books.splice(index, 1)
        }
    },
    //计算属性
    computed:{
      totalPrice(){
      let  totalPrice = 0
        //普通的for循环
      //    for(let i = 0; i<this.books.length;i++){
      //      totalPrice += this.books[i].price*this.books[i].count
      //    }
      // }

      // 2.for(let i in this.books)
          // for(let i in this.books){
            // totalPrice += this.books[i].price*this.books[i].count
            // 简写
            // const book = this.books[i]
              // totalPrice += book.price*book.count
          // }


          //3.for(let i of this.books)
          for(let item of this.books){
            totalPrice += item.price*item.count
          }

          //4.reduce



          return totalPrice
      }
    },
    //过滤器
    filters:{
        showPrice(price){
            return '￥' + price.toFixed(2)
        }
    }
})