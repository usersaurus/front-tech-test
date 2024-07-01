import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <IconButton onClick={() => navigate(-1)} type="button">
      <ArrowLeftIcon />
    </IconButton>
  );
};

export default BackButton;