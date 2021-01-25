<style>
.colab-reproduction-inline {
  line-height: 100%;
  font-size: 8pt;
}

.colab-inline-select {
  padding-top: 1px;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 4px;
  border: solid 1px rgba(0, 0, 0, 0.08);
  border-bottom-color: rgba(0, 0, 0, 0.15);
  display: inline-block;
  color: #aaa;
  font-weight: 300;
  text-transform: uppercase;
  line-height: 100%;
  font-size: 8pt;
}
</style>

<script>
const notebooks = {
  lucid: {
    slug: "lucid",
    url: "https://colab.research.google.com/drive/13UZ02rmNirhQ2WI6QSFH8MphZHeyPdA_?usp=sharing",
    title: "Tensorflow (Lucid)"
  },
  captum: {
    slug: "captum",
    url: "https://colab.research.google.com/drive/10z-A4OUsSuKHwRw6Cayhss7Dtp5h1Q-7?usp=sharing",
    title: "PyTorch (Captum)"
  },
};

let selected = notebooks[0];
</script>
<div>
  <select bind:value={selected} class="colab-inline-select">
    {#each Object.keys(notebooks) as slug}
      <option value={slug} class="colab-inline-option">
        {notebooks[slug].title}
      </option>
    {/each}
  </select>
  <a href={notebooks[selected || "lucid"].url} class="colab-reproduction colab-reproduction-inline" target="_blank">Reproduce in a <img src="images/colab.svg" class="colab-reproduction-logo"/> notebook</a>
</div>
