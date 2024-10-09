import moment from "moment";
import Link from "next/link";

type FooterProps = {
  company: string;
  links: [];
};
export default function Footer({ company, links = [] }: FooterProps) {
  return (
    <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
      <div className="container max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Link href="#" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only"> {company}</span>
          </Link>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            &copy; {moment().format("YYYY")} {company} All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={false}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
