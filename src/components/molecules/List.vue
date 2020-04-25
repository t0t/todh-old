<template>
  <section>
    <ul>
      <item-list> 
        <navigation-link url="#">{{ texto1 }}</navigation-link>
      </item-list>
      <item-list> 
        <navigation-link url="#">{{ texto2 }}</navigation-link>
      </item-list>
      <item-list> 
        <navigation-link url="#">{{ texto3 }}</navigation-link>
      </item-list>
      <item-list> 
        <navigation-link url="#">{{ texto4 }}</navigation-link>
      </item-list>
      <item-list> 
        Item de lista sin enlace
      </item-list>
    </ul>
  </section>
</template>

<script>
import NavigationLink from "@/components/atoms/NavigationLink.vue";
import ItemList from "@/components/molecules/ItemList.vue";

export default {
  name: "List",
  props: {
    texto1: String,
    texto2: String,
    texto3: String,
    texto4: String,
    texto5: String,
    texto6: String,
  },
  components: {
    NavigationLink,
    ItemList,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/main.scss";

.List {
  @include media(s2) {
    padding-top: $h4;
    padding-bottom: $h3;
  }
}
</style>
