import React, {FormEvent, useState} from "react";
import CaretRight from "./CaretRight";
import Email from "./Email";

const HeroSectionForm = () => {
    const [emailRaw, setEmailRaw] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (emailRaw === undefined) {
            return;
        }
        const email = Email.from(emailRaw);
        if (email._tag === "Left") {
            alert("Email is invalid");
            return;
        }

        alert("Welcome to the team!");
    }

    const handleEmailChange = (e: FormEvent<HTMLInputElement>) => {
        setEmailRaw(e.currentTarget.value);
    }

    return (
        <div id="hero-section-form-wrapper">
            <form id="hero-section-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Email"
                    value={emailRaw}
                    onChange={handleEmailChange}/>
                <button type="submit">
                    Join <CaretRight/>
                </button>
            </form>
        </div>
    );
};

export default HeroSectionForm;