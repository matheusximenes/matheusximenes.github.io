<template>
    <!-- Portifolio -->
    <section class="portfolio" data-js="route" data-route-content="projects">
        <titlepages :title="'My Projects'"  :subtitle="'Web Sites, Intranet Systems, Illustrations, and Brands.'"/>
        <ul class="portfolio-list" data-js="list-projects">
          <!-- Fetch Data for a Json file -->
          <li v-for="(project, index) in projects" :key="index">
            <buttonProjects :key="index" @click.native="openModal(project.imgBig)" :title="project.title" :type="project.type" :bgImg="project.imgSmall"/>
          </li>
        </ul>
        <a class="full-project" href="https://matheusnximenes.blogspot.com/" target="_blank" title="Full Projects">More projects</a>
        <modal v-if="showModal" @close="showModal=false">
          <img :src="imgBig" slot="img" class="img-modal"/>
        </modal>
    </section>
</template>


<script>

//Imports
import projectsFile     from '../json/projects.json';
import buttonProjects   from '../components/Button.vue';
import titlepages       from '../components/shared/TitlePages.vue';
import modal            from '../components/shared/Modal.vue';

//Default
export default {
  name: 'Projects',
  
  //Compenents
  components: {
    buttonProjects,
    modal,
    titlepages
  },
  
  //Data
  data(){
    return{
      projects: projectsFile, 
      showModal: false, 
      imgBig: ''
    }
  },

  //Methods
  methods: {
    openModal: function (text){
      
      this.imgBig = text;
      //console.log('Image: ', modal.imgBig);
      this.showModal = true;
      
    }
  }
};

</script>

<style lang="scss" scoped>
    
</style>


