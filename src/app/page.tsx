import { routing } from "@/i18n/routing";
import { redirect } from "next/navigation";

function RedirectPage() {
    return (
        redirect(routing.defaultLocale)
    );
}

export default RedirectPage;