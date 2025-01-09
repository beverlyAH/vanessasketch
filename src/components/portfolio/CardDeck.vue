<template>
  <div class="portfolio-listing bg-base-100">
    <portfolio-card
      categoryName="Personal"
      imagePath="/portfolio_icons/Site_PersonalProject_Icon-768x768.png"
      description="Art for personal projects."
      routePath="/personal"
    ></portfolio-card>
    <portfolio-card
      categoryName="Spongebob's Idle Adventures"
      imagePath="/portfolio_icons/Site_SpongeBob_Icon-768x768.png"
      description="Art and assets for Kongregate's Spongebob's Idle Adventures."
      routePath="/spongebob"
    ></portfolio-card>
    <portfolio-card
      categoryName="Environmental Art"
      imagePath="/portfolio_icons/Site_EnviArt_Icon-768x768.png"
      description="Art meant to evoke a sense of place or mood."
      routePath="/environment"
    ></portfolio-card>
    <portfolio-card
      categoryName="Protected"
      imagePath="/portfolio_icons/Site_Restricted_Icon-768x768.png"
      description="If you are a potential employer, please use the provided password."
      routePath="/hops?protected=true"
    ></portfolio-card>
  </div>
</template>

<script setup>
import PortfolioCard from "./PortfolioCard.vue";
</script>

<style scoped>
.portfolio-listing {
  margin-top: 12vh;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 10px;

  @media screen and (max-width: 768px) {
    margin-top: 13vh;
    flex-direction: column;
    align-items: center;
  }
}
</style>