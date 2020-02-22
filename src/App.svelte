<script>
  import Splash from "./components/Splash.svelte";
  import DestinationCard from "./components/DestinationCard.svelte";
  import PropertyCard from "./components/PropertyCard.svelte";
  import popularDestinations from "./data.js";
  import property from "./propertyData.js";
  import Navbar from "./components/Navbar.svelte";
</script>

<Navbar />
<div id="app" class="antialiased text-gray-900">
  <div class="bg-gray-200 min-h-screen p-8 flex items-center justify-center">
    <PropertyCard {property} />
  </div>
</div>

<!-- <Splash />
<div class="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py8">
  <h2 class="text-xl text-gray-900">Popular destinations</h2>
  <p class="text-gray-600">
    A selection of great work-friendly cities with lots to see and explore.
  </p>
  <div class="flex flex-wrap -mx-4">
    {#each popularDestinations as destination}
      <DestinationCard {destination} />
    {/each}
  </div>
</div> -->
