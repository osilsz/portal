"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoMdArrowDropdown } from "react-icons/io";

export function DropdownMenuContents() {
  const [position, setPosition] = React.useState("Recent");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-[100%] flex" asChild>
        <div>
          <p className="font-roboto   text-xs  font-medium text-dark-D100">
            {position}
          </p>
          <IoMdArrowDropdown className="text-dark-D100   ml-2" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-14 bg-white-w100">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem
            className="font-roboto   text-xs  font-medium text-dark-D100"
            value="Top"
          >
            Top
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="font-roboto   text-xs  font-medium text-dark-D100"
            value="Recent"
          >
            Recent
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
