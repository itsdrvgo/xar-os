import { cn, wait } from "@/src/lib/utils";
import { useRouter } from "next/navigation";
import * as React from "react";
import { Icons } from "../icons/icons";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        const router = useRouter();
        const [password, setPassword] = React.useState("");
        const [isLoading, setLoading] = React.useState(false);

        const handleRedirect = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setLoading(true);
            await wait(3000);
            setLoading(false);
            router.replace("/desktop");
        };

        return (
            <form className="relative" onSubmit={(e) => handleRedirect(e)}>
                <input
                    type={"password"}
                    autoFocus
                    value={password}
                    className={cn(
                        "flex h-8 w-full rounded-full border-0 bg-white/30 px-3 py-2 text-xs ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground backdrop:blur-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
                        className
                    )}
                    onChange={(e) => setPassword(e.target.value.toLowerCase())}
                    ref={ref}
                    {...props}
                />
                <button
                    type="submit"
                    disabled={!password.length}
                    className="absolute right-3 top-0 h-full rounded-full"
                >
                    {isLoading ? (
                        <Icons.spinner className="h-4 w-4 animate-spin" />
                    ) : (
                        <Icons.arrowRight className="h-4 w-4" />
                    )}
                </button>
            </form>
        );
    }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
