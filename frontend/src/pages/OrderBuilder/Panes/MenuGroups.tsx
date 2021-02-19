import React, { FC } from "react"

import { ReactComponent as ChevronBackIcon } from "_icons/chevron-back.svg"
import { MenuGroupsProps } from "../../../typings"

const MenuGroups: FC<MenuGroupsProps> = ({ menu, selectedGroup, setSelectedGroup }) => {
    return (
        <div className="w-1/6 h-full bg-custom-background">
            <button className="flex items-center text-white font-bold w-full h-16 text-left pl-16 hover:shadow-2xl mb-12 focus:outline-none">
                <ChevronBackIcon width={24} height={24} fill="white" />
                Back
            </button>
            {menu.map((group: any) => {
                let classes = "text-white w-full h-16 rounded-md hover:shadow-2xl focus:outline-none my-1 duration-300"
                if (group === selectedGroup) classes += " bg-custom-contrast" // highlight button for currently selected
                else classes += " hover:bg-custom-contrast" // highligh other buttons on hover
                
                return (
                    <button
                        key={group._id}
                        onClick={() => setSelectedGroup(group)}
                        className={classes}
                    >
                        {group.name}
                    </button>
                )
            })}
        </div>
    )
}

export default MenuGroups