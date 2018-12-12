import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Graphic from '@/components/home/Graphic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: "Hello World",
      component: HelloWorld
    },
    {
      path: '/graphic',
      name: 'Grahpic Demo',
      component: Graphic,
      props: {
        imageURLs: [
          "https://i.imgur.com/NNoFNWf.png",
          "https://i.imgur.com/VW2DYbL.png",
          "https://i.imgur.com/UZKEjzG.png",
          "https://i.imgur.com/6EhAM7G.png",
          "https://i.imgur.com/QOfZ5r8.png",
          "https://i.imgur.com/Y4BHWJM.png",
          "https://i.imgur.com/laSSeYN.png",
          "https://i.imgur.com/HaYuGQi.png"
        ],
        transitionTime: 5
      }
    }
  ]
})
