"use client"

import { useState, useEffect } from "react";
import { CreateTaskModal } from "../modals/create-task-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    if (!isMounted) {
      return null;
    }
    return (
        <>
        <CreateTaskModal />
        </>
    )
}
