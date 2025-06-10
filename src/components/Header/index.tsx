import Logo from "@/assets/icons/logo.jpeg";
import { useRouter } from "next/router";
import Link from "next/link";
import cs from "classnames";
import { signOut, useSession } from "next-auth/react";
import Button from "../shared/Button";


export function Header() {
    const { data: session, status } = useSession();

    const router = useRouter();
    const items = [
        {
            name: "Home",
            pathName: "/",
        },
        {
            name: "About",
            pathName: "/about",
        },
        {
            name: "Contact Us",
            pathName: "/contact",
        },
        {
            name: "Blogs",
            pathName: "/blogs",
        },

        {
            name: "News",
            pathName: "/news",
        }
    ];
    return (
      <div className="py-2 fixed z-50 bg-white border-b w-full transition-all duration-300">
        <div className="container m-auto flex items-center">
          <Link href="/">
            <picture>
              <img className="h-10" src={Logo.src} alt="Logo" />
            </picture>
          </Link>
          <div className="flex-1 flex gap-10 items-center justify-center">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.pathName}
                className={cs(
                  "text-black",
                  router.pathname === item.pathName
                    ? "underline font-semibold"
                    : ""
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex gap-5">
            {status == "authenticated" ? (
              <Button
                onClick={() => signOut({ callbackUrl: "/sign-in" })}
                text="Dil"
              />
            ) : (
              <>
                <Button
                  onClick={() => router.push("/sign-up")}
                  text="Regjistrohu"
                />
                <Button
                  onClick={() => router.push("/sign-in")}
                  variant="secondary"
                  text="Kyçu"
                />
              </>
            )}
          </div>
        </div>
      </div>
    );
}

export default Header;