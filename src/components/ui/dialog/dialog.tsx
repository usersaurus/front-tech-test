import { AlertDialog, Button, Flex, IconButton } from "@radix-ui/themes";
import { TrashIcon } from "@radix-ui/react-icons";

type DialogProps = {
  onConfirm: () => void;
  onCancel: () => void;
  alertDescription: string;
  cancelText?: string;
  confirmText?: string;
  icon?: React.ReactNode;
};

const Dialog = (props: DialogProps) =>
  <AlertDialog.Root>
    <AlertDialog.Trigger>
      <IconButton aria-label="alert button">
        {props.icon || <TrashIcon />}
      </IconButton>
    </AlertDialog.Trigger>
    <AlertDialog.Content maxWidth="450px">
      <AlertDialog.Title>Delete planet</AlertDialog.Title>
      <AlertDialog.Description size="2">
        {props.alertDescription}
      </AlertDialog.Description>

      <Flex gap="3" mt="4" justify="end">
        <AlertDialog.Cancel>
          <Button variant="soft" color="gray" onClick={props.onCancel}>
            {props.cancelText || 'Cancel'}
          </Button>
        </AlertDialog.Cancel>
        <AlertDialog.Action>
          <Button variant="solid" color="red" onClick={props.onConfirm}>
            {props.confirmText || 'Confirm'}
          </Button>
        </AlertDialog.Action>
      </Flex>
    </AlertDialog.Content>
  </AlertDialog.Root>;

export default Dialog;