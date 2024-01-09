"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
    name: z.string(),
    description: z.string()
})

export const InitialModal = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
            name: '',
            description: ''
        }
    })

    return (

        <Dialog open>
            <DialogContent>
                <DialogHeader className="pt-8 px-6 pb-5 justify-center">
                    <DialogTitle className="text-center">
                        What TODO today?
                    </DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form>
                        <FormItem>
                            <FormControl>
                                <FormField
                                    control={form.control}
                                    name="name"
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
                            </FormControl>
                        </FormItem>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )

}
