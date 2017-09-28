<template>
 <div class='wrap' v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="1000">
 <!-- <iscroll-view class="scroll-view"> -->
     <div class="ding"><p><i class='iconfont icon-fangdajing'></i><input type="text" placeholder='联想笔记本电脑'></p></div> 
    <router-view></router-view>
<!-- </iscroll-view> -->
    <footer>
         <ul>
             <router-link tag='li' to='/'><i class='iconfont icon-iconhuidaoshouye'></i><span>首页</span></router-link>
             <router-link tag='li' to='/fenlei'><i class='iconfont icon-gengduo-2'></i><span>分类</span></router-link>
             <router-link tag='li' to='/find'><i class='iconfont icon-zhifu-01'></i><span>发现</span></router-link>
             <router-link tag='li' to='/car'><i class='iconfont icon-gouwuche'></i><span>购物车</span></router-link>  
             <router-link tag='li' to='/my'><i class='iconfont icon-wode'></i><span>我的</span></router-link> 
         </ul>
    </footer>
 </div>
</template>
<script>

    import Vue from 'vue';
    import {
        Swipe,
        SwipeItem
    } from 'mint-ui';
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    export default {
        methods:{
            loadMore() {
               this.loading = true;
               this.$('.wrap').append('<div>11111111</div>')
            }
        },
        mounted(){
            
        }
    }
</script>
<style>
    .scroll-view {
        /* -- Attention: This line is extremely important in chrome 55+! -- */
        touch-action: none;
        /* -- Attention-- */
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
    }
</style>