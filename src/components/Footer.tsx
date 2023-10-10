import { SlSocialInstagram } from "react-icons/sl/index";

export const Footer = () => (
  <footer className="mt-20 p-7 bg-neutral-50 border dark:border-neutral-900 dark:bg-neutral-950">
    <div className="flex flex-col gap-5 md:flex-row md:gap-0 w-full">
      <div className="flex flex-col gap-1 w-full">
        <p className="text-lg font-bold">Connect w/ HINODE</p>

        <ul>
          <li>
            <a
              target="_blank"
              className="flex flex-row gap-2 items-center"
              rel="nopener norefferer"
              href="https://instagram.com/hinode.12"
            >
              <SlSocialInstagram />
              @hinode.12
            </a>
          </li>
        </ul>
      </div>
      <div className="flex md:justify-end md:items-center w-full">
        <p className="text-center">
          Designed by{" "}
          <a
            className="font-bold text-stone-900 dark:text-stone-50"
            href="https://rmecha.my.id/"
            target="_blank"
            rel="nopener norefferer"
          >
            rmecha
          </a>{" "}
          &{" "}
          <span className="font-bold text-stone-900 dark:text-stone-50">
            HINODE
          </span>
        </p>
      </div>
    </div>
  </footer>
);
