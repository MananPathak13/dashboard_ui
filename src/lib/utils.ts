
import { currentUser } from "@clerk/nextjs/server";

/**
 * Fetches the current user and returns their role from public metadata.
 */
export const getUserRole = async (): Promise<string | undefined> => {
    const user = await currentUser();
    return (user?.publicMetadata?.role as string) ?? "Guest";
};