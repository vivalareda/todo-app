import { useModal } from "@/hooks/use-modal-store";
import * as z from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import{
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    className: z.string(),
})

const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues:{
        className: '',
    }
})


const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
        console.log(values)
        await axios.post("/api/class", values)
    } catch (error) {
        console.log(error)
    }
}

export const CreateTaskModal = () => {
    const { isOpen, onClose } = useModal();
    const isModalOpen = isOpen

    const handleClose = () => {
        form.reset();
        onClose();
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader className="pt-8 px-6 pb-5 justify-center">
                    <DialogTitle className="text-center">
                        What TODO today?
                    </DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="className"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-bold">
                                        Enter the task's name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="I want to be reminded about my homework..."
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-center pt-4">
                            <DialogFooter>
                                <Button variant={"ghost"}>
                                    Create
                                </Button>
                            </DialogFooter>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
     );
}

export default CreateTaskModal;
