<template>
    <div>
    <header>
         
            <div class='hello'>
                    <mt-swipe :auto='2000'>
                    <mt-swipe-item v-for='i in data.header'><div><img :src="i"></div></mt-swipe-item>
                    </mt-swipe>
            </div>
             <div class='banner'>
                   <div><img src="images/newpeople.jpg" alt=""></div>
            </div> 
            <!-- <p><i class='iconfont icon-fangdajing'></i><input type="text" placeholder='联想笔记本电脑'></p>  -->
          
    </header>
    <section>
            <div class='sec_one'>
                <mt-swipe :auto='4000'>
                <mt-swipe-item>
                    <div>
                    <ul>
                        <li v-for='i in data.banner'><img :src="i.img" alt=""><span>{{i.name}}</span></li>
                    </ul>
                    </div>
                </mt-swipe-item>
                </mt-swipe>
            </div>
            <div class="sec_two">
                <p>京东<b>快报</b><i>热</i>ipone手机最神奇的功能，原来  |   更多</p>
            </div>
            <div class="sec_three">
                <div class="top">
                    <p><i class="iconfont icon-shizhong1"></i><small>京东秒杀</small><b>{{hour}}</b>:<b>{{minute}}</b>:<b>{{section}}</b></p>
                    <p>京选尖货轮番秒</p>
                </div>
                <div class="bottom">                 
                     <ul>
                        <li v-for='i in data.miao'><img :src="i.img" alt=""><span>{{i.price}}</span><s>{{i.priceh}}</s></li>
                    </ul> 
                </div>
            </div>
            <div class="sec_four">
                <ul>
                    <li v-for='i in data.dian'><span>{{i.span}}</span><span>{{i.span}}</span><span><img :src="i.img" alt=""></span></li>
                </ul>
            </div>
            <div class='sec_five'>
                <ol>
                    <li>国/庆/长/假</li>
                    <li>怎么嗨</li>
                    <li>自营图书每满100减40</li>
                </ol>
                <ul>
                    <li><span>电脑办公</span><span>没满100元减40元</span></li>
                    <li><span>3C女神优品</span><span>没满100元减40元</span></li>
                    <li><span>电视家影</span><span>没满100元减40元</span></li>
                    <li><span>运动健身会所</span><span>没满100元减40元</span></li>
                </ul>
            </div>
             <div class="sec_six">
                <p><b>爱 /</b><b>生 /</b><b>活</b></p>
            </div> 
            <div class="sec_seven">
                <ul>
                    <li v-for='i in data.qi'><span>{{i.span}}</span><span>{{i.span1}}</span><span><img :src="i.img" alt=""></span></li>
                </ul>
            </div>
    </section>
    </div>
</template>
<script>
import vuex from 'vuex';
import {
    mapState,
    mapMutations,
    mapActions
} from 'vuex';
 export default {
        data() {
            return {
                section: '',
                minute: 1,
                hour: ''
            }
        }, 
        created(){
            this.getidA(this)
        },
        computed:mapState({
            data:state=>state.data
        }), 
        methods:{
            ...mapActions(['getidA'])
        }
        // mounted() {
        //     var _this = this;
        //     setInterval(function() {
        //         var data = new Date();
        //         var forword = new Date('2017-9-27 11:00:00');
        //         var time = forword - data;
        //         time--;
        //         var hour = time / 1000 / 60 / 60;
        //         var minute = (hour - parseInt(hour)) * 60;
        //         var section = (minute - parseInt(minute)) * 60;
        //         _this.hour = parseInt(hour);
        //         _this.minute = parseInt(minute);
        //         _this.section = parseInt(section);
        //     }, 1000);

        // }
    }
</script>