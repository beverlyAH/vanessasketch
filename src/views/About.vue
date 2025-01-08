<template>
  <div class="hero bg-base-200 min-h-max fullscreen">
    <div class="w-fit hero-content flex-col lg:flex-row">
      <div>
        <p class="py-6">
          Vanessa Cohen is a game artist, currently open for work! She
          specializes in concept art, character design, prop design, and
          illustration. She is also a self-published comic creator and
          independent film screenwriter. She has worked for game company
          Kongregate, on SpongeBob's Idle Adventures for Nickelodeon, and
          un-announced license IP games, as well as commissioned work for
          multiple games within the TTRPG space. Her software expertise includes
          Clip Studio Paint, Adobe Photoshop, Procreate, and working knowledge
          of 3D modeling within Blender.
        </p>
        <button class="btn btn-primary">
          <a target="_blank" href="resume_for_vcohen_2024.pdf">Resume</a>
        </button>
      </div>
      <img
        src="../assets/vanessasketch_artist_portrait.jpg"
        class="rounded-lg shadow-2xl w-5/12 mobile"
      />
    </div>
  </div>
</template>

<script>
</script>


<style scoped>
.fullscreen {
  @media screen and (max-width: 768px) {
    margin-top: 8vh;
    overflow-wrap: break-word;
  }
}
.mobile {
  @media screen and (min-width: 768px) {
    max-width: 80vw;
  }
}
.mobile img {
  @media screen and (min-width: 768px) {
    width: 100%;
  }
}
</style>