<script>
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

<div class="w-screen flex justify-center">
  <header class="flex w-[85%] h-16 justify-between items-center py-4 px-6 fixed
              text-gray-950 dark:text-neutral-50 bg-white/[0.15] m-4
              shadow-sm border border-white dark:border-black rounded-full">
      <a href="/" class=" mr-auto font-bold text-xl" >🍪&nbsp;Alriya</a>
      <nav>
        <ul class="list-none flex gap-4">
          <li><a href="/about">About</a></li>
          <li><a href="/showcase">Projects</a></li>
          <li><a href="https://github.com/alriyadsouza">GitHub</a></li>
          <button on:click={toggleTheme}>Toggle Theme</button>
        </ul>
      </nav>
  </header>
</div>
