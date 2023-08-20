"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Link from "next/link";

export default function BooksLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-500 ">
      {/* <div className="flex mb-2 p-2 bg-red-400"> */}
      <div className="">
        <NavigationMenu className=" bg-violet-400 min-w-full p-1 justify-between">
          <NavigationMenuList className="gap-x-1">
            <NavigationMenuItem className="">
              <Link href={"/dashboard"}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Topics</NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col gap-1">
                <NavigationMenuLink>Littérature</NavigationMenuLink>
                <NavigationMenuLink>Littérature</NavigationMenuLink>
                <NavigationMenuLink>Littérature</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href={"/dashboard"}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Livres
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>

          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href={"/dashboard"}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Livres
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem className="">
              {/* <Link href={"/dashboard"}> */}
                {/* <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Livres
                </NavigationMenuLink>  */}
                <div>
                  <Popover>
                    <PopoverTrigger>
                      <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    </PopoverTrigger>
                    <PopoverContent>Place content for the popover here.</PopoverContent>
                  </Popover>
                </div>
                
              {/* </Link> */}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex">
        {/* <div className="flex flex-col justify-center  bg-blue-300"> */}
        {/* Sidebarrrrrrrrrr */}
        <section className="flex h-screen items-start mr-5 bg-red-400 p-2">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col gap-3 bg-blue-400 items-start">
              <NavigationMenuItem className="bg-lime-200 ms-1 p-1">
                <Link href={"/dashboard"}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Livres
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem className="bg-yellow-200 p-1">
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="bg-lime-200 p-1">
                <Link href={"/dashboard"}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Livres
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem className="bg-yellow-200 p-1">
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </section>
        {/* </div> */}
        {children}
      </div>
    </div>
  );
}

/*
    <section className="flex">
      <section className="flex h-screen items-start mr-5 bg-red-400 p-2" >
        <NavigationMenu >
          <NavigationMenuList className="flex flex-col gap-3 bg-blue-400 items-start">
            <NavigationMenuItem className="bg-lime-200 ms-1 p-1">
              <Link href={"/dashboard"}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Livres
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem className="bg-yellow-200 p-1">
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

			<NavigationMenuItem className="bg-lime-200 p-1">
              <Link href={"/dashboard"}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Livres
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

			<NavigationMenuItem className="bg-yellow-200 p-1">
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </section>

      {children}
    </section>
*/
