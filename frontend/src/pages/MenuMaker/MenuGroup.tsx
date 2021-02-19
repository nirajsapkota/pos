import React, { FC, useState } from "react"

import { ReactComponent as AddIcon } from "_icons/add.svg"
import { ReactComponent as DeleteIcon } from "_icons/delete.svg"
import { ReactComponent as EditIcon } from "_icons/edit.svg"

import {
    ContextMenu,
    MenuItem,
    ContextMenuTrigger
} from "react-contextmenu"

import {
    CreateMenuGroup,
    RenameMenuGroup,
    DeleteMenuGroup
} from "./Requests"

import {
    MenuGroupItemProps,
    MenuGroupItemEditingProps,
    MenuGroupContextMenuProps,
    AddNewMenuGroupProps
} from "../../typings"

const MenuGroupItem: FC<MenuGroupItemProps> = ({ selectedGroup, setSelectedGroup, menuGroup }) => {
    let classes = "text-white duration-300 my-2 py-4 px-8 rounded-xl focus:outline-none flex items-center hover:shadow-2xl w-full"
    if (selectedGroup === menuGroup) classes += " bg-custom-contrast"
    else classes += " hover:bg-custom-background"

    return (
        <ContextMenuTrigger key={menuGroup._id} id="MenuGroupContextMenu" collect={props => menuGroup}>
            <button
                className={classes}
                onClick={() => setSelectedGroup(menuGroup)}>
                {menuGroup.name}
            </button>
        </ContextMenuTrigger>
    )
}

const MenuGroupItemEditing: FC<MenuGroupItemEditingProps> = ({ group, setEditing }) => {
    const [name, setName] = useState(group.name)

    return (
        <input
            className="w-full rounded-xl outline-none h-12 py-4 px-8"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Menu Group Name"
            autoFocus={true}
            onKeyDown={(e) => {
                if (e.keyCode === 13) {
                    RenameMenuGroup(group._id, name)
                    setEditing(false)
                }
            }}
            onBlur={(e) => {
                RenameMenuGroup(group._id, name)
                setEditing(false)
            }}
        />
    )
}

const MenuGroupContextMenu: FC<MenuGroupContextMenuProps> = ({ setEditing }) => {
    return (
        <ContextMenu
            id="MenuGroupContextMenu"
            className="bg-custom-background rounded-md">
            <MenuItem
                onClick={(event, props: any) => DeleteMenuGroup(props._id)}
                className="flex focus:outline-none py-3 pl-4 pr-12 cursor-pointer hover:bg-custom-contrast rounded-t-md">
                <DeleteIcon width={24} height={24} className="mr-5" />
                <div className="text-white">Delete</div>
            </MenuItem>
            <MenuItem
                onClick={(event, props: any) => setEditing(props._id)}
                className="flex focus:outline-none py-3 pl-4 pr-12 cursor-pointer hover:bg-custom-contrast rounded-b-md">
                <EditIcon width={24} height={24} className="mr-5" />
                <div className="text-white">Rename</div>
            </MenuItem>
        </ContextMenu>
    )
}

const AddNewMenuGroupButton: FC<AddNewMenuGroupProps> = ({ setAddNewMenuGroup }) => {
    return (
        <button
            className="text-white hover:bg-custom-background duration-300 my-2 py-4 px-8 rounded-xl focus:outline-none flex items-center hover:shadow-2xl w-full"
            onClick={() => setAddNewMenuGroup(true)}>
            <AddIcon width={16} height={16} fill="white" className="mr-4" />
    Add a New Menu Group
        </button>
    )
}

const AddNewMenuGroupFields: FC<AddNewMenuGroupProps> = ({ setAddNewMenuGroup }) => {
    return (
        <input
            className="w-full rounded-xl outline-none h-12 py-4 px-8"
            placeholder="Menu Group Name"
            autoFocus={true}
            onKeyDown={(e) => {
                if (e.keyCode === 13) {
                    CreateMenuGroup(e.currentTarget.value)
                    setAddNewMenuGroup(false)
                }
            }}
            onBlur={(e) => {
                CreateMenuGroup(e.currentTarget.value)
                setAddNewMenuGroup(false)
            }}
        />
    )
}

export {
    MenuGroupItem,
    MenuGroupItemEditing,
    MenuGroupContextMenu,
    AddNewMenuGroupButton,
    AddNewMenuGroupFields
}