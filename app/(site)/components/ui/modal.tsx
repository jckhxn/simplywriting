import { Button } from "@/app/(site)/components/ui/button";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/app/(site)/components/ui/dialog";

export function Modal() {
  return (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button variant="outline">Open Modal</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Modal Title</DialogTitle>
          <DialogDescription>
            This is the description of the modal content.
          </DialogDescription>
        </DialogHeader>
        <div className="py-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget
            aliquam nisl nisl sit amet nisl.
          </p>
          <div className="mt-4">
            <img
              alt="Modal Content"
              className="rounded-lg"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "500/300",
                objectFit: "cover",
              }}
              width="500"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
