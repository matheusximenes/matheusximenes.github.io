<template>
  <!-- Container 100% view -->
    <section class="container">
        
        <!-- Left Diplay  50% view -->
        <header class="left-display" data-js="left-display" v-bind:style="{ backgroundImage: 'url(' + backgroudcurrent + ')' }">
            <!-- <img src="./assets/backgrounds/bg.jpg"> -->
            <div class="logo">MATTHEW<span>XIMENES</span></div>
            <nav class="nav" data-js="nav">
                <ul>
                    <li @click=" backgroudcurrent = backgroundAbout">
                        <router-link to="/" rel="About Section" hreflang="en" >
                            <svg aria-hidden="true" data-prefix="fas" width="16px" data-icon="user" class="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                            </svg>
                            <span class="tooltip">About Me</span>
                        </router-link>
                    </li>
                    <li @click=" backgroudcurrent = backgroundExperience">
                        <router-link to="/experience" rel="Experience Section" hreflang="en" href="#" data-js="btn-content" data-content="experience">
                            <svg aria-hidden="true" data-prefix="fas" width="16px" data-icon="graduation-cap" class="svg-inline--fa fa-graduation-cap fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <path fill="currentColor" d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path>
                            </svg>
                        <span class="tooltip">My Experience</span>
                        </router-link>
                    </li>
                    <li @click=" backgroudcurrent = backgroundProjects">
                        <router-link to="/projects" rel="Projects Section" hreflang="en" href="#" data-js="btn-content" data-content="projects">
                            <span class="tooltip">My Projects</span>
                            <svg aria-hidden="true" data-prefix="fas" width="16px" data-icon="briefcase" class="svg-inline--fa fa-briefcase fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path>
                            </svg>
                            
                        </router-link>
                    </li>
                    <li @click=" backgroudcurrent = backgroundContact">
                      <router-link to="/contact" rel="Contact Section" hreflang="en" href="#" data-js="btn-content" data-content="contact">
                            <svg aria-hidden="true" data-prefix="fas" width="16px" data-icon="paper-plane" class="svg-inline--fa fa-paper-plane fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
                            </svg>
                        <span class="tooltip">Drop Me a Line</span>
                        </router-link>
                    </li>
                </ul>    
            </nav>
            <div class="intro" data-js="intro">
                <h1>Front End Developer</h1>
                <p class="intro-text">Full Stack Designer, with over 10+ years of working experience, specialized in front-end development (In-depth understanding of HTML5, CSS3/Sass, and JavaScript with W3C Standards).</p>
                <!-- <a rel="Link to Video" hreflang="en" href="#" class="video-link">Watch My Video</a> -->
                <router-link to="/" rel="Experience Section" hreflang="en" href="#" class="experience-link">See my Experience</router-link>
            </div>
            
            <!-- Start / Social Media -->
            <ul class="social">
                <li>
                    <a rel="noopener" hreflang="en" href="http://www.linkedin.com/in/matheusximenes/" target="_blank" class="social-link">
                        <svg aria-hidden="true" data-prefix="fab" with=16 data-icon="linkedin-in" class="svg-inline--fa fa-linkedin-in fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"></path>
                        </svg>
                        <span>LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a rel="noopener" hreflang="en" href="http://www.instagram.com/matheusnximenes/" target="_blank" class="social-link">
                        <svg aria-hidden="true" data-prefix="fab" data-icon="instagram" class="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                        </svg>
                        <span>Instagram</span>
                    </a>
                </li>
                <li>
                    <a rel="noopener" hreflang="en" href="https://dribbble.com/MattXimenes" target="_blank" class="social-link">
                        <svg aria-hidden="true" data-prefix="fab" data-icon="dribbble" class="svg-inline--fa fa-dribbble fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path>
                        </svg>
                        <span>Dribbble</span>
                    </a>
                </li>
            </ul>
            <!-- Finish / Social Media -->
        </header>
        <!-- Right Display 50% view -->
        <main class="right-display">
          <!-- Router View -->
          <transition name="content"> 
            <router-view/>
          </transition>
        </main>
      </div>

      <!-- Footer -->
      <footer class="copyright">Hand Made & Copyright - <a rel="alternative" hreflang="pt-br" href="http://matthewxim.com/" target="_self">matthewxim.com</a> - 2018</footer>

    </section>
   
</template>

<script>
import backgroundAbout from './assets/backgrounds/bg.jpg';
import backgroundExperience from './assets/backgrounds/bg1.jpg';
import backgroundProjects from './assets/backgrounds/bg2.jpg';
import backgroundContact from './assets/backgrounds/bg3.jpg';

export default {
    name: 'App',
    data(){
        return {
            backgroudcurrent: backgroundAbout,
            backgroundAbout,
            backgroundExperience,
            backgroundContact,
            backgroundProjects
        }
    },
    methods: {
        changeBackground(img){
            console.log(img);
            this.backgroudcurrent = img
        }
    }
};
</script>


<style lang="scss">

    //Animation of the Content Change
    .content-enter-active, .content-leave-active {
        transition: opacity .5s;
    }
    .content-enter {
        opacity: 1;
    }

    .content-leave-to {
        opacity: 0;
    }

    // Colors
    $color-white: #fff;
    $color-black: #000;
    $color-gray: #666;
    $color-gray-lighter:#8f8e8e;
    $color-gray-lighter2:#ccc;
    $color-blue:#23A6D5;
    $color-red:#E73C7E;

    // Color Components
    $color-logo:#606060;
    $color-main-nav:$color-gray;
    $color-main-nav-icons: #fff;

    //Fonts
    $font-logo: Arial, 'Helvetica Neue', Helvetica, sans-serif ;
    $font-display: 'Overpass', 'Helvetica Neue', Helvetica, sans-serif;
    $font-default: 'Open Sans', 'Helvetica Neue', Helvetica, sans-serif;

    body {
        margin: 0;
        padding: 0;
        font-family: $font-default;
        font-size: 16px;
    }

    ul {
        padding: 0px;
    }

    li {
        list-style: none;
    }

    h2,h3 {
        margin:0px;
    }

    button:hover{
        cursor: pointer;
    }

    button:focus{
        outline:0;
    }

    .link {
        color: $color-gray-lighter;
    }

    #map {
        width:100%;
        height:250px
    }

    .fade {
        animation: fade 1s ease;
    }

    @keyframes fadeanimation {
        from {opacity: 0;}
        to { opacity: 1;}
    }

    /* Structure */
    .container {
        min-width:320px;
        width:100%;
        height: 100%;

        .left-display::after{
            content:"";
            position: fixed;
            opacity: .95;
            top:0;
            left:0;
            width:40%;
            height:100%;
            padding: 30px;
            z-index:1;
            //background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(27,32,48,1) 100%);
            background:linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
            background-size: 400% 400%;
            background-position: center;
            animation: Gradient 15s ease infinite;
        }

        @keyframes Gradient {
            0% {
                background-position: 0% 50%
            }
            50% {
                background-position: 100% 50%
            }
            100% {
                background-position: 0% 50%
            }
        }

        .left-display {
            position: fixed;
            z-index:1;
            width:40%;
            height:100%;
            padding: 30px;
            //background:#1B2030 url("/assets/backgrounds/bg.jpg") top center no-repeat;//
            background-size:cover;

            /* Logo */
            .logo {
                color: $color-white;
                font-family: $font-logo;
                font-size: 1rem;
                letter-spacing: -0.03em;
                position:relative;
                animation: fade 1s;
                z-index:2;
                span{
                    padding-left: 1px;
                    font-weight: bold;
                }
            }

            .nav {
                position: fixed;
                top: 15px;
                left:40%;
                z-index:3;

                li {
                    width:32px;
                    list-style: none;

                    a {
                        display: block;
                        position:relative;
                        width:16px;
                        height:16px;
                        margin: 10px 0;
                        padding:8px 8px;
                        background-color: $color-main-nav;
                        color:$color-main-nav-icons;
                        transition: all .2s ease-in-out;

                        svg{
                            width:16px;
                        }

                        span{
                            display:none;
                            opacity: 0;
                            width:100px;
                            position:absolute;
                            top: 0;
                            right:0px;
                            padding:9px 10px;
                            font-size:.8rem;
                            background-color: $color-gray;
                            transition: all .5s ease-in-out;
                        }
                    }

                    a:hover{
                        background-color: $color-white;
                        color:$color-blue;
                        transform: scale(1.2);
                        box-shadow: 0px 3px 6px rgba(124, 100, 243, 0.4);

                        span{
                            display:block;
                            opacity: 1;
                            width:100px;
                            position:absolute;
                            top: 0;
                            right:37px;
                            padding:9px 10px;
                            font-size:.8rem;
                            color:$color-white;
                            background-color: $color-gray;
                            box-shadow: 0px 3px 6px rgba(124, 100, 243, 0.4);
                        }

                        span::after{
                            width: 0;
                            height: 0;
                            position:absolute;
                            top:5px;
                            right:-5px;
                            content: "";
                            border-top: 10px solid transparent;
                            border-bottom: 10px solid transparent;
                            border-left: 10px solid $color-gray;
                        }
                    }
                }
            }

            @keyframes fade {
                0%   {opacity: 0; top:30px;}
                100%  {opacity: 1; top:0px;}
            }

            .intro {
                position:fixed;
                top:35%;
                width:40%;
                z-index:2;
                font-family: $font-display;
                text-align: center;
                animation: fade 3s;

                h1{
                    font-size:1.7rem;
                    color:$color-white;
                    line-height: 24px;
                    padding: 0;
                    margin: 0;
                }

                .intro-text{
                    font-family: $font-default;
                    font-size:1.2rem;
                    line-height: 24px;
                    color:$color-white;
                    margin:10px 0 30px 0;
                }

                a {
                    color:$color-white;
                    font-size: .8rem;
                    text-decoration: none;
                    border-bottom:1px solid $color-white;
                }
            }

        .social {
                position: fixed;
                bottom: 0px;
                left:40%;
                z-index:2;

                li {
                    width:32px;
                    list-style: none;

                    a {
                        display: block;
                        width:16px;
                        height:16px;
                        margin: 10px 0;
                        padding:8px 8px;
                        overflow: hidden;
                        background-color: $color-white;
                        color:$color-red;
                        transition: all .2s ease-in-out;

                        span{
                            display: none;
                        }
                    }

                    a:hover {
                        transform: scale(1.2);
                        box-shadow: 0px 3px 6px rgba(124, 100, 243, 0.4);
                    }
                }
            }
        }

        .right-display {
            margin-left:44%;
            padding: 30px 1% 30px 4%;
            background-color:  $color-white;
            position:relative;
            animation: fade 1s ease-in;

            @keyframes fade {
                from {opacity: 0;}
                to {opacity:1;}
            }

            h2.title {
                font-size: 1.1rem;
                color: $color-gray;
                margin: 50px 0 5px 0;
            }

            h2.title:first-child {
                margin-top:0px;
            }

            h2.title::before {
                display: inline-block;
                position: absolute;
                margin-top:28px;
                margin-left: -65px;
                content: "";
                border-top: 1px solid $color-gray-lighter;
                width: 45px;
                transform: translateY(-1rem);
            }

            h3.subtitle{
                font-size: 1.5rem;
                color:$color-gray;
                margin-bottom: 25px;
                line-height: 28px;
            }

            p {
                font-weight: 300;
                font-size:.9rem;
                line-height: 25px;
                color:$color-gray-lighter;
            }

            b{
                font-weight: 600;
            }

            .whaticando {

                li {
                    width:40%;
                    padding:020px;
                    display: inline-block;
                    text-align: center;

                    svg {
                        position:relative;
                        width: 50px;
                        padding:20px;
                        margin-bottom:10px;
                        color: $color-white;
                        background-color: $color-blue;
                        box-shadow: 0px 3px 6px rgba(124, 100, 243, 0.4);
                        background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
                        background-size: 400% 400%;
                        background-position: 0% 50%;
                        transition: all .2s ease-in-out;
                    }

                    svg:hover {
                        background-position: 100% 50%;
                        transform: scale(1.1);
                    }

                    p {
                        min-width:30px;
                        margin-top: 5px;
                    }
                }

                @media only screen and (max-width: 1091px) {
                    li {
                        width:100%;
                        padding:20px;
                        display: inline-block;
                        text-align: center;
                    }
                }

            }
            .recomendations {
                margin-bottom:40px;

                h3 {
                    margin-bottom: 0px;
                    font-size: 1.3rem;
                    line-height: 1.4rem;

                    span {
                        display: block;
                        font-size: 1rem;
                        color:$color-black;
                    }
                }

                li {
                    display:none;

                    p {
                        min-height:180px;
                        margin-top:10px;
                        font-style: italic;
                    }
                }

                li.active {
                    display:block;
                }

                li:first-child {
                    display: block;
                }
            }

            .nav-recomendations {
                text-align: center;
                margin-bottom: 50px;

                button {
                    height:24px;
                    overflow:hidden;
                    text-indent: -5000px;
                    margin-right: 5px;
                    border:0px;
                    border-bottom: 2px solid $color-blue;
                    transition: all .2s ease-in-out;
                }

                button.active {
                    margin-right: 5px;
                    border-bottom: 2px solid $color-red;
                }

                button:hover{
                    border-bottom: 2px solid $color-blue;
                    box-shadow: 0 4px 2px -2px rgba(124, 100, 243, 0.4);
                }

                button.active:hover {
                    border-bottom: 2px solid $color-red;
                }
            }

            .experience{
                h3 {
                    font-size: 1.2rem;
                    margin-top:20px;
                    margin-bottom:5px;
                    line-height: 1.5rem;

                    span{
                        display: block;
                        font-size:1rem;
                        line-height: 1.2rem;
                        color:$color-gray-lighter;
                    }
                }

                h4.experience-time {
                    margin:0px;
                    font-size: .8rem;
                    color:$color-black;
                }
            }

            .skill-bars {
                margin:20px 0 60px 0;

                .progress-bar {
                    color:$color-gray-lighter;
                    position: relative;
                    padding-bottom:5px;
                    margin:10px 0;
                    border-bottom:1px solid $color-gray-lighter2;

                    .number{
                        position: absolute;
                        right:5px;
                        top:0px;
                        color:$color-gray;
                    }

                    .percentage{
                        font-size: .7rem;
                    }

                    .bar {
                        position:relative;
                        top:7px;
                        border-bottom:3px solid;
                    }

                    .ui{
                        border-color:  #F9DA84;
                        width:95%;
                    }

                    .ux{
                        border-color:  #EB843B;
                        width:75%;
                    }

                    .front{
                        border-color:  #C53C75;
                        width:90%;
                    }

                    .back{
                        border-color:  #8A3BB8;
                        width:50%;
                    }

                    .print{
                        border-color:  #4F5DCE;
                        width:65%;
                    }

                    .adobe{
                        border-color:  #69CBE8;
                        width:95%;
                    }
                }
            }

            .portfolio{

                .portfolio-list{
                    width:100%;

                    button{
                        width:100%;
                        height:250px;
                        position:relative;
                        overflow: hidden;
                        margin-bottom: 30px;
                        background-color: #F9DA84;
                        background-size: cover;
                        border: 1px solid $color-gray-lighter2;
                        padding:0px;
                        transition: all .3s ease-in-out;

                        .info {
                            width:91%;
                            position:absolute;
                            bottom: 15px;
                            padding:10px 30px;
                            color: $color-gray-lighter;
                            text-align: left;
                            border:1px solid rgb(221, 221, 221);
                            border-width:1px 0 1px 0;
                            background-color:rgba(255,255,255, 0.9);

                            h4 {
                                font-size: 1rem;
                                margin:0px 0px 0px 0px;
                            }

                            h4::before {
                                display: inline-block;
                                position: absolute;
                                margin-top:10px;
                                margin-left: -35px;
                                content: "";
                                border-top: 1px solid $color-gray-lighter2;
                                width: 25px;
                                ;
                            }

                            h5 {
                                font-size: 1.3rem;
                                margin:0px;
                            }
                        }

                    }

                    button:hover{
                        transform: scale(1.04);
                        box-shadow: 0 5px 5px -2px rgba(124, 100, 243, 0.4);
                    }

                }

                .full-project {
                    display: block;
                    padding:15px;
                    background-color: $color-blue;
                    text-align: center;
                    font-size: .9rem;
                    color:$color-white;
                    text-decoration: none;
                    transition: all .3s ease-in-out;
                }

                .full-project:hover {
                    background-color: $color-red;
                    transform: scale(1.04);
                    box-shadow: 0 5px 5px -2px rgba(90, 90, 90, 0.4);
                }

                @media only screen and (min-width: 1000px) {
                    .portfolio-list{
                        width:100%;
                        display:flex;
                        flex-wrap:wrap;

                        button {
                            //float: left;
                            width:300px;
                            height:180px;
                            margin-right: 20px;
                            background-color: lightblue;
                        }
                    }
                }
            }

            .contact{
                .progress-bar {
                    color: $color-red;

                    .title {
                        padding-left:30px;

                        .icon {
                            position:absolute;
                            left:8px;
                            top:3px;
                            //color: $color-black;
                        }
                        .icon2 {
                            position:absolute;
                            top:3px;
                            left:6px;
                        }
                    }

                    span.number, a{
                        color: $color-red;
                        right:0px;
                    }
                }
            }
        }

        .copyright {
            position: fixed;
            bottom: 20px;
            left:20px;
            z-index:2;
            font-size: .7rem;
            color: $color-white;

            a {
                color: $color-white;
            }
        }
    }

    @media only screen and (max-width: 730px) {

        .container {
            width:100%;
            height:100%;

            .left-display,  {
                position:relative;
                width: 100%;
                height: 180px;
                .logo, .intro, .social {
                    position:relative;
                    width: 100%;
                }

                .logo {
                    margin-left: 50px;
                }

                .nav {
                    position: fixed;
                    top:0;
                    left: 0;
                    height:100%;
                    background-color: #f4f4f4;
                    padding:0 10px;
                    box-shadow: 0 0 5px  rgba(124, 100, 243, 0.4);

                    a:hover{
                        background-color: $color-white;
                        color:$color-blue;
                        transform: scale(1.2);
                        box-shadow: 0px 3px 6px rgba(124, 100, 243, 0.4);
                        z-index:99;

                        span{
                            display:block;
                            opacity: 1;
                            width:90px;
                            position:absolute;
                            top: 0;
                            left:35px;
                            padding:9px 10px;
                            font-size:.8rem;
                            color:$color-white;
                            background-color: $color-gray;
                        }

                        span::after{
                            width: 0;
                            height: 0;
                            position:absolute;
                            top:5px;
                            left:-5px;
                            content: "";
                            transform: rotate(180deg);
                        }
                    }
                }

                .intro {
                    width:75%;
                    top:20px;
                    padding-left:50px;
                    z-index:2;
                    h1{
                        font-size:1.3rem;
                        color:$color-white;
                        line-height: 24px;
                        padding: 0;
                        margin: 0;
                    }

                    .intro-text{
                        font-family: $font-default;
                        font-size:1rem;
                        line-height: 20px;
                        color:$color-white;
                        margin:10px 0 30px 0;
                    }

                    a {
                        display: none;
                    }
                }

                .social {
                    position: fixed;
                    width:30px;
                    bottom:0px;
                    left:0px;
                    z-index:3;
                    padding: 0 10px;
                }
            }

            .left-display:after {
                position: absolute;
                width:100%;
                height:180px;
                background:linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
            }

            .right-display {
                position:relative;
                width: 75%;
                margin-left:60px;
                padding:20px;

                .whaticando {
                    li {
                        width:85%;
                        padding:20px;
                        display: inline-block;
                        text-align: center;
                    }
                }
            }

            .copyright {
                display: none;
                position: fixed;
                bottom:0;
                left:0px;
                width:100%;
                z-index:1;
                text-align: center;
                padding:10px 0;
                color:$color-red;
                background-color:rgba(255,255,255, 0.4);

                a{
                    color:$color-red;
                }
            }
        }
    }
</style>
