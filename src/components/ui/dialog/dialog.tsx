import { AlertDialog, Button, Flex } from "@radix-ui/themes";

type DialogProps = {
  onConfirm: () => void;
  onCancel?: () => void;
  title: string;
  description: string;
  cancelText?: string;
  confirmText?: string;
  button?: React.ReactNode;
};

const Dialog = (props: DialogProps) =>
  <AlertDialog.Root>
    <AlertDialog.Trigger aria-label="alert button">
      {props.button ??
        <Button>
          Open
        </Button>
      }
    </AlertDialog.Trigger>
    <AlertDialog.Content maxWidth="450px">
      <AlertDialog.Title>{props.title}</AlertDialog.Title>
      <AlertDialog.Description size="2">
        {props.description}
      </AlertDialog.Description>

      <Flex gap="3" mt="4" justify="end">
        <AlertDialog.Cancel>
          <Button variant="soft" color="gray" onClick={props.onCancel}>
            {props.cancelText ?? 'Cancel'}
          </Button>
        </AlertDialog.Cancel>
        <AlertDialog.Action>
          <Button variant="solid" color="red" onClick={props.onConfirm}>
            {props.confirmText ?? 'Confirm'}
          </Button>
        </AlertDialog.Action>
      </Flex>
    </AlertDialog.Content>
  </AlertDialog.Root>;

export default Dialog;