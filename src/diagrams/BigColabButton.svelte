<style>
.colab-reproduction-first {
  font-size: 9.5pt;
}

.colab-first-select {
  padding: 8px;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 4px;
  border: solid 1px rgba(0, 0, 0, 0.08);
  border-bottom-color: rgba(0, 0, 0, 0.15);
  display: inline-block;
  color: #aaa;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 9.5pt;
}

.colab-first-option {
  color: #aaa;
  font-weight: 300;
  text-transform: uppercase;
}

</style>

<script>
const notebooks = {
  lucid: {
    slug: "lucid",
    url: "https://colab.research.google.com/drive/19cmX6U70zovssqIbAJaWFUEWNu4AIZBF?usp=sharing",
    title: "Tensorflow (Lucid)"
  },
  captum: {
    slug: "captum",
    url: "https://colab.research.google.com/drive/1Zv7w03hOHfBWaEDMpSR1MA4D6IpAwZln?usp=sharing",
    title: "PyTorch (Captum)"
  },
};

let selected = notebooks[0];
</script>
<div>
  <select bind:value={selected} class="colab-first-select">
    {#each Object.keys(notebooks) as slug}
      <option value={slug} class="colab-first-option">
        {notebooks[slug].title}
      </option>
    {/each}
  </select>
  <a href={notebooks[selected || "lucid"].url} class="colab-reproduction colab-reproduction-first" target="_blank">Follow along in a <img src="images/colab.svg" class="colab-reproduction-logo"/> notebook &rarr;</a>
</div>
