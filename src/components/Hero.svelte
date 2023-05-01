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
  <div class="flex">
    <img src={Rocket} class="w-[300px]" alt="Profile" />
    <div class="flex flex-col justify-center pr-12 text-blue-950 dark:text-teal-200">
      <h1 class="text-5xl font-bold" >{props.heading}</h1>
      <p class="text-xl">{props.text}</p>
      <div class="flex justify-start items-center gap-6 p-2 mt-6">
        {#each icons as icon}
          <a href="{icon.link}" class="link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-blue-950 dark:fill-teal-200 w-8">
              <path d={icon.path}></path>
            </svg>
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>
