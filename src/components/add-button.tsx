import { PlusCircledIcon } from "@radix-ui/react-icons";
import { IconButton, IconButtonProps, Tooltip } from "@radix-ui/themes";
import { RefAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { JSX } from "react/jsx-runtime";

type AddButtonProps = JSX.IntrinsicAttributes & IconButtonProps & RefAttributes<HTMLButtonElement>

const AddButton = (props: AddButtonProps) => {
  const navigate = useNavigate();

  return (
    <Tooltip content="Add planet">
      <IconButton aria-label="add planet button" onClick={() => navigate('/create')} {...props} type="button">
        <PlusCircledIcon aria-label="add planet icon" />
      </IconButton>
    </Tooltip>
  );
};

export default AddButton;