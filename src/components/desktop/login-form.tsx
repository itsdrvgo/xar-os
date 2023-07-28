"use client";

import { DefaultProps } from "@/src/types";
import { PasswordInput } from "../global/password-input";

function LoginForm({ className }: DefaultProps) {
    return <PasswordInput placeholder="Enter password" />;
}

export default LoginForm;
