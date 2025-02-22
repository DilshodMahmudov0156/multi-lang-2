import { redirect } from "next/navigation";

function RedirectPage() {
    return (
        redirect("/uz")
    );
}

export default RedirectPage;
