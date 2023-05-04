import { useAppContext } from "@/pages/App";
import { IconButton, ListItemButton, ListItemText } from "@mui/material";
import { FaFile } from "react-icons/fa";

type Props = {
  file: {
    name: string;
    path: string;
  };
};

export default function FileListItem({ file }: Props) {
   const { handleNavigateForward } = useAppContext();

  return (
    <ListItemButton dense divider onClick={() => handleNavigateForward(file.name)}>
      <IconButton>
        <FaFile />
      </IconButton>
      <ListItemText primary={file.name} />
    </ListItemButton>
  );
}
