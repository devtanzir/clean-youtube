import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useModal from "../../hooks/useModal";
import shortid from "shortid";

const usePlayer = () => {
  const { videoId, playlistId } = useParams();
  const { data } = useStoreState((state) => state.playlists);
  const [state, setState] = useState(false);
  const navigate = useNavigate();

  const current = data[playlistId];

  const allVideos = current.playlistItems.map((item) => {
    return item.contentDetails.videoId;
  });

  const currentIndex = allVideos.indexOf(videoId);
  const currentVideo = current.playlistItems[currentIndex];

  const handlePrevious = () => {
    const prevIndex =
      currentIndex === 0 ? allVideos.length - 1 : currentIndex - 1;
    navigate(`/${playlistId}/player/${allVideos[prevIndex]}`);
  };

  const handleNext = () => {
    const nextIndex =
      currentIndex === allVideos.length - 1 ? 0 : currentIndex + 1;
    navigate(`/${playlistId}/player/${allVideos[nextIndex]}`);
  };
  const PlaylistIcon = () => {
    setState(!state);
  };

  /**
   * Note features
   */
  const [currentTime, setCurrentTime] = useState(0);
  const [playable, setPlayable] = useState(true);
  const notes = useStoreActions((actions) => actions.notes);
  const NoteData = useStoreState((state) => state.notes);
  const noteContents = NoteData.data[videoId];
  const { handleClickOpen, handleClose, open } = useModal();

  const onProgress = (progress) => {
    setCurrentTime(progress.playedSeconds);
  };
  const addNote = (content, timeStamp) => {
    notes.createNote({
      id: shortid.generate(),
      videoId,
      timeStamp,
      content,
    });
  };
  const updateNote = (note) => {
    notes.updateNote(note);
  };
  const deleteNote = (note, bool) => {
    if (bool) {
      notes.deleteNote(note);
    }
  };
  const handleNote = () => {
    setPlayable(false);
    handleClickOpen();
  };
  const submitNote = () => {
    setPlayable(true);
  };
  return {
    videoId,
    playlistId,
    state,
    current,
    allVideos,
    currentIndex,
    currentVideo,
    handlePrevious,
    handleNext,
    PlaylistIcon,
    currentTime,
    playable,
    noteContents,
    handleClose,
    open,
    onProgress,
    addNote,
    updateNote,
    deleteNote,
    handleNote,
    submitNote,
  };
};

export default usePlayer;
