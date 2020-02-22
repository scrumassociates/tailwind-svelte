<script>
  let isOpen = false;
</script>

<header class="bg-gray-900">
  <div class="flex items-center justify-between px-4 py-3">
    <div>
      <img class="h-8" src="/img/logo-inverted.svg" alt="Workcation logo" />
    </div>
    <div>
      <button
        on:click={() => (isOpen = !isOpen)}
        type="button"
        class="block text-gray-500 hover:text-white focus:text-white
        focus:outline-none border-none">
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
          {#if isOpen}
            <path
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1
              1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1
              1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828
              4.829 4.828 4.828z" />
          {:else}
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1
              1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          {/if}
        </svg>
      </button>
    </div>
  </div>
  <div class="px-2 pt-2 pb-4 {isOpen ? 'block' : 'hidden'}">
    <a
      href="#"
      class="block px-2 py-1 text-white font-semibold rounded hover:no-underline
      hover:bg-gray-800">
      List your property
    </a>
    <a
      href="#"
      class="mt-1 block px-2 py-1 text-white font-semibold rounded
      hover:no-underline hover:bg-gray-800">
      Trips
    </a>
    <a
      href="#"
      class="mt-1 block px-2 py-1 text-white font-semibold rounded
      hover:no-underline hover:bg-gray-800">
      Messages
    </a>
  </div>
</header>
