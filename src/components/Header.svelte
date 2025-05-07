<script>
  import { onMount } from 'svelte'
  import { writable } from 'svelte/store'

  export const isNavBarOn = writable(false)

  // Toggle function to update the state
  export const toggleNavBar = () => {
    isNavBarOn.update((value) => !value)
  }
  onMount(() => {})
</script>

<header
  class=" flex align-bottom px-4 whitespace-nowrap top-0 sticky z-50 right-0 pb-4 bg-secondary"
>
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

    <!-- work exp nav -->
    <a href="#home" class="ml-auto">
      <div class="flex items-center justify-center gap-2">
        <img src="/Home.svg" alt="ok" />
        <span> Home </span>
      </div>
    </a>
    <!-- about nav -->
    <a href="#about">
      <div class="flex items-center justify-center gap-2">
        <img src="/about.svg" alt="ok" />
        <span> About </span>
      </div>
    </a>
    <!-- Home btn -->
    <a href="#projects">
      <div class="flex items-center justify-center gap-2">
        <img src="/work.svg" alt="ok" />
        <span> Projects </span>
      </div>
    </a>
    <!-- resume nav -->
    <a href="saurabh_resume.pdf">
      <div class="flex items-center justify-center gap-2">
        <img src="/profile.svg" alt="ok" />
        <span> Resume </span>
      </div>
    </a>

    <!-- Button to toggle the drawer -->
  </div>
  <div class=" flex items-center absolute right-0 z-10">
    <button
      onclick={toggleNavBar}
      aria-label="Toggle navigation menu"
      class="block md:hidden left-0 z-10 p-4 top-0"
    >
      <span
        class={` z-50 text-4xl ${$isNavBarOn ? 'text-white' : 'text-black'}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          ><path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 6h10M4 12h16M7 12h13M4 18h10"
          /></svg
        >
      </span>
    </button>

    <!-- drawer -->

    <div
      class={`nav-bar  bg-[#000] text-white overflow-hidden absolute h-[100vh] right-0 top-0 transition-width duration-300   pt-16 ${$isNavBarOn ? 'w-[48vw]' : 'w-0'}`}
    >
      <ul
        class="[&_li]:py-2 [&>*:hover]:bg-gray-500 [&>*:hover]:cursor-pointer flex flex-col items-left w-full"
      >
        <li>
          <a
            href="#home"
            onclick={toggleNavBar}
            class="ml-4 flex items-center gap-2"
          >
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
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onclick={toggleNavBar}
            class="ml-4 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 48 48"
              ><path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M5 6h34s4 2 4 7s-4 7-4 7H5s4-2 4-7s-4-7-4-7m38 22H9s-4 2-4 7s4 7 4 7h34s-4-2-4-7s4-7 4-7"
              /></svg
            >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onclick={toggleNavBar}
            class="ml-4 flex items-center gap-2"
          >
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
            </svg>Projects
          </a>
        </li>
        <li>
          <a
            href="https://resume.saurabhvishwakarma.in"
            onclick={toggleNavBar}
            class="ml-4 flex items-center gap-2"
          >
            <svg
              fill="#fff"
              version="1.1"
              height="18px"
              width="18px"
              class="font-bold"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 398 398"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              enable-background="new 0 0 398 398"
            >
              <g>
                <path
                  d="m374,81.475v-50.66c0-5.523-4.478-10-10-10h-354c-5.522,0-10,4.477-10,10v285.16c0,5.523 4.478,10 10,10h40v23.21c0,15.439 12.561,28 28,28h292c15.439,0 28-12.561 28-28v-240c0-14.081-10.449-25.762-24-27.71zm-354,224.5v-265.16h334v40.37h-96c-15.439,0-28,12.561-28,28 0,4.411-3.589,8-8,8h-144c-15.439,0-28,12.561-28,28v160.79h-30zm358,43.21c0,4.411-3.589,8-8,8h-292c-4.411,0-8-3.589-8-8v-204c0-4.411 3.589-8 8-8h144c15.439,0 28-12.561 28-28 0-4.411 3.589-8 8-8h112c4.411,0 8,3.589 8,8v240z"
                />
                <path
                  d="m198,167.185h-92c-5.522,0-10,4.477-10,10s4.478,10 10,10h92c5.522,0 10-4.477 10-10s-4.478-10-10-10z"
                />
                <path
                  d="m198,201.185h-92c-5.522,0-10,4.477-10,10s4.478,10 10,10h92c5.522,0 10-4.477 10-10s-4.478-10-10-10z"
                />
              </g>
            </svg>
            <span> Resume </span>
          </a>
        </li>
        <li>
          <a
            href="mailto:contact@saurabhvishwakarma.in"
            class="ml-4 flex items-center gap-2"
          >
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
</header>
