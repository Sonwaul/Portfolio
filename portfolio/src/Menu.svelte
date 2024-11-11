<script>
  let sections = ["Moi", "Formation", "Expérience", "Projets"];
</script>

<nav style="position: fixed; left: 0; top: 0; height: 100vh; background: #1a1a2e; width: 200px; color: white;">
  <h1 style="font-family: 'Dancing Script', cursive; text-align: center; margin: 1rem 0;">
    Infelta Elliot Portfolio
  </h1>
  <ul style="list-style: none; padding: 0;">
    {#each sections as section}
      <li>
        <a href="#{section}" style="display: block; padding: 1rem; color: #fff; text-decoration: none;" on:click={() => activeSection = section}>
          {section}
        </a>
      </li>
    {/each}
  </ul>
</nav>