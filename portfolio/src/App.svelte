<script>
    import Menu from './Menu.svelte';
  </script>
  
  <Menu />
  
  <section id="Moi" style="display: flex; align-items: center; justify-content: space-around; min-height: 100vh; background: linear-gradient(145deg, #0f0c29, #302b63, #24243e); color: white;">
    <div>
      <h2>Moi</h2>
      <p>Bienvenue sur mon portfolio ! Je suis Elliot Infelta, développeur passionné par...</p>
    </div>
    <img src="chemin/vers/ton_image.jpg" alt="Photo d'Elliot" style="width: 300px; height: auto; transform: rotate(-5deg); transition: transform 0.3s ease;">
  </section>
  
  <style>
    img:hover {
        transform: rotate(-5deg) scale(1.1);
    }
  </style>  