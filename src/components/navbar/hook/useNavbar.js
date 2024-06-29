import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";
import useModal from "../../../hooks/useModal";
import { toast } from "react-toastify";

const useNavbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const playlist = useStoreActions((actions) => actions.playlists);
  const playlistState = useStoreState((state) => state.playlists);
  const { handleClickOpen, handleClose, open } = useModal();

  const getPlaylistId = async (playlistId) => {
    const res = await playlist.getPlaylists(playlistId);
    if (res.success) {
      toast.success(res.message);
      handleClose();
    } else {
      toast.error(res.message);
    }
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return {
    mobileOpen,
    handleDrawerToggle,
    playlistState,
    handleClickOpen,
    open,
    handleClose,
    getPlaylistId,
    container,
  };
};

export default useNavbar;
