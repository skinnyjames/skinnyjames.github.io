import Vue from 'vue'
import YAML from 'js-yaml'

window.Site = window.Site || (function(){
  return {
    init(args) {
      console.log('args', args)
      new Vue({
        el: args.el,
        data: {
          links: args.links,
          activeLink: null,
          lifeWorks: [],
          activeWork: null,
        },
        mounted() {
          let vm = this
          let type = 'GET'
          let url = 'data/life.yml'
          let dataType = 'text'
          let success = (yaml) => {
            vm.lifeWorks = YAML.safeLoad(yaml)
          }
          $.ajax({ type, url, dataType, success })
        },
        computed: {
        },
        methods: {
        },
      })
    }
  }
}())
