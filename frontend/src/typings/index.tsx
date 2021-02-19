export interface EmployeeProps {
    name: string,
    position: string,
    onClick?: any
}

export interface EditorProps {
    showEditor: boolean,
    setShowEditor: any,
    employee: any,
    triggered: any,
    setTriggered: any
}

export interface NewEmployeeProps {
    onClick?: any
}

export interface MenuGroupItemProps {
    selectedGroup: any,
    setSelectedGroup: any,
    menuGroup: any
}

export interface MenuGroupItemEditingProps {
    group: any,
    setEditing: Function
}

export interface MenuGroupContextMenuProps {
    setEditing: any
}

export interface AddNewMenuGroupProps {
    setAddNewMenuGroup: Function
}

export interface ProductItemProps {
    selectedGroup: any,
    product: any
}

export interface ProductContextMenuProps {
    setEditing: any
}

export interface ProductItemEditingProps {
    group: any,
    product: any,
    setEditing: any
}

export interface NewProductButtonProps {
    setAddNewProduct: Function
}

export interface NewProductFieldsProps {
    id: string,
    setAddNewProduct: Function
}

export interface GroupProductsProps {
    selectedGroup: any,
    cart: any
    setCart: any
}

export interface MenuGroupsProps {
    menu: any,
    selectedGroup: any,
    setSelectedGroup: any
}

export interface ShoppingCartProps {
    cart: any,
    setCart: any
}

export interface HeaderProps {
    type: string
}
