import { useState } from "react";

interface Props {
    assignment: any;
    close: () => void;
}

export default function SubmitModal({ assignment, close }: Props) {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selected = e.target.files?.[0] || null;
        setFile(selected);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <h2>Submit Assignment</h2>
                <p><strong>{assignment.title}</strong></p>

                <input type="file" onChange={handleFileChange} />

                {file && <p>Selected: <strong>{file.name}</strong></p>}

                <div className="modal-actions">
                    <button className="cancel-btn" onClick={close}>Cancel</button>
                    <button className="submit-btn">Submit</button>
                </div>
            </div>
        </div>
    );
}
