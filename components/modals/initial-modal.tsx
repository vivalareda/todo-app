"use client";

import * as z from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
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

export const InitialModal = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
            className: '',
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post("/api/class", values)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Dialog open>
            <DialogContent>
                <DialogHeader className="pt-8 px-6 pb-5 justify-center">
                    <DialogTitle className="text-center">
                        Start off by creating a class.
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
                                        Enter your class Id
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Ex.: PHY335"
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
    )

}
