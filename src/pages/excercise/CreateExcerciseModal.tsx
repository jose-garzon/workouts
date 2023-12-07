import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

interface CreateExcerciseModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
}

export function CreateExcerciseModal({
  isOpen,
  onClose,
  name,
}: CreateExcerciseModalProps) {
  return (
    <Modal
      radius="none"
      isOpen={isOpen}
      onOpenChange={onClose}
      classNames={{ base: "p-4 bg-zinc-700" }}
    >
      <ModalContent>
        <ModalHeader>
          <p className="text-3xl">{name}</p>
        </ModalHeader>
        <ModalBody>
          <form className="flex gap-5">
            <Input radius="none" label="Reps" size="lg" />
            <Input radius="none" label="Weight" size="lg" />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button size="lg" fullWidth radius="none" color="primary">
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
