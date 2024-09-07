"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  DropdownMenuCheckboxItem,
  DropdownMenuCheckboxItemProps,
} from "@radix-ui/react-dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function DropdownMenuContents() {
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false);
  const [showPanel, setShowPanel] = useState<Checked>(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-[100%] flex" asChild>
        <div>
          <p
            className="font-roboto   text-xs  font-medium text-dark-D100"
            variant="ghost"
          >
            Open
          </p>
          <IoMdArrowDropdown className="text-dark-D100" />
        </div>
      </DropdownMenuTrigger>
      {/* <DropdownMenuContent className=" w-12 bg-white-w100">
        <DropdownMenuLabel> Top </DropdownMenuLabel>
        <DropdownMenuLabel> Recent </DropdownMenuLabel>
      </DropdownMenuContent> */}
      <DropdownMenuContent className=" w-12 bg-white-w100">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
