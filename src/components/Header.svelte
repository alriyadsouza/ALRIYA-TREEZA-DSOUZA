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

<header class="flex w-full h-20 justify-between items-center py-4 px-32 fixed
          text-blue-950 dark:text-teal-200  dark:bg-blue-950 bg-teal-200">
    <a href="/" class=" mr-auto font-semibold text-xl" >🍪&nbsp;Alriya</a>
    <nav>
      <ul class="list-none flex gap-4">
        <li><a href="/about">About</a></li>
        <li><a href="/showcase">Projects</a></li>
        <li><a href="https://github.com/alriyadsouza">GitHub</a></li>
        <button on:click={toggleTheme}>Toggle Theme</button>
      </ul>
    </nav>
</header>
