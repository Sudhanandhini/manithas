export default function DriveAttachmentNote({ driveLink }: { driveLink: string | null }) {
    return (
        <div className="admin-field">
            <label>Attachments</label>
            {driveLink ? (
                <>
                    <small style={{ display: "block", marginBottom: 8 }}>
                        Add any files you&apos;d like to share (images, PDF, Word, Excel, ZIP, etc.) to your Google Drive
                        folder — add as many as you need.
                    </small>
                    <a href={driveLink} target="_blank" rel="noreferrer" className="admin-btn admin-btn-secondary">
                        Open Google Drive Folder
                    </a>
                </>
            ) : (
                <small style={{ display: "block" }}>
                    No Google Drive folder has been set up for your account yet. Contact support to get one added.
                </small>
            )}
        </div>
    );
}
