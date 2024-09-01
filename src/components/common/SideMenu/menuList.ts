interface MenuProps {
  label: string;
  link: string;
  subMenu: SubMenuProps[];
  isOpen?: boolean;
  icon: string;
}

interface SubMenuProps {
  label: string;
  link: string;
}

export const menu: MenuProps[] = [
  {
    label: 'Home',
    link: '',
    icon: '',
    subMenu: [] 
  },{
    label: 'Orders',
    link: '',
    icon: '',
    subMenu: [] 
  },{
    label: 'Products',
    link: '',
    icon: '',
    subMenu: [] 
  },{
    label: 'Users',
    link: '/',
    icon: '',
    subMenu: [
      {
        label: 'Segments',
        link: ''
      }, {
        label: 'Other',
        link: ''
      },
    ] 
  },{
    label: 'Analytics',
    link: '',
    icon: '',
    subMenu: [] 
  },{
    label: 'Marketing',
    link: '',
    icon: '',
    subMenu: [] 
  },{
    label: 'Discounts',
    link: '',
    icon: '',
    subMenu: [] 
  },
]