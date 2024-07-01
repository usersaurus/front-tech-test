import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <IconButton aria-label="back button" onClick={() => navigate(-1)} type="button">
      <ArrowLeftIcon aria-label="back icon" />
    </IconButton>
  );
};

export default BackButton;