<script>
  import { writable } from 'svelte/store'

  export const isNavBarOn = writable(false)

  // Toggle function to update the state
  export const toggleNavBar = () => {
    isNavBarOn.update((value) => !value)
    console.log('NavBar State:', $isNavBarOn) // Logs current state
  }
</script>

<div class="flex align-bottom px-4 whitespace-nowrap relative">
  <div
    class=" mt-8 w-full justify-center [&_img]:h-[1rem] text-[1rem] gap-8 mx-12 hidden md:flex"
  >
    <!-- mail header -->
    <a href="/">
      <div class="flex items-center justify-center gap-2">
        <img src="/mail.svg" alt="ok" />
        <span> contact@saurabhvishwakarma.in </span>
      </div>
    </a>

    <!-- resume nav -->
    <a href="/" class="ml-auto">
      <div class="flex items-center justify-center gap-2">
        <img src="/profile.svg" alt="ok" />
        <span> Resume </span>
      </div>
    </a>

    <!-- work exp nav -->
    <a href="/">
      <div class="flex items-center justify-center gap-2">
        <img src="/work.svg" alt="ok" />
        <span> Work Experience </span>
      </div>
    </a>

    <!-- shelf nav -->
    <a href="/">
      <div class="flex items-center justify-center gap-2">
        <img src="/shelf.svg" alt="ok" />
        <span> Shelf </span>
      </div>
    </a>

    <!-- Button to toggle the drawer -->
  </div>
  <div class="flex items-center absolute right-0">
    <button
      on:click={toggleNavBar}
      aria-label="Toggle navigation menu"
      class="block md:hidden left-0 z-10 p-4 top-0"
    >
      <i
        class={`ri-menu-5-line text-4xl ${$isNavBarOn ? 'text-white' : 'text-black'}`}
      ></i>
    </button>
    <!-- Drawer content that toggles visibility based on the store state -->
    <div
      class={`nav-bar bg-[#000] text-white overflow-hidden absolute h-[100vh] right-0 top-0 transition-width duration-300  pt-16 ${$isNavBarOn ? 'w-48' : 'w-0'}`}
    >
      <ul
        class="[&_li]:py-2 [&>*:hover]:bg-gray-500 [&>*:hover]:cursor-pointer flex flex-col"
      >
        <li>
          <a href="/" class="ml-4 flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.33333 13C1.33333 12.1159 1.68452 11.2681 2.30964 10.643C2.93476 10.0178 3.78261 9.66666 4.66667 9.66666H11.3333C12.2174 9.66666 13.0652 10.0178 13.6904 10.643C14.3155 11.2681 14.6667 12.1159 14.6667 13C14.6667 13.442 14.4911 13.8659 14.1785 14.1785C13.866 14.4911 13.442 14.6667 13 14.6667H3C2.55797 14.6667 2.13405 14.4911 1.82149 14.1785C1.50893 13.8659 1.33333 13.442 1.33333 13Z"
                stroke="#fff"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M8 6.33333C9.38071 6.33333 10.5 5.21404 10.5 3.83333C10.5 2.45262 9.38071 1.33333 8 1.33333C6.61929 1.33333 5.5 2.45262 5.5 3.83333C5.5 5.21404 6.61929 6.33333 8 6.33333Z"
                stroke="#fff"
                stroke-width="2"
              />
            </svg>
            Resume
          </a>
        </li>
        <li>
          <a href="/" class="ml-4 flex items-center gap-2">
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 19C1.45 19 0.979333 18.8043 0.588 18.413C0.196667 18.0217 0.000666667 17.5507 0 17V6C0 5.45 0.196 4.97933 0.588 4.588C0.98 4.19667 1.45067 4.00067 2 4H6V2C6 1.45 6.196 0.979333 6.588 0.588C6.98 0.196667 7.45067 0.000666667 8 0H12C12.55 0 13.021 0.196 13.413 0.588C13.805 0.98 14.0007 1.45067 14 2V4H18C18.55 4 19.021 4.196 19.413 4.588C19.805 4.98 20.0007 5.45067 20 6V17C20 17.55 19.8043 18.021 19.413 18.413C19.0217 18.805 18.5507 19.0007 18 19H2ZM2 17H18V6H2V17ZM8 4H12V2H8V4Z"
                fill="#fff"
              />
            </svg>Work Experience
          </a>
        </li>
        <li>
          <a href="/" class="ml-4 flex items-center gap-2">
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 1H3C1.89543 1 1 1.89543 1 3V11C1 12.1046 1.89543 13 3 13H15C16.1046 13 17 12.1046 17 11V3C17 1.89543 16.1046 1 15 1Z"
                stroke="#fff"
                stroke-width="2"
              />
              <path
                d="M1 4L8.106 7.553C8.3836 7.69172 8.68967 7.76393 9 7.76393C9.31033 7.76393 9.6164 7.69172 9.894 7.553L17 4"
                stroke="#fff"
                stroke-width="2"
              />
            </svg>Mail
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
