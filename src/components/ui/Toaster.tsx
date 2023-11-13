"use client";

import toast, { ToastBar, Toaster } from "react-hot-toast";
import { Icons } from "../icons/icons";

function CustomToaster() {
    return (
        <Toaster>
            {(t) => (
                <ToastBar
                    toast={t}
                    position="top-right"
                    style={{
                        ...t.style,
                        background: "hsla(0, 0%, 100%, 0.2)",
                        backdropFilter: "blur(10px)",
                        fontSize: "0.875rem",
                        color: "#fff",
                    }}
                >
                    {({ message, icon }) => (
                        <>
                            {icon}
                            {message}
                            {t.type !== "loading" && (
                                <div className="px-1">
                                    <button
                                        onClick={() => toast.dismiss(t.id)}
                                        className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20"
                                    >
                                        <Icons.close className="h-3 w-3" />
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </ToastBar>
            )}
        </Toaster>
    );
}

export default CustomToaster;
