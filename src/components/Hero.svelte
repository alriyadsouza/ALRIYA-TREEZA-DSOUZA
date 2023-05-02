<script context="module" lang="ts">
  export interface HeroProps {
    heading?: string;
    text?: string;
  }

  import Rocket from '../images/alriya-white-cirl.png'
  import { icons } from '../data/IconsData'

  export let props: HeroProps = {
    heading: "ALRIYA TREEZA D SOUZA",
    text: "Computer Science Student | Web Developer",
  };
</script>

<section class="bg-teal-200 grid w-screen h-screen place-content-center dark:bg-blue-950">
  <div class="flex flex-col items-center lg:flex-row">
    <img src={Rocket} class=" w-[200px] md:w-[250px] lg:w-[300px]" alt="Profile" />
    <div class="flex flex-col justify-center lg:pr-12 text-blue-950 dark:text-teal-200
                items-center lg:items-start">
      <h1 class="text-2xl md:text-3xl lg:text-5xl font-bold my-0 md:my-2 lg:my-0" >{props.heading}</h1>
      <p class="text-sm md:text-lg lg:text-xl">{props.text}</p>
      <div class="flex justify-start items-center gap-6 m-2 lg:mt-6 w-fit icons">
        {#each icons as icon}
        <a href="{icon.link}" class="link" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-blue-950 dark:fill-teal-200 w-6 lg:w-8">
              <path d={icon.path}></path>
            </svg>
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .link svg {
    opacity: 1;
    transition: 100ms;
  }

  .icons:hover svg:not(:hover) {
    opacity: 0.3;
  } 
</style>