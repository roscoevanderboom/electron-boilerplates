import { useAppContext } from "@/pages/App";
import { IconButton, ListItemButton, ListItemText } from "@mui/material";
import { BiFolder } from "react-icons/bi";

type Props = {
  folder: {
    name: string;
    path: string;
  };
};

export default function FolderListItem({ folder }: Props) {
  const { handleNavigateForward } = useAppContext();

  return (
    <ListItemButton dense divider onClick={() => handleNavigateForward(folder.name)}>
      <IconButton>
        <BiFolder />
      </IconButton>
      <ListItemText primary={folder.name} />
    </ListItemButton>
  );
}
