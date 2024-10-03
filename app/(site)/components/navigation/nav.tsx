import Link from "next/link";
import Button from "../Button";

type HeaderProps = {
  name?: string;
  ctas?: any;
  links?: any;
};

export default function Component({
  name = "Acme Inc",
  ctas,
  links,
}: HeaderProps) {
  return (
    <div className="relative z-30 flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center">
        {/* Logo/Site Name/Etc */}
        <Link
          href="#"
          className="text-2xl font-bold text-gray-900 dark:text-gray-400"
          prefetch={false}
        >
          {name}
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        {links?.map((link, key) => (
          <Button
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            {...link}
            key={key}
          />
        ))}
      </div>
      {ctas?.map((cta, key) => (
        <Button
          className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          {...cta}
          key={key}
        />
      ))}
    </div>
  );
}
