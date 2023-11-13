"use client";

import { wait } from "@/src/lib/utils";
import { Input, InputProps } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { KeyboardEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { Icons } from "../icons/icons";

function LoginForm({ ...props }: InputProps) {
    const router = useRouter();

    const [isLoading, setLoading] = useState(false);
    const [password, setPassword] = useState("");

    const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (password.length < 4)
                return toast("Password must be at least 4 characters long!");

            setLoading(true);
            await wait(3000);
            router.replace("/desktop");
        }
    };

    return (
        <Input
            autoFocus
            placeholder="Enter password"
            classNames={{
                inputWrapper:
                    "bg-white/10 group[data-focus=true]:bg-white/20 group-data-[focus=true]:bg-white/20 h-8",
                input: "text-xs",
            }}
            radius="full"
            type="password"
            size="sm"
            value={password}
            onValueChange={setPassword}
            endContent={
                isLoading ? (
                    <Icons.spinner className="h-4 w-4 animate-spin" />
                ) : (
                    <Icons.arrowRight className="h-4 w-4" />
                )
            }
            onKeyDown={handleKeyDown}
            {...props}
        />
    );
}

export default LoginForm;
