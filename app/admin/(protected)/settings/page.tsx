import { getSiteSettings } from "@/lib/seo";
import SettingsForm from "./SettingsForm";

export const dynamic = "force-dynamic";

export default async function AdminSettingsPage() {
    const settings = await getSiteSettings();

    return (
        <div className="admin-card">
            <h2 style={{ marginTop: 0 }}>Site Settings</h2>
            <SettingsForm settings={settings} />
        </div>
    );
}
