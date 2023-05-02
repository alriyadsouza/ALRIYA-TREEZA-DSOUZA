<script>
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.classList.remove(currentTheme);
    document.documentElement.classList.add(nextTheme);
    localStorage.setItem("theme", nextTheme);
  }
</script>

<header class="flex w-full h-16 sm:h-20 justify-between items-center sm:py-4 p-4 lg:px-32 sm:px-10 fixed
          text-blue-950 dark:text-teal-200 dark:bg-blue-950 bg-teal-200">
    <a href="/" class=" mr-auto font-semibold text-xl" >🍪&nbsp;Alriya</a>

    <!-- This is for mobiles -->
    <button on:click={toggleTheme} class="sm:hidden mx-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    </button>

    <button class="sm:hidden" on:click={toggleMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>

    <!-- PC Menu -->
    <nav>
      <ul class="hidden sm:list-none sm:flex sm:gap-4">
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="https://github.com/alriyadsouza">GitHub</a></li>
        <button on:click={toggleTheme}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
        </button>
      </ul>
    </nav>

    <!-- Modile menu -->
    {#if isMenuOpen}
      <nav class="fixed top-0 left-0 w-full h-full bg-teal-200 dark:bg-blue-950 z-50">
        <div class="flex flex-col justify-center items-center h-full">
          <ul class="list-none font-medium text-4xl">
            <li><button on:click={toggleMenu} class="text-sm">Close</button></li>
            <li><a href="/about" on:click={toggleMenu}>About</a></li>
            <li><a href="/projects" on:click={toggleMenu}>Projects</a></li>
            <li><a href="https://github.com/alriyadsouza" on:click={toggleMenu}>GitHub</a></li>
          </ul>
        </div>
      </nav>
    {/if}
</header>
