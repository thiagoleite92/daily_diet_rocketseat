import { EditPencil, PlusSign, TrashCan } from './styles';

export type RenderIconProps = IconTypes & {
  variant: 'PRIMARY' | 'OUTLINE';
};

export type IconTypes = {
  icon: 'plus-sign' | 'edit-pencil' | 'trash-can' | '';
};

export function RenderICon({ icon, variant }: RenderIconProps) {
  const icons = {
    'plus-sign': <PlusSign variant={variant} />,
    'edit-pencil': <EditPencil variant={variant} />,
    'trash-can': <TrashCan variant={variant} />,
    '': null,
  };
  return icons[icon] || null;
}
