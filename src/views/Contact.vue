<template>
    <!-- contact -->
    <div class="contact" data-js="route" data-route-content="contact">

        <titlepages :title="'Drop me a line'"  :subtitle="'If you would like to get in touch, please shoot me an email or a call.'"/>
        
        <div class="skill-bars">
            <!-- UI -->
            <div class="progress-bar">
                <div class="title">  
                    <div class="icon">
                        <svg aria-hidden="true" data-prefix="fas" width="12px" data-icon="mobile-alt" class="svg-inline--fa fa-mobile-alt fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg>
                    </div>Phone</div>
                <span class="number">(226) 977 0251</span>
            </div>
            <div class="progress-bar">
                <div class="title">
                    <div class="icon2">
                        <svg aria-hidden="true" data-prefix="far" width="16px" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
                    </div>
                    Email
                    </div>
                <span class="number"><a rel="mail" hreflang="en" class="link" href="mailto:mattximca@gmail.com" target="_blank">mattximca@gmail.com</a></span>
            </div>
            <div class="progress-bar">
                <div class="title">
                    <div class="icon">
                        <svg aria-hidden="true" data-prefix="fas" width="12px" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                    </div>
                    City</div>
                <span class="number">London - Ontario, Canada</span>
            </div>
        </div>
        

    </div>
</template>

<script>
import titlepages       from '../components/shared/TitlePages.vue';

export default {
     //Compenents
  components: {
    titlepages
  },
}
</script>

<style lang="scss" scoped>

</style>


